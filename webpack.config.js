var webpack = require('webpack');
var path = require('path');
var nodeExternals = require('webpack-node-externals');

const NPM_TARGET = process.env.npm_lifecycle_event; //eslint-disable-line no-process-env

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
                    presets: [
                        ['es2015', {modules: false}],
                        'stage-0'
                    ],
                    plugins: ['transform-runtime']
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

if (NPM_TARGET === 'test') {
    config.target = 'node';
}

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
