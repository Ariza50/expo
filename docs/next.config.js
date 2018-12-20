const LATEST_VERSION = 'v' + require('./package.json').version;

module.exports = {
  exportPathMap: async function(defaultPathMap) {
    return Object.assign(...Object.entries(defaultPathMap).map(([pathname, page]) => {
      if (pathname.match(/\/v[1-9][^\/]*$/)) { // ends in "/v<version>"
        pathname +='/index.html' // TODO: find out why we need to do this
      }

      result = {[pathname]: page}

      if (pathname.match(LATEST_VERSION)) {
        result[pathname.replace(LATEST_VERSION, 'latest')] = page
      }

      return result
    }))
  }
}
