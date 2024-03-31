const { merge } = require("webpack-merge");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const webpackCommon = require("./webpack.common");
const packageJson = require("../package.json");

const domain = process.env.PRODUCTION_DOMAIN;

module.exports = merge(webpackCommon, {
	mode: "production",
	output: {
		filename: "[name].[contenthash].js",
		publicPath: "/container/latest/",
	},
	plugins: [
		new ModuleFederationPlugin({
			name: packageJson.name,
			remotes: {
				marketing: `marketing@${domain}/marketing/latest/remoteEntry.js`,
			},
			shared: packageJson.dependencies,
		}),
	],
});
