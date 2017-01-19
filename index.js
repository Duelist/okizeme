require('./globals')

let co             = require('co')
let koa            = require('koa')
let router         = require('koa-router')();

let handleResponse = requireRoot('middleware/handle-response')
let cfnUtil        = requireRoot('utils/cfn')



let app = koa()



////////////
// ROUTES //
////////////



router
  .get('/profile/:id', function* (next) {
    let response = yield cfnUtil.searchByCFNId(this.params.id)
    this.body    = response
  })
  .get('/ranking', function* (next) {
    let response = yield cfnUtil.getRanking()
    this.body    = response
  })





app
  .use(handleResponse)
  .use(router.routes())
  .use(router.allowedMethods())

app.listen(3000)
