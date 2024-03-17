const path = require("path");

module.exports = {

    entry: "/src/index.js",
    output: {
        path: path.join(__dirname, "/build"),
        filename: "index.bundle.js"
    },
    devtool: 'source-map',
    devServer: {
        port: 3010
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.(scss)$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ]
            }
        ]
    }
}