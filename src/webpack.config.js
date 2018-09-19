module.exports = {
    entry: './app.js',
    output: {
       filename: 'bundle.js'
    },
    module: {
       loaders: [
          {
             loader: 'babel-loader',
             test: /\.js$/,
             exclude: /node_modules/
          }
       ]
    },
    devServer: {
       port: 7777
    }
 };