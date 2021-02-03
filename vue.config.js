// module.exports = {
//     devServer: {
//         proxy: "https://api.corona-19.kr",
//     },
// };

module.exports = {
    devServer: {
        proxy: {
            "/korea": {
                target: "https://api.corona-19.kr/korea",
                changeOrigin: true,
                pathRewrite: { "^/korea": "" },
            },
        },
    },
};
