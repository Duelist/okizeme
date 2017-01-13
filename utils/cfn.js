let co  = require('co')
let _   = require('lodash')
let got = require('got')

let CFN = requireRoot('constants/cfn')



function* getProfile() {
  return yield _sendCFNRequest(CFN.URL.PROFILE)
}



function* getRanking() {
  return yield _sendCFNRequest(CFN.URL.RANKING)
}



function* searchByCFNId(cfnId) {
  let url = `${CFN.URL.SEARCH_CFN_ID};id=${cfnId};sort=lp;page=1;sortdir=a`
  return yield _sendCFNRequest(url)
}



function* _sendCFNRequest(url) {

  let response = yield got(url, { headers: CFN.HEADERS })

  let body = JSON.parse(response.body)

  if (!_.get(body, 'response')) {
   return {}
  }

  return body.response

}



module.exports = {
  getProfile,
  getRanking,
  searchByCFNId,
}
