/**
 * @description 投递数据模型
 * @author Axton
 */

const seq = require('../seq')
const {
  TEXT,
  DECIMAL,
  INTEGER
} = require('../types')

const User = seq.define('delivery', {
  uId: {
    type: INTEGER,
    allowNull: false,
    unique: true,
    comment: '用户在表中的ID'
  },
  unusual: {
    type: DECIMAL,
    allowNull: false,
    comment: '异常情况（0正常， 1异常）'
  },
  comment: {
    type: TEXT,
    allowNull: true,
    comment: '异常情况的说明'
  }

})

module.exports = User