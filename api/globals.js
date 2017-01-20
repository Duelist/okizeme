/**
 * Gets a module from the project base path.
 * @param {String} name Module name.
 * @return {Any}
 */
global.requireRoot = name => require(__dirname + '/' + name)
