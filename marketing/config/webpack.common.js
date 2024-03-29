module.exports = {
	module: {
		rules: [
			{
				test: /\.(ts|js)x?$/,
				exclude: /node_modules/,
				// loader: "babel-loader",
				use: {
					loader: "babel-loader",
					options: {
						presets: [
							"@babel/preset-env",
							["@babel/preset-react", { runtime: "automatic" }],
						],
						plugins: ["@babel/plugin-transform-runtime"],
					},
				},
			},
		],
	},
};
