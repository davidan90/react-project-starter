/*
    Configuracion dev
*/
const webpack = require('webpack');
const merge = require('webpack-merge');
const BASE_CONFIG = require('../webpack.config');

const enviroment = 'dev';

const DEV_CONFIG = {
    target: enviroment,

    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify(enviroment),
            }
        }),
    ],

    node: {
        fs: 'empty'
    },
}

const webpackConfig = merge.smart(BASE_CONFIG, DEV_CONFIG);
module.exports = webpackConfig;