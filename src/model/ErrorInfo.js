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
}
