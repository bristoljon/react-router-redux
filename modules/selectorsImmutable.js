import { matchPath } from 'react-router'

export const getLocation = state => state.getIn(['router', 'location'])

export const createMatchSelector = (path) => {
  let lastPathname = null
  let lastMatch = null
  return (state) => {
    const pathname = getLocation(state).get('pathname')
    if (pathname === lastPathname) {
      return lastMatch
    }
    lastPathname = pathname
    const match = matchPath(pathname, path)
    if (!match || !lastMatch || match.url !== lastMatch.url) {
      lastMatch = match
    }
    return lastMatch
  }
}
