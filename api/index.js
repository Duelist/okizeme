require('./globals')

let co               = require('co')
let koa              = require('koa')
let router           = require('koa-router')();
let graphqlServerKoa = require('graphql-server-koa')

let handleResponse   = requireRoot('middleware/handle-response')
let cfnUtil          = requireRoot('utils/cfn')
let graphSchema      = requireRoot('models/graph')

let graphqlKoa       = graphqlServerKoa.graphqlKoa



let app = new koa()



////////////
// ROUTES //
////////////



router
  .get('/search/:id', co.wrap(function* (next) {
    let response = yield cfnUtil.searchByCFNId(this.params.id)
    this.body    = response
  }))
  .get('/ranking', co.wrap(function* (next) {
    let response = yield cfnUtil.getRanking()
    this.body    = response
  }))
  .get('/graph', graphqlKoa({ schema: graphSchema }))





////////////////
// MIDDLEWARE //
////////////////



app
  .use(handleResponse)
  .use(router.routes())
  .use(router.allowedMethods())





///////////
// START //
///////////



app.listen(3000)
