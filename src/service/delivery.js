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

async function getDelivery(uId, pageIndex) {
  const result = await Delivery.findAndCountAll({
    limit: 5,
    offset: pageIndex * 5,
    order: [
      ['id', 'desc']
    ],
    where: {
      uId
    }
  })

  let deliveryList = result.rows.map(row => row.dataValues)

  return {
    count: result.count,
    deliveryList
  }
}

module.exports = {
  addDelivery,
  getDelivery
}