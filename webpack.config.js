module.exports = {
    entry: "./xml-play.ts",     // The code that's the root of the dependency tree (i.e., depends on everything else)
    output: {
        filename: "bundle.js",
        library: "diaspora"     // Output will be a var named this.
    },
    resolve: {
        // Add '.ts' and '.tsx' as a resolvable extension.
        extensions: ["", ".webpack.js", ".web.js", ".ts", ".tsx", ".js"]
    },
    module: {
        loaders: [
            // all files with a '.ts' or '.tsx' extension will be handled by 'ts-loader'
            { test: /\.tsx?$/, loader: "ts-loader" }
        ]
    },
    watch: true,
    watchOptions: {
        poll: 500
        }
}
