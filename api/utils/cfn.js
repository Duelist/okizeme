let co  = require('co')
let _   = require('lodash')
let got = require('got')

let CFN = requireRoot('constants/cfn')



/**
 * Get the current CFN rankings.
 * @return {Object}
 */
function* getRanking() {

  let urls = [
    `${CFN.URL.RANKING};page=1`,
    `${CFN.URL.RANKING};page=2`,
    `${CFN.URL.RANKING};page=3`,
    `${CFN.URL.RANKING};page=4`,
  ]

  let results = yield urls.map(url => _sendCFNRequest(url))
  results     = (
    _(results)
    .map(result => result[0])
    .map('rankingresult')
    .flatten()
    .value()
  )

  return results

}



/**
 * Search for a player using their CFN id.
 * @param {String} cfnId The CFN Id to search for.
 * @return {Object}
 */
function* searchByCFNId(cfnId) {
  let url    = `${CFN.URL.SEARCH_CFN_ID};id=${cfnId};sort=lp;page=1;sortdir=a`
  let result = yield _sendCFNRequest(url)
  return result[0].searchresult
}



/**
 * Send a request to the CFN api.
 * @param {String} url The url to send a request to.
 * @return {Object}
 */
function* _sendCFNRequest(url) {

  let response = yield got(url, { headers: CFN.HEADERS })

  let body = JSON.parse(response.body)

  if (!_.get(body, 'response')) {
   return {}
  }

  return body.response

}



module.exports = {
  getRanking,
  searchByCFNId,
}
