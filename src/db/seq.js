/**
 * @description sequelize 实例
 * @author Axton
 */

const Sequelize = require('sequelize')
const {
  MYSQL_CONF
} = require('../conf/db')
const {
  host,
  user,
  password,
  database
} = MYSQL_CONF
const {
  isProd,
  isTest
} = require('../utils/env')

const conf = {
  host,
  dialect: 'mysql'
}

if (isTest) { //如果是测试环境，不在控制台打印sql语句
  conf.logging = () => {}
}

//线上环境，使用连接池
if (isProd) {
  conf.pool = {
    max: 5, //连接池中最大连接数量
    min: 0, //最小
    idle: 10000 //如果一个连接池 10s 内没有被使用， 则释放
  }
}

const seq = new Sequelize(database, user, password, conf)

module.exports = seq