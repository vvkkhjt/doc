webpackJsonp([44],{"/B+H":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=a("mtWM"),r=a.n(i),s=a("PJh5"),n=a.n(s),o={name:"RedisInfo",data:function(){return{loading:!0,memory:{series:[],chartOptions:{chart:{animations:{enabled:!0,easing:"linear",dynamicAnimation:{speed:3e3}},toolbar:{show:!1},zoom:{enabled:!1}},dataLabels:{enabled:!1},stroke:{curve:"smooth"},title:{text:"Redis内存实时占用情况（kb）",align:"left"},markers:{size:0},xaxis:{},yaxis:{},legend:{show:!1}},data:[],xdata:[]},key:{series:[],chartOptions:{chart:{animations:{enabled:!0,easing:"linear",dynamicAnimation:{speed:3e3}},toolbar:{show:!1},zoom:{enabled:!1}},dataLabels:{enabled:!1},colors:["#f5564e"],stroke:{curve:"smooth"},title:{text:"Redis key实时数量（个）",align:"left"},markers:{size:0},xaxis:{},yaxis:{},legend:{show:!1}},data:[],xdata:[]},redisInfo:[],timer:null}},beforeDestroy:function(){this.timer&&clearInterval(this.timer)},mounted:function(){var e=this,t=1e10,a=1e10,i=-1e10,s=-1e10;this.timer=setInterval(function(){-1!==e.$route.path.indexOf("redis")&&r.a.all([e.$get("redis/keysSize"),e.$get("redis/memoryInfo")]).then(function(r){var o=r[1].data.used_memory/1e3,d=r[0].data.dbSize;o<t&&(t=o),o>i&&(i=o),d<a&&(a=d),d>s&&(s=d);var m=n()().format("hh:mm:ss");e.memory.data.push(o),e.memory.xdata.push(m),e.key.data.push(d),e.key.xdata.push(m),e.memory.data.length>=6&&(e.memory.data.shift(),e.memory.xdata.shift()),e.key.data.length>=6&&(e.key.data.shift(),e.key.xdata.shift()),e.$refs.memoryInfo.updateSeries([{name:"内存(kb)",data:e.memory.data.slice()}]),e.$refs.memoryInfo.updateOptions({xaxis:{categories:e.memory.xdata.slice()},yaxis:{min:t,max:i}},!0,!0),e.$refs.keySize.updateSeries([{name:"key数量",data:e.key.data.slice()}]),e.$refs.keySize.updateOptions({xaxis:{categories:e.key.xdata.slice()},yaxis:{min:a-2,max:s+2}},!0,!0),e.loading&&(e.loading=!1)}).catch(function(t){e.$message.error("获取Redis信息失败"),e.timer&&clearInterval(e.timer)})},3e3),this.$get("redis/info").then(function(t){e.redisInfo=t.data.data})}},d={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticStyle:{width:"100%","margin-top":"1rem"}},[a("a-row",{attrs:{gutter:8}},[a("a-col",{attrs:{span:12}},[a("apexchart",{ref:"memoryInfo",attrs:{type:"area",height:"350",options:e.memory.chartOptions,series:e.memory.series}})],1),e._v(" "),a("a-col",{attrs:{span:12}},[a("apexchart",{ref:"keySize",attrs:{type:"area",height:"350",options:e.key.chartOptions,series:e.key.series}})],1)],1),e._v(" "),a("a-row",{attrs:{gutter:8}},[a("a-divider",{attrs:{orientation:"left"}},[e._v("Redis详细信息")]),e._v(" "),a("table",{staticStyle:{"border-bottom":"1px solid #f1f1f1"}},e._l(e.redisInfo,function(t,i){return a("tr",{key:i,staticStyle:{"border-top":"1px solid #f1f1f1"}},[a("td",{staticStyle:{padding:".7rem 1rem"}},[e._v(e._s(t.key))]),e._v(" "),a("td",{staticStyle:{padding:".7rem 1rem"}},[e._v(e._s(t.description))]),e._v(" "),a("td",{staticStyle:{padding:".7rem 1rem"}},[e._v(e._s(t.value))])])}))],1)],1)},staticRenderFns:[]},m=a("VU/8")(o,d,!1,function(e){a("bRPb")},null,null);t.default=m.exports},bRPb:function(e,t){}});