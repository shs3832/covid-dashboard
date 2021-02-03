import axios from "axios";
// import $ from "jquery";

const baseUrl = "https://api.corona-19.kr/korea/";
const keyValue = "f4e2972b8fe25c7ab914e1fc3584edb40";

const instance = axios.create({
    baseURL: baseUrl,
    headers: {
        "Access-Control-Allow-Origin": "*",
    },
});

// instance.interceptors.request.use(
//     function(config) {
//         config.headers["Access-Control-Allow-Origin"] = "*";
//         return config;
//     },
//     function(error) {
//         return Promise.reject(error);
//     }
// );

function getCovidData() {
    return instance.get(`?serviceKey=${keyValue}`);
    // return fetch(`${baseUrl}?serviceKey=${keyValue}`, {
    //     method: "get",
    //     type: "json",
    // });
    // return $.ajax({
    //     url: `${baseUrl}?serviceKey=${keyValue}`,
    //     dataType: "json",
    //     type: "get",
    //     success: function(data) {
    //         console.log(data);
    //     },
    // });
}

function getCityCovidData() {
    return instance.get(`country/new/?serviceKey=${keyValue}`);
}

export { getCovidData, getCityCovidData };
