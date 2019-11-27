"use strict";

const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const autoprefixer = require("autoprefixer");

module.exports = env => {
  const isDev = env.NODE_ENV === "development";
  const isProd = env.NODE_ENV === "production";

  console.log(env);

  return {
    name: "formare",
    entry: {
      formare: path.join(__dirname, "/packages/formare/formare.scss")
    },
    output: {
      path: path.join(__dirname, "./dist"),
      filename: `${isProd ? "[name].min.css.js" : "[name].css.js"}`
    },
    devtool: "source-map",
    module: {
      rules: [
        {
          test: /\.scss$/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader
            },
            {
              loader: "css-loader",
              options: {
                sourceMap: true
              }
            },
            {
              loader: "postcss-loader",
              options: {
                sourceMap: true,
                plugins: () => [new autoprefixer()]
              }
            },
            {
              loader: "sass-loader",
              options: {
                sourceMap: true,
                sassOptions: {
                  includePaths: [
                    path.resolve(path.join(__dirname, "./node_modules"))
                  ],
                  implementation: require("node-sass"),
                  outputStyle: isDev && "expanded",
                  minimize: isProd
                }
              }
            }
          ]
        }
      ]
    },
    optimization: {
      minimize: false
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: `${isProd ? "[name].min.css" : "[name].css"}`
      })
    ]
  };
};
