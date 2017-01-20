/**
 * Creates a formal response out of the body and the state meta.
 * @param {Generator} next
 */
function* handleResponse(next) {

  this.state.meta = {}

  yield next

  let payload = {
    meta     : this.state.meta,
    response : this.body,
  }

  this.body = payload

}



module.exports = handleResponse
