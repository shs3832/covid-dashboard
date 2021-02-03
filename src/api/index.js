import axios from "axios";
// import $ from "jquery";

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
    // return fetch(`https://api.corona-19.kr/korea/?serviceKey=${keyValue}`, {
    //     method: "GET",
    //     // mode: "cors",
    //     headers: {
    //         "Access-Control-Allow-Headers": "*",
    //         "Access-Control-Allow-Origin": "*",
    //         "Content-Type": "application/json",
    //     },
    // });
    // return $.getJSON(`${baseUrl}/?serviceKey=${keyValue}&callback=?`, function(
    //     data
    // ) {
    //     console.log(data);
    // });
}

function getCityCovidData() {
    return axios({
        method: "GET",
        url: `${baseUrl}/country/new/?serviceKey=${keyValue}`,
        headers: {
            "Access-Control-Allow-Headers": "*",
        },
    });
    // return fetch(
    //     `https://api.corona-19.kr/korea/country/new/?serviceKey=${keyValue}`,
    //     {
    //         method: "GET",
    //         // mode: "cors",
    //         headers: {
    //             "Access-Control-Allow-Headers": "*",
    //             "Access-Control-Allow-Origin": "*",
    //             "Content-Type": "application/json",
    //         },
    //     }
    // );
    // return $.getJSON(`${baseUrl}/?serviceKey=${keyValue}&callback=?`, function(
    //     data
    // ) {
    //     console.log(data);
    // });
}

export { getCovidData, getCityCovidData };
