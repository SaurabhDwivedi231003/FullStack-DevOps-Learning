module.exports = {
    module: {
        rules: [
            {
                test: /\.html$/,
                use: ['html-loader']
            },
            // ...other rules...
        ]
    },
    // ...other configurations...
};