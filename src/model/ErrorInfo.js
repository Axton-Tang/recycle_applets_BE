/**
 * @description 失败信息集合，包括 errno 和 message
 * @author Axton
 */

module.exports = {

  // 未登录
  loginCheckFailInfo: {
    errno: 10001,
    message: '您尚未登录'
  },
  registerFailInfo: {
    errno: 10002,
    message: '注册失败，请重试'
  },
  createDeliveryFailInfo: {
    errno: 10003,
    message: '创建投递记录失败'
  },
  getDeliveryFailInfo: {
    errno: 10004,
    message: '查找投递记录失败'
  }
}
