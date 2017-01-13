require('./globals')

let co     = require('co')
let koa    = require('koa')
let router = require('koa-router')();

let cfnUtil = requireRoot('utils/cfn')



let app = koa()

router.get('/', function* (next) {
  let response = yield cfnUtil.getRanking()
  this.body    = response
})

app
  .use(router.routes())

app.listen(3000)
