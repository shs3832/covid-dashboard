import Vue from "vue";
import Vuex from "vuex";
import { getCovidData, getCityCovidData } from "@/api/index.js";

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        covidDatas: Object,
        covidCityDatas: Object,
        spinner: false,
    },
    mutations: {
        covidStatus(state, data) {
            state.covidDatas = data;
        },
        covidCityStatus(state, datas) {
            state.covidCityDatas = datas;
        },
        spinnerStatus(state) {
            state.spinner = !state.spinner;
        },
    },
    actions: {
        async fetchData({ commit }) {
            console.log("covid data loading!!");
            try {
                const { data } = await getCovidData();
                commit("covidStatus", data);
            } catch (error) {
                console.log(error);
            }
        },

        async fetchCityData({ commit }) {
            console.log("city data loading!!");
            try {
                const { data } = await getCityCovidData();
                console.log(data);
                commit("covidCityStatus", data);
                commit("spinnerStatus");
            } catch (error) {
                console.log(error);
            }
        },
    },
});
