const {
  get,
  set
} = require('../cache/_redis')
const {
  ErrorModel
} = require('../model/ResModel')
const { loginCheckFailInfo } = require('../model/ErrorInfo')

async function loginCheck (ctx, next) {
  // 查询数据库，判断_3rd_session是否存在且有效
  const res = await get(ctx.request.body._3rd_session)
  if (res) {
    ctx.request.body.openid = res.openid
    await next()
  } else {
    ctx.body = new ErrorModel(loginCheckFailInfo)
  }
}

async function loginCheckGet(ctx, next) {
  // 查询数据库，判断_3rd_session是否存在且有效
  const res = await get(ctx.request.query._3rd_session)
  if (res) {
    await next()
  } else {
    ctx.body = new ErrorModel(loginCheckFailInfo)
  }
}

module.exports = {
  loginCheck,
  loginCheckGet
}