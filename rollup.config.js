import css from 'rollup-plugin-css-only'

const config = {
  input: 'index.js',

  output: {
    format: 'iife',
    file: 'bundle.min.js'
  },

  plugins: [ css() ]
}

export default config