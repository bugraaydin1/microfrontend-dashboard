const { merge } = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpackCommon = require("./webpack.common");

module.exports = merge(webpackCommon, {
	mode: "development",
	devServer: {
		port: 8001,
		historyApiFallback: true,
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "./public/index.html",
		}),
	],
});
