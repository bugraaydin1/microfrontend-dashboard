const { merge } = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const webpackCommon = require("./webpack.common");

module.exports = merge(webpackCommon, {
	mode: "development",
	devServer: {
		port: 8001,
		historyApiFallback: true,
	},
	plugins: [
		new ModuleFederationPlugin({
			name: "marketing",
			filename: "remoteEntry.js",
			exposes: { "./MarketingApp": "./src/bootstrap" },
		}),
		new HtmlWebpackPlugin({
			template: "./public/index.html",
		}),
	],
});
