/**
 * @description 用户数据模型
 * @author Axton
 */

const seq = require('../seq')
const {
  STRING,
  DECIMAL
} = require('../types')

const User = seq.define('user', {
  userId: {
    type: STRING,
    allowNull: false,
    unique: true,
    comment: '小程序openId，用户唯一标识'
  },
  nickName: {
    type: STRING,
    allowNull: false,
    comment: '用户微信昵称'
  },
  gender: {
    type: DECIMAL,
    allowNull: false,
    defaultValue: 0,
    comment: '性别: 男1 女2 未知0'
  },
  city: {
    type: STRING,
    allowNull: false,
    comment: '城市'
  }
})

module.exports = User