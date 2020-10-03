/**
 * @description user service
 * @author Axton
 */

const { User } = require('../db/model/index')

 /**
  * 获取用户信息
  * @param {string} userId 用户编号
  */
async function getUserInfo(userId) {
  const result = await User.findOne({
    where: {
      userId
    }
  })
  if (result == null) {
    return result
  }
  return result.dataValues
}

async function createUser({userId, nickName, gender, city}) {
  const result = await User.create({
    userId, 
    nickName, 
    gender, 
    city
  })
  return result.dataValues
}


module.exports = {
  getUserInfo,
  createUser
}