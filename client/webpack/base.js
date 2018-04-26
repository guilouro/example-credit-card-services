import path from 'path';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const config = {
    entry: [
        path.join(__dirname, '../', 'src', 'app'),
    ],

    output: {
        path: path.join(__dirname, '../', 'dist'),
        filename: 'js/[name]_[hash].js',
        publicPath: '/',
    },

    resolve: {
        extensions: ['.js', '.jsx', '.css'],
    },

    module: {
        loaders: [
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [{
                        loader: 'css-loader',
                        options: {
                            sourceMap: true,
                            importLoaders: 1,
                            minimize: process.env.NODE_ENV === 'production',
                        },
                    },
                    { loader: 'postcss-loader', options: { sourceMap: true } },
                    ],
                }),
            },
            {
                test: /\.(eot|woff2?|ttf)$/,
                loader: 'file-loader?limit=1024&name=/fonts/[name].[ext]',
            },

            {
                test: /\.(jpg|svg)$/,
                loader: 'file-loader?name=/images/[name].[ext]',
            },

            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: [/node_modules/, /src\/styles\/vendor/],
                query: {
                    presets: ['env', 'react', 'stage-0'],
                },
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html',
        }),
        new ExtractTextPlugin('css/[name]_[contenthash].css'),
    ],
};

export default { ...config };