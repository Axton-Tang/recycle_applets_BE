/**
 * @description 封装 Sequelize 数据类型
 * @author Axton
 */

const Sequeize = require('sequelize')

module.exports = {
  STRING: Sequeize.STRING,
  DECIMAL: Sequeize.DECIMAL,
  TEXT: Sequeize.TEXT,
  BOOLEAN: Sequeize.BOOLEAN,
  INTEGER: Sequeize.INTEGER
}