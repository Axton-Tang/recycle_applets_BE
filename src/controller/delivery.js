/**
 * @description delivery controll
 * @author Axton
 */

const {
  SuccessModel,
  ErrorModel
} = require('../model/ResModel')
const { createDeliveryFailInfo, getDeliveryFailInfo } = require('../model/ErrorInfo')
const { addDelivery, getDelivery } = require('../service/delivery')


async function recordDelivery(uId, unusual, comment) {
  try {
    const result = await addDelivery(uId, unusual, comment)
    return new SuccessModel(result)
  } catch(e) {
    console.error(e)
    return new ErrorModel(createDeliveryFailInfo)
  }
  
}

async function queryDelivery(uId) {
  try {
    const result = await getDelivery(uId)
    return new SuccessModel(result)
  } catch(e) {
    console.error(e)
    return new ErrorModel(getDeliveryFailInfo)
  }
}


module.exports = {
  recordDelivery,
  queryDelivery
}