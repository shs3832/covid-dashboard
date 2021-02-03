import axios from "axios";

const baseUrl = process.env.VUE_APP_LOCAL_URI;
const keyValue = "f4e2972b8fe25c7ab914e1fc3584edb40";

function getCovidData() {
    return axios({
        method: "GET",
        url: `${baseUrl}/?serviceKey=${keyValue}`,
        headers: {
            "Access-Control-Allow-Headers": "*",
        },
    });
}

function getCityCovidData() {
    return axios({
        method: "GET",
        url: `${baseUrl}/country/new/?serviceKey=${keyValue}`,
        headers: {
            "Access-Control-Allow-Headers": "*",
        },
    });
}

export { getCovidData, getCityCovidData };
