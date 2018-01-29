module.exports = function (name) {
  name = '' + name
  name = name.replace(/[^a-zA-Z0-9_]/g, '_').replace(/_{2,}/g, '_')
  if (/^\d/.test(name)) {
    name = '_' + name
  }
  return name
}
