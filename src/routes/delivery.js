const router = require('koa-router')()
const { loginCheck, loginCheckGet } = require('../middlewares/loginChecks')
const { recordDelivery, queryDelivery } = require('../controller/delivery')
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

router.get('/query/:pageIndex', loginCheckGet, async (ctx, next) => { //此处注意loginCheckGet只适用于GET请求
  const { pageIndex } = ctx.params
  const sessionRes = await get(ctx.request.query._3rd_session)    //此处只能放到get里面
  const uId = sessionRes.uId
  ctx.body = await queryDelivery(uId, pageIndex)
})

module.exports = router
