require('./globals')

let co     = require('co')
let koa    = require('koa')
let router = require('koa-router')();

let cfnUtil = requireRoot('utils/cfn')



let app = koa()



////////////
// ROUTES //
////////////



router
  .get('/v1/profile/:id', function* (next) {
    let response = yield cfnUtil.searchByCFNId(id)
    this.body    = response
  })
  .get('/v1/ranking', function* (next) {
    let response = yield cfnUtil.getRanking()
    this.body    = response
  })





app
  .use(router.routes())
  .use(router.allowedMethods())

app.listen(3000)
