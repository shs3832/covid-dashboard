import axios from "axios";

const baseUrl = "https://api.corona-19.kr/korea/";
const keyValue = "f4e2972b8fe25c7ab914e1fc3584edb40";

const instance = axios.create({
    baseURL: baseUrl,
    headers: {
        "Access-Control-Allow-Credentials": true,
        "Access-Control-Allow-Origin": "*",
    },
});

function getCovidData() {
    instance
        .get(`?serviceKey=${keyValue}`)
        .then((response) => {
            console.log(response);
        })
        .catch((error) => {
            console.log(error);
        });
}

export { getCovidData };
