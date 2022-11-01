const path = require('path');
const HTMLwebpackPlugin = require('html-webpack-plugin');

module.exports = {

    entry: './src/index.js',
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'bundle.js',
    },
    mode: process.env.NODE_ENV,
    plugins: [
        new HTMLwebpackPlugin({
            template: './src/index.html',
        })
    ],
    devServer: {
        host: 'localhost',
        port: 8080,
        hot: true,
        static: {
            directory: path.resolve(__dirname, 'dist'),
            publicPath: '/bundle.js',
        },
        proxy: {
            '/api' : 'http://localhost:3000',
        },
    },
    module: {
        rules: [
            {
                test: /.jsx?/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react'],
                    }
                }
            },
            {
                test: /.css$/,
                exclude: /node_modules/,
                use: ['style-loader', 'css-loader'],
            }
        ]
    }
}
