/**
 * @description users controll
 * @author Axton
 */

const koa2Req = require('koa2-request')
const {
  get,
  set
} = require('../cache/_redis')
const {
  SuccessModel,
  ErrorModel
} = require('../model/ResModel')
const { registerFailInfo } = require('../model/ErrorInfo')
const {  getUserInfo, createUser } = require('../service/user')

async function login(ctx) {
  const {
    code,
    nickName,
    city,
    gender
  } = ctx.request.body

  const APPID = 'wxb75020857b65d74d'
  const SECRET = '8cfad2773b21cac9f393cb4671b10a2c'
  let url = 'https://api.weixin.qq.com/sns/jscode2session?appid=' + APPID + '&secret=' + SECRET + '&js_code=' + code + '&grant_type=authorization_code'
  const res = await koa2Req(url);
  // 获取session_key和openid
  const {
    session_key,
    openid
  } = JSON.parse(res.body);

  if (session_key && openid) {

    let uId = ''
    const userInfo = await getUserInfo(openid)    
    if (userInfo == null) {     //获取用户信息后，如果发现为空，则进行注册
      const registerResult = await createUser({
        userId: openid, 
        nickName, 
        gender, 
        city
      })
      uId = registerResult.id
      if (!registerResult) {
        return new ErrorModel(registerFailInfo)
      }
      
    } else {
      uId = userInfo.id
    }

    // 生成_3rd_session
    const _3rd_session = `${Date.now()}+${Math.random()}`
    // 存入Redis并设置过期时间
    const result = await set(_3rd_session, JSON.stringify({
      session_key,
      openid,
      uId
    }))
    if (result) {
      return new SuccessModel(_3rd_session)
    }
  }
  return new ErrorModel('登录失败')
}

module.exports = {
  login
}