const webpack = require("webpack");

module.exports = {
  output: {
    filename: "main.js",
  },
  plugins: [
    new webpack.EnvironmentPlugin({
      "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV),
    }),
  ],
  mode: process.env.NODE_ENV,
};

console.log('running on',process.env.NODE_ENV);
