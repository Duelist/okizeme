const AUTH_ID = process.env.CFN_COOKIE.split('=')[1].split('%3A')[0]

const HEADERS = {
  cookie: process.env.CFN_COOKIE
}

const HOST = 'https://api.prod.capcomfighters.net/bentov2/sf5'

const URL = {
  PROFILE       : `${HOST}/myinfo/${AUTH_ID}/fighterlicense`,
  SEARCH_CFN_ID : `${HOST}/myinfo/${AUTH_ID}/searchrival/fightersid`,
  RANKING       : `${HOST}/contents/${AUTH_ID}/ranking`,
}



module.exports = {
  HEADERS,
  URL,
}
