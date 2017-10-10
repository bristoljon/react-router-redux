import babel from 'rollup-plugin-babel'
import uglify from 'rollup-plugin-uglify'

var config = {
  format: 'umd',
  moduleName: 'ReactRouterRedux',
  plugins: [
    babel({
      exclude: 'node_modules/**'
    })
  ],
  external: [
    'react',
    'prop-types',
    'react-router',
    'immutable'
  ],
  globals: {
    react: 'React',
    'prop-types': 'PropTypes',
    'react-router': 'ReactRouter',
    immutable: 'Immutable'
  }
}

if (process.env.NODE_ENV === 'production') {
  config.plugins.push(
    uglify({
      compress: {
        pure_getters: true,
        unsafe: true,
        unsafe_comps: true,
        warnings: false
      }
    })
  )
}

export default config
