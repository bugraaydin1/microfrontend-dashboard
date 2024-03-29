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
			// version is better specified in webpack config
			// rather than trusting version in package.json:
			// https://github.com/webpack/webpack/issues/13457#issuecomment-1017970025:
			shared: {
				react: {
					singleton: true,
					requiredVersion: "^18.2.0",
				},
				"react-dom": {
					singleton: true,
					requiredVersion: "^18.2.0",
				},
			},
		}),
		new HtmlWebpackPlugin({
			template: "./public/index.html",
		}),
	],
});
