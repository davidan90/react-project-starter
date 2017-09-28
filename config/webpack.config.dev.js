/*
    Configuracion dev
*/
const webpack = require('webpack');
const merge = require('webpack-merge');
const BASE_CONFIG = require('../webpack.config');

const DEV_CONFIG = {
    target: 'dev',

    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': '"dev"'
            }
        }),
    ],

    node: {
        fs: 'empty'
    },
}

const webpackConfig = merge.smart(BASE_CONFIG, DEV_CONFIG);
module.exports = webpackConfig;