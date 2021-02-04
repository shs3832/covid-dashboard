module.exports = {
    productionSourceMap: false,
    devServer: {
        proxy: {
            "/korea": {
                //요청 url
                target: "https://api.corona-19.kr/korea",
                changeOrigin: true,
                pathRewrite: { "^/korea": "" },
            },
        },
    },
};
