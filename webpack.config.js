const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  mode: process.env.NODE_ENV,
  entry: "./src/index.tsx",
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "build.js",
  },
  devtool: "inline-source-map",
  target: ["web", "es5"],
  module: {
    rules: [
      {
        test: /\.(js|ts|tsx)$/,
        use: [
          {
            loader: "ts-loader",
          },
        ],
        include: [
          path.resolve(__dirname, "src"),
          path.resolve(__dirname, "node_modules/react-pdf"),
          path.resolve(__dirname, "node_modules/react-pdf-viewer"),
        ],
      },
    ],
  },
  resolve: {
    extensions: [".js", ".ts", ".tsx", ".css"],
    alias: {
      react: "preact/compat",
      "react-dom/test-utils": "preact/test-utils",
      "react-dom": "preact/compat",
    },
  },
  plugins: [new HtmlWebpackPlugin({ template: "./src/index.html" })],
  devServer: {
    historyApiFallback: true,
    hot: true,
  },
};
