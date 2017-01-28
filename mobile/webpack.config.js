let path     = require('path')
let webpack  = require('webpack')

let SRC_DIR  = path.resolve(__dirname, 'src')
let DIST_DIR = path.resolve(__dirname, 'dist')



module.exports = {

  entry: SRC_DIR + '/index.js',

  output: {
    filename : 'bundle.js',
    path     : DIST_DIR,
  },

  module : {
    loaders : [
      {
        test : /\.jsx?/,
        include : SRC_DIR,
        loader : 'babel-loader'
      }
    ]
  },

}
