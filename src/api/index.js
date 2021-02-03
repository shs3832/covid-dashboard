import axios from "axios";

const baseUrl = process.env.VUE_APP_LOCAL_URI;
const keyValue = "f4e2972b8fe25c7ab914e1fc3584edb40";

function getCovidData() {
    return axios({
        method: "GET",
        url: `${baseUrl}/?serviceKey=${keyValue}`,
        proxy: {
            host: `${baseUrl}`,
            port: 80,
        },
    });
}

function getCityCovidData() {
    return axios({
        method: "GET",
        url: `${baseUrl}/country/new/?serviceKey=${keyValue}`,
    });
}

export { getCovidData, getCityCovidData };
