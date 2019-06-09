/**
 * @param {String} str
 * @param {String} marginSymbol
 * @returns {String}
 */
function stripMargin(str, marginSymbol = '|') {
  const regexp = new RegExp(`[ \\t]+\\${marginSymbol}`, 'g')
  return str.replace(regexp, '')
}

module.exports = stripMargin
