const router = require('koa-router')()
const { loginCheck } = require('../middlewares/loginChecks')
const { recordDelivery, getDelivery } = require('../controller/delivery')
const {
  get,
  set
} = require('../cache/_redis')

router.prefix('/delivery')

router.post('/record', loginCheck, async (ctx, next) => {
  const { unusual, comment } = ctx.request.body
  const sessionRes = await get(ctx.request.body._3rd_session)
  const uId = sessionRes.uId

  ctx.body = await recordDelivery(uId, unusual, comment)
})

router.get('/query', loginCheck, async (ctx, next) => {
  const _3rd_session = ctx.request.query
  const sessionRes = await get(_3rd_session)
  const uId = sessionRes.uId
  console.log(uId)
  ctx.body = await getDelivery(uId)
})

module.exports = router
