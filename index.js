/**
 * @param {String} str
 * @param {String} marginChar
 * @returns {String}
 */
function stripMargin(str, marginChar = '|') {
  const regexp = new RegExp(`[ \\t]+\\${marginChar}`, 'g')
  return str.replace(regexp, '')
}

module.exports = stripMargin
