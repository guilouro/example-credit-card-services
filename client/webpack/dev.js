import webpack from 'webpack';
import baseConfig from './base';

const config = {
    ... baseConfig,

    entry: [
        'react-hot-loader/patch',
        'webpack-dev-server/client?http://localhost:8000/#/',
        ...baseConfig.entry
    ],

    devtool: '#inline-source-map',

    plugins: [
        ...baseConfig.plugins,
        new webpack.HotModuleReplacementPlugin(),
    ],

    devServer: {
        quiet: true,
        hot: true,
        port: '8000',
        inline: true,
        historyApiFallback: true,
    }
}

export default config;
