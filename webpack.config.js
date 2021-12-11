const HtmlWebPackPlugin = require('html-webpack-plugin');
const htmlPlugin = new HtmlWebPackPlugin({
	template: './public/index.html',
	filename: './index.html'
});

module.exports = {
	mode: "development",
	module: {
		rules: [{
			test: /\.js$/,
			exclude: /node_modules/,
			use: {
				loader: 'babel-loader'
			}
		},
		{
			test: /\.s[ac]ss$/i,
			use: [
				// Creates `style` nodes from JS strings
				"style-loader",
				// Translates CSS into CommonJS
				"css-loader",
				// Compiles Sass to CSS
				"sass-loader",
			],
		}
		]
	},
	plugins: [htmlPlugin]
};
