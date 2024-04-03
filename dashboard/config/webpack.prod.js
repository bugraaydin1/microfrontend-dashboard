const { merge } = require("webpack-merge");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const webpackCommon = require("./webpack.common");
const packageJson = require("../package.json");

const domain = process.env.PRODUCTION_DOMAIN;

module.exports = merge(webpackCommon, {
	mode: "production",
	output: {
		filename: "[name].[contenthash].js",
		publicPath: "/dashboard/latest/",
	},
	plugins: [
		new ModuleFederationPlugin({
			name: packageJson.name,
			filename: "remoteEntry.js",
			exposes: {
				"./DashboardApp": "./src/bootstrap",
			},
			shared: packageJson.dependencies,
		}),
	],
});
