var webpack = require('webpack');
var path = require('path');
var nodeExternals = require('webpack-node-externals');

var config = {
    entry: './main.jsx',
    output: {
        path: 'lib',
        libraryTarget: "commonjs2",
        library: "Mattermost",
        filename: 'client.js'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: 'babel',
                exclude: /(node_modules|non_npm_dependencies)/,
                query: {
                    presets: ['es2015-webpack', 'stage-0'],
                    plugins: ['transform-runtime'],
                }
            }
        ]
    },
    plugins: [
        new webpack.LoaderOptionsPlugin({
            minimize: true,
            debug: false
        })
    ],
    resolve: {
        alias: {
            superagent: 'node_modules/superagent/lib/client'
        }
    },
    externals: [nodeExternals()]
};

config.devtool = 'source-map';
config.plugins.push(
    new webpack.optimize.UglifyJsPlugin({
        'screw-ie8': true,
        mangle: {
            toplevel: false
        },
        compress: {
            warnings: false
        },
        comments: false
    })
);
config.plugins.push(
    new webpack.optimize.AggressiveMergingPlugin()
);
config.plugins.push(
    new webpack.optimize.OccurrenceOrderPlugin(true)
);
config.plugins.push(
    new webpack.optimize.DedupePlugin()
);

module.exports = config;
