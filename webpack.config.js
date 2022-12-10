const path = require("path");

module.exports = {
    entry: {
        "index.bundle": path.resolve(__dirname, "src/ts/index.ts")
    },
    output: { 
        path: path.join(__dirname, "dist/js"), 
        filename: "[name].js" 
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"],
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ["babel-loader"],
            },
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                use: ["ts-loader"],
            }
        ],
    }
};