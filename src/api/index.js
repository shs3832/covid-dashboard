import axios from "axios";

// const baseUrl = "https://api.corona-19.kr";
const keyValue = "f4e2972b8fe25c7ab914e1fc3584edb40";

function getCovidData() {
    return axios({
        method: "GET",
        url: `https://api.corona-19.kr/korea/?serviceKey=${keyValue}`,
    });
}

function getCityCovidData() {
    return axios({
        method: "GET",
        url: `https://api.corona-19.kr/korea/country/new/?serviceKey=${keyValue}`,
    });
}

export { getCovidData, getCityCovidData };
