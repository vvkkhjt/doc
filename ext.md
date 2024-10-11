SET GLOBAL sql_mode=(SELECT REPLACE(@@sql_mode,'ONLY_FULL_GROUP_BY',''));
mvn spring-boot:run -Dspring-boot.run.jvmArguments="-Duser.timezone=Asia/Shanghai"

docker run --name redis -d -p 6379:6379 --net doc -v /opt/property_cos/data/redis/:/data redis redis-server --appendonly yes

docker run --name mysql -e MYSQL_ROOT_PASSWORD=123456 -v /opt/property_cos/data/mysql/:/var/lib/mysql --net doc -p 3306:3306 -d mysql:5.7.44


SET "febs.cache.user.permission.vvkkhjt" "[{\"MENU_ID\":1,\"parent_id\":null,\"menu_name\":\"系统主页\",\"path\":\"/home\",\"component\":\"HomePage\",\"perms\":\"home\",\"icon\":null,\"type\":\"1\",\"order_num\":1,\"create_time\":\"2024-10-09 01:55:42\",\"modify_time\":\"2024-10-09 01:55:42\",\"create_time_from\":null,\"create_time_to\":null}]"

SET "febs.cache.user.config.3" "{\"userId\":3,\"theme\":\"light\",\"layout\":\"head\",\"multiPage\":\"0\",\"fixSiderbar\":\"1\",\"fixHeader\":\"1\",\"color\":\"rgb(66, 185, 131)\"}"

SET "febs.cache.user.role.vvkkhjt" "[{\"roleId\":75,\"roleName\":\"user\",\"remark\":\"用户\",\"createTime\":\"2024-10-09 01:42:35\",\"modifyTime\":\"2024-10-09 01:42:39\",\"createTimeFrom\":null,\"createTimeTo\":null,\"menuId\":null}]"

SET "febs.cache.user.vvkkhjt" "{\"userId\":3,\"username\":\"vvkkhjt\",\"password\":\"324ca2f02a3410a69b4f2c610edfcdf5\",\"deptId\":null,\"deptName\":null,\"email\":null,\"mobile\":null,\"status\":\"1\",\"createTime\":\"2024-10-08 16:33:57\",\"modifyTime\":null,\"lastLoginTime\":\"2024-10-09 02:33:16\",\"ssex\":\"2\",\"description\":\"注册用户\",\"avatar\":\"default.jpg\",\"roleId\":\"75\",\"roleName\":\"user\",\"sortField\":null,\"sortOrder\":null,\"createTimeFrom\":null,\"createTimeTo\":null,\"id\":null,\"authCacheKey\":3}"