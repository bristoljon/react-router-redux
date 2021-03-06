import { matchPath } from 'react-router';

export var getLocation = function getLocation(state) {
  return state.getIn(['router', 'location']);
};

export var createMatchSelector = function createMatchSelector(path) {
  var lastPathname = null;
  var lastMatch = null;
  return function (state) {
    var pathname = getLocation(state).get('pathname');
    if (pathname === lastPathname) {
      return lastMatch;
    }
    lastPathname = pathname;
    var match = matchPath(pathname, path);
    if (!match || !lastMatch || match.url !== lastMatch.url) {
      lastMatch = match;
    }
    return lastMatch;
  };
};