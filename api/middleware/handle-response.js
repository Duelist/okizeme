/**
 * Creates a formal response out of the body and the state meta.
 * @param {Generator} next
 */
function handleResponse(ctx, next) {

  ctx.state.meta = {}

  return next().then(() => {

    let payload = {
      meta     : ctx.state.meta,
      response : ctx.body,
    }

    ctx.body = payload

  })

}



module.exports = handleResponse
