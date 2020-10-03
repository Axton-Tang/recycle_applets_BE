const router = require('koa-router')()
const { login } = require('../controller/users')
const { loginCheck } = require('../middlewares/loginChecks')
const { SuccessModel } = require('../model/ResModel')

router.prefix('/users')

router.post('/login', async (ctx, next) => {
  ctx.body = await login(ctx)
})

router.post('/isLogin', loginCheck, async (ctx, next) => {
  ctx.body = new SuccessModel('登录成功')
})

module.exports = router
