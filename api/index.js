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
  .get('/search/:id', function (ctx, next) {
    cfnUtil.searchByCFNId(this.params.id).then((response) => {
      this.body = response
    })
  })
  .get('/ranking', function (ctx, next) {
    cfnUtil.getRanking().then((response) => {
      this.body = response
    })
  })
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
