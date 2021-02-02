import axios from "axios";

const baseUrl =
    "http://openapi.data.go.kr/openapi/service/rest/Covid19/getCovid19InfStateJson";
const keyValue =
    "pesos9fSawB4XmQRfTBZXpLboZOut70eu3exepKBbdAtJZWe0cBWbgtYwIrS7vsVC%2FXrqWZpmuaNgsMZCEOWMA%3D%3D";

const instance = axios.create({
    baseURL: baseUrl,
});

function getCovidData() {
    console.log(encodeURIComponent(keyValue));
    instance
        .get(`?${encodeURIComponent(keyValue)}`)
        .then((response) => {
            console.log(response);
        })
        .catch((error) => {
            console.log(error);
        });
}

export { getCovidData };
