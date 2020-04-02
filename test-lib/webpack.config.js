module.exports = {
  output: {
    libraryTarget: "commonjs-module"
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  }
};
