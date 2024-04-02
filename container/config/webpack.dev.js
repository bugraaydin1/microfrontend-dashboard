const { merge } = require("webpack-merge");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const webpackCommon = require("./webpack.common");
const packageJson = require("../package.json");

module.exports = merge(webpackCommon, {
	mode: "development",
	output: {
		publicPath: "http://localhost:8000/",
	},
	devServer: {
		port: 8000,
		historyApiFallback: true,
	},
	plugins: [
		new ModuleFederationPlugin({
			name: packageJson.name,
			remotes: {
				// [import-name] : "[remote-app-name]@[remote-url]"
				marketing: "marketing@http://localhost:8001/remoteEntry.js",
				auth: "auth@http://localhost:8002/remoteEntry.js",
			},
			shared: packageJson.dependencies,
		}),
	],
});
