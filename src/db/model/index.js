/**
 * @description 数据模型入口文件
 * @author Axton
 */

const User = require('./User')
const Delivery = require('./Delivery')

User.hasMany(Delivery, {
  foreignKey: 'uId'
})

module.exports = {
  User,
  Delivery
}