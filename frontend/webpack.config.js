const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    mode: 'development',
    stats: {
        errorDetails: true
    },
    output: {
        path: path.resolve(__dirname, 'static', 'frontend'),
        filename: 'main.js',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            }
        ]
    },
    plugins: [
        new CopyWebpackPlugin({
            patterns: [
                { from: 'src/css', to: 'css' },
                { from: 'src/img', to: 'img' },
                { from: 'src/serviceworker.js', to: 'serviceworker.js' },
            ],
        }),
    ],
};
