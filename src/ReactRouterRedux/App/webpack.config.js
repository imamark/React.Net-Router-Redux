module.exports = {
  entry: {
    server: './server',
    app: './index'
  },
  output: {
    filename: '[name].bundle.js'
  },
  module: {
    loaders: [
      {
      	test: /\.jsx?$/,
      	exclude: /node_modules/,
      	loader: 'babel',
        query:
        {
          presets:[ 'es2015', 'react' ]
        }
      }
    ],
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  }
};
