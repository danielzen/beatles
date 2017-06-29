module.exports = {
  entry: `./src/app.ts`,
  output: {
    filename: 'compiled', // output file
    path: __dirname + '/build'
  },
  resolve: {
    // Add in `.ts` and `.tsx` as a resolvable extension.
    extensions: ['.ts', '.tsx', '.js']
  },

  module: {
    loaders: [
      { test: /\.tsx?$/, loader: 'ts-loader' },
      { test: /\.json/, loader: 'json-loader' }
    ]
  }
};
