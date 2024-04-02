const { merge } = require("webpack-merge");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const webpackCommon = require("./webpack.common");
const packageJson = require("../package.json");

module.exports = merge(webpackCommon, {
	mode: "development",
	devServer: {
		port: 8002,
		historyApiFallback: true,
	},
	output: {
		publicPath: "http://localhost:8002/",
	},
	plugins: [
		new ModuleFederationPlugin({
			name: packageJson.name,
			filename: "remoteEntry.js",
			exposes: { "./AuthApp": "./src/bootstrap" },
			shared: packageJson.dependencies,
		}),
	],
});
