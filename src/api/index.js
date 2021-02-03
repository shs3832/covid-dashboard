import axios from "axios";

// const baseUrl = "https://api.corona-19.kr";
const keyValue = "f4e2972b8fe25c7ab914e1fc3584edb40";

// const instance = axios.create({
//     baseURL: baseUrl,
// });

// instance.interceptors.request.use(
//     function(config) {
//         return config;
//     },
//     function(error) {
//         return Promise.reject(error);
//     }
// );

function getCovidData() {
    // return instance.get(`/korea/?serviceKey=${keyValue}`);
    return axios({
        method: "GET",
        url: `/korea/?serviceKey=${keyValue}`,
    });
}

function getCityCovidData() {
    // return instance.get(`/korea/country/new/?serviceKey=${keyValue}`);
    return axios({
        method: "GET",
        url: `/korea/country/new/?serviceKey=${keyValue}`,
    });
}

export { getCovidData, getCityCovidData };
