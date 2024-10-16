<template>
  <div style="width: 100%; padding: 0 1rem">
    <div class="global-search-main">
      <div class="global-search-wrapper">
        <a-auto-complete
          :dataSource="dataSource"
          class="global-search"
          @select="onSelect"
          @search="handleSearch"
          placeholder="Please enter the city name">
          <a-input>
            <a-button slot="suffix" class="search-btn" type="primary" @click.stop="searchWeather">
              <a-icon type="search"/>
            </a-button>
          </a-input>
        </a-auto-complete>
      </div>
    </div>
    <div class="weather-area" v-show="!loading">
      <div class="weather-chart-info">
        <apexchart ref="seven" height="350" type=line :options="seven.chartOptions" :series="seven.series" />
      </div>
      <div class="weather-chart-info">
        <apexchart ref="future" height="350" type=area :options="future.chartOptions" :series="future.series" />
      </div>
    </div>
    <div class="weather-area">
      <div class="weather-info">
        <a-card :loading="loading" :title="this.weather.countyName + ' Current Weather'">
          <a-row>
            <a-col :span="8"><p>Weather：{{this.weather.realtime.weather}}</p></a-col>
            <a-col :span="8"><p>Wind Direction：{{this.weather.realtime.wD}}</p></a-col>
            <a-col :span="8"><p>Wind Force Size：{{this.weather.realtime.wS}}</p></a-col>
          </a-row>
          <a-row>
            <a-col :span="8"><p>Temperature：{{this.weather.realtime.temp}}℃</p></a-col>
            <a-col :span="8"><p>Perceived Temperature：{{this.weather.realtime.sendibleTemp}}℃</p></a-col>
            <a-col :span="8"><p>Air Humidity：{{this.weather.realtime.sD}}%</p></a-col>
          </a-row>
          <a-row>
            <a-col :span="8"><p>Update Time：{{this.weather.realtime.time}}</p></a-col>
          </a-row>
        </a-card>
      </div>
      <div class="weather-info">
        <a-card :loading="loading" :title="this.weather.countyName + ' Future Weather'">
          <a-row>
            <a-col :span="24" v-for="(w, index) in this.weather.weathers" :key="index">
              <template v-if="index !== 6">
                <p>{{w.date}}【{{w.week}}】：Sunrise time --- {{w.sun_rise_time}}      Sunset time --- {{w.sun_down_time}}      天气 --- {{w.weather}}</p>
              </template>
            </a-col>
          </a-row>
        </a-card>
      </div>
      <div class="weather-info">
        <a-card :loading="loading" :title="this.weather.countyName + ' Life index'">
          <a-row>
            <a-col :span="24" v-for="(i, index) in this.weather.indexes" :key="index">
              <p>{{i.name}} --- {{i.content}}</p>
            </a-col>
          </a-row>
        </a-card>
      </div>
      <div class="weather-info" v-if="this.weather.alarms.length">
        <a-card :loading="loading" :title="this.weather.countyName + ' Warning information'">
          <a-col :span="24">
            <p>Warning Title --- {{this.weather.alarms[0].alarmDesc}}</p>
            <p>Warning Type --- {{this.weather.alarms[0].alarmTypeDesc}}</p>
            <p>Warning Level --- {{this.weather.alarms[0].alarmLevelNoDesc}}</p>
            <p>Release Time --- {{this.weather.alarms[0].publishTime}}</p>
            <p>Preventive Measure --- {{this.weather.alarms[0].precaution}}</p>
            <a-popover title="Warning Details">
              <template slot="content">
                <div style="max-width: 360px">{{this.weather.alarms[0].alarmContent}}</div>
              </template>
              <p>Warning Details --- {{this.weather.alarms[0].alarmContent}}</p>
            </a-popover>
          </a-col>
        </a-card>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios'

export default {
  data () {
    return {
      loading: true,
      seven: {
        series: [],
        chartOptions: {
          chart: {
            shadow: {
              enabled: true,
              color: '#000',
              top: 18,
              left: 7,
              blur: 10,
              opacity: 1
            },
            toolbar: {
              show: false
            }
          },
          colors: ['#f5564e', '#35d0ba'],
          dataLabels: {
            enabled: true
          },
          stroke: {
            curve: 'smooth'
          },
          markers: {
            size: 4
          },
          xaxis: {},
          yaxis: {}
        }
      },
      future: {
        series: [],
        chartOptions: {
          chart: {
            toolbar: {
              show: false
            }
          },
          dataLabels: {
            enabled: false
          },
          stroke: {
            curve: 'smooth'
          },
          xaxis: {}
        }
      },
      dataSource: [],
      storage: [],
      citys: [],
      areaId: '',
      weather: {
        provinceName: '',
        countyName: '',
        weathers: [],
        day_c: [],
        night_c: [],
        hours_c: [],
        dateArr: [],
        timeArr: [],
        publishTime: '',
        alarms: [],
        realtime: {},
        indexes: []
      }
    }
  },
  mounted () {
    axios.get('../../../static/file/city.json').then((r) => {
      this.citys = r.data
    })
    this.areaId = '101010100'
    this.searchWeather()
  },
  methods: {
    handleSearch (value) {
      this.dataSource = []
      this.storage = []
      this.areaId = ''
      if (!value) {
        return
      }
      for (let i = 0; i < this.citys.length; i++) {
        let currentCity = this.citys[i]
        if (currentCity.countyname.indexOf(value) !== -1) {
          this.dataSource.push(currentCity.countyname)
          this.storage.push(currentCity.areaid)
        }
      }
    },
    onSelect (value) {
      let index = this.dataSource.indexOf(value)
      this.areaId = this.storage[index]
    },
    searchWeather () {
      if (!this.areaId) {
        this.$message.warning('Please select a city')
      } else {
        this.$get('weather?areaId=' + this.areaId).then((r) => {
          let data = JSON.parse(r.data.data)
          if (data.code === '200') {
            this.weather = {
              countyName: '',
              weathers: [],
              day_c: [],
              night_c: [],
              hours_c: [],
              dateArr: [],
              timeArr: [],
              publishTime: ''
            }
            this.loading = false
            this.weather.provinceName = data.value[0].provinceName
            this.weather.countyName = data.value[0].city
            this.weather.weathers = data.value[0].weathers
            this.weather.alarms = data.value[0].alarms
            this.weather.realtime = data.value[0].realtime
            this.weather.indexes = data.value[0].indexes
            let weathers = this.weather.weathers
            let min = 0
            let max = 0
            for (let i = 0; i < weathers.length; i++) {
              if (i === weathers.length - 1) {
                this.weather.day_c.unshift(parseFloat(weathers[i].temp_day_c))
                this.weather.night_c.unshift(parseFloat(weathers[i].temp_night_c))
                this.weather.dateArr.unshift(weathers[i].date.split('-')[1] + '-' + weathers[i].date.split('-')[2])
              } else {
                this.weather.day_c.push(parseFloat(weathers[i].temp_day_c))
                this.weather.night_c.push(parseFloat(weathers[i].temp_night_c))
                this.weather.dateArr.push(weathers[i].date.split('-')[1] + '-' + weathers[i].date.split('-')[2])
              }
              if (i === 0) {
                max = this.weather.day_c[0]
                min = this.weather.night_c[0]
              } else {
                if (this.weather.day_c[i] > max) {
                  max = this.weather.day_c[i]
                }
                if (this.weather.night_c[i] < min) {
                  min = this.weather.night_c[i]
                }
              }
            }
            let weather3HoursDetailsInfos = data.value[0].weatherDetailsInfo.weather3HoursDetailsInfos
            this.weather.publishTime = data.value[0].weatherDetailsInfo.publishTime
            for (let i = 0; i < weather3HoursDetailsInfos.length; i++) {
              let time = weather3HoursDetailsInfos[i].endTime.split(' ')[1].split(':')
              this.weather.hours_c.push(parseFloat(weather3HoursDetailsInfos[i].highestTemperature))
              this.weather.timeArr.push(time[0] + ':' + time[1])
            }
            this.$refs.seven.updateSeries([
              {
                name: 'Highest temperature',
                data: this.weather.day_c
              },
              {
                name: 'Minimum temperature',
                data: this.weather.night_c
              }
            ], true)
            this.$refs.future.updateSeries([
              {
                name: 'Future temperature',
                data: this.weather.hours_c
              }
            ])
            this.$refs.seven.updateOptions({
              xaxis: {
                categories: this.weather.dateArr
              },
              yaxis: {
                min: min - 5,
                max: max + 5
              },
              title: {
                text: `${this.weather.provinceName} - ${this.weather.countyName}Temperature in the next seven days`,
                align: 'center'
              }
            }, true, true)
            this.$refs.future.updateOptions({
              xaxis: {
                categories: this.weather.timeArr
              },
              title: {
                text: `${this.weather.provinceName} - ${this.weather.countyName}Details of Future Temperature`,
                align: 'center'
              }
            }, true, true)
          }
        }).catch((r) => {
          console.error(r)
          this.$message.error('Weather query failed')
        })
      }
    }
  }
}
</script>
<style lang="less">
  .global-search-main {
    margin-bottom: 2.5rem;
    .global-search-wrapper {
      width: 300px;
      margin:0 auto;
      .global-search {
        width: 100%;
      }
    }
  }
  .weather-area {
    display: inline;
    .weather-chart-info {
      width: 49%;
      display:inline-block;
    }
    .weather-info {
      margin: .5rem 0;
      width: 100%;
      display: inline-block;
      p {
        margin-bottom: .4rem !important;
      }
    }
  }
  .global-search.ant-select-auto-complete {
    .ant-select-selection--single {
      margin-right: -46px;
    }
    .ant-input-affix-wrapper {
      .ant-input:not(:last-child) {
        padding-right: 62px;
      }
      .ant-input-suffix {
        right: 0;
      }
      .ant-input-suffix button {
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
      }
    }
  }
</style>
