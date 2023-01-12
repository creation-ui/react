const cssToArray = classes =>
  classes
    .split(' ')
    .map(c => c.trim())
    .filter(Boolean)

module.exports = cssToArray
