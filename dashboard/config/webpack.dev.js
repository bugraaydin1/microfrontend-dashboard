const { merge } = require("webpack-merge");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const webpackCommon = require("./webpack.common");
const packageJson = require("../package.json");

module.exports = merge(webpackCommon, {
	mode: "development",
	devServer: {
		port: 8003,
		historyApiFallback: {
			historyApiFallback: true,
		},
		headers: {
			"Access-Control-Allow-Origin": "*",
		},
	},
	output: {
		publicPath: "http://localhost:8003/",
	},
	plugins: [
		new ModuleFederationPlugin({
			name: packageJson.name,
			filename: "remoteEntry.js",
			exposes: { "./DashboardApp": "./src/bootstrap" },
			shared: packageJson.dependencies,
		}),
	],
});
