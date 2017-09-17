module.exports = {
	entry: './src/main.js',
	output: {
		path: __dirname + "/public",
		filename: 'main.js'
	},
	watch: true,
	devtool: 'source-map',
	target: 'atom',
	stats: {
		colors: true,
		modules: true,
		reasons: true
	},
	module: {
		loaders: [
			{
				test: /\.js/,
				loader: 'babel-loader',
				exclude: /node_modules/
			},
			{
				test: /\.sass$/,
				loader: 'style-loader!css-loader!sass-loader'
			},
			{
				test: /\.css$/,
				loader: 'style-loader!css-loader'
			}
		]
	}
};
