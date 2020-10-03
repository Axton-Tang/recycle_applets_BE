/**
 * @description Sequelize 同步数据库
 * @author Axton
 */

const seq = require('./seq')
require('./model/index')

//测试连接
seq.authenticate().then(() => {
  console.log('auth ok')
}).catch(() => {
  console.log('auth err')
})

//执行同步
seq.sync({
  force: true
}).then(() => { //将force设为true是为了如果数据库中已经存在相同的表则强行覆盖
  console.log('sync ok')
  process.exit() //将程序退出
})