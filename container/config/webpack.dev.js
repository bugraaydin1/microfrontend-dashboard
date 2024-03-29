const { merge } = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const webpackCommon = require("./webpack.common");

module.exports = merge(webpackCommon, {
	mode: "development",
	devServer: {
		port: 8000,
		historyApiFallback: true,
	},
	plugins: [
		new ModuleFederationPlugin({
			name: "container",
			remotes: {
				// [import-name] : "[remote-app-name]@[remote-url]"
				marketing: "marketing@http://localhost:8001/remoteEntry.js",
			},
			shared: ["react@^18.2.0", "react-dom@^18.2.0"],
		}),
		new HtmlWebpackPlugin({
			template: "./public/index.html",
		}),
	],
});
