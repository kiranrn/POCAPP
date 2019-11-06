const path = require('path');
const merge = require('webpack-merge');
const nodeExternals = require('webpack-node-externals');
const baseConfig = require('./webpack.base.js');

require("babel-polyfill");

const config = {
	entry: ['babel-polyfill', './src/index.js'],
	target: 'node',
	externals: [nodeExternals()],
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'build')
	}
}

module.exports = merge(baseConfig, config)