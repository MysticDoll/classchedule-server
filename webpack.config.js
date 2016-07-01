module.exports = {
  entry: {
    main: ["./devel/index.js"]
  },
  rootDir: "./devel",
  output: {
    path: __dirname + "/view/js",
    filename: "[name].js"
  },
  devtool: "inline-source-map",
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: ["babel"],
        query: {
          presets: ["es2015", "stage-2"],
          cacheDirectory: true
        }
      }
    ],
    resolve: {
      extensions: ["", ".js"]
    }
  }
};
