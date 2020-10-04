/**
 * @description delivery service
 * @author Axton
 */

const {
  Delivery
} = require('../db/model/index')


/**
 * 创建投递记录
 * @param {decimal} unusual 异常情况标志
 * @param {text} comment 异常情况说明
 */
async function addDelivery(uId, unusual, comment) {
  const result = await Delivery.create({
    uId,
    unusual, 
    comment
  })
  return result.dataValues
}

async function getDelivery(uId) {
  const result = await Delivery.findAndCountAll({
    where: {
      uId
    }

  })
  // return result.dataValues
  console.log(result.dataValues)
}

module.exports = {
  addDelivery,
  getDelivery
}