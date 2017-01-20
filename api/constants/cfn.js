/**
 * Authentication id to use with CFN api.
 * @type {String}
 */
const AUTH_ID = process.env.CFN_COOKIE.split('=')[1].split('%3A')[0]

/**
 * Headers to send for CFN api requests.
 * @type {Object<String>}
 */
const HEADERS = {
  cookie: process.env.CFN_COOKIE
}

/**
 * Host url for the CFN api.
 * @type {String}
 */
const HOST = 'https://api.prod.capcomfighters.net/bentov2/sf5'

/**
 * Accessible urls for the CFN api.
 * @type {Object<String>}
 */
const URL = {
  SEARCH_CFN_ID : `${HOST}/myinfo/${AUTH_ID}/searchrival/fightersid`,
  RANKING       : `${HOST}/contents/${AUTH_ID}/ranking`,
}



module.exports = {
  HEADERS,
  URL,
}
