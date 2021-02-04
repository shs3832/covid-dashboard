import Vue from "vue";
import Vuex from "vuex";
import { getCovidData, getCityCovidData } from "@/api/index.js";

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        covidDatas: Object,
        covidCityDatas: Object,
        spinner: false,
        today: Number,
        yesterday: Number,
    },
    mutations: {
        covidStatus(state, data) {
            state.covidDatas = data;
            state.yesterday = data.TotalCaseBefore;
        },
        covidCityStatus(state, datas) {
            state.covidCityDatas = datas;
            state.today = datas.korea.newCase;
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
                commit("covidCityStatus", data);
                commit("spinnerStatus");
            } catch (error) {
                console.log(error);
            }
        },
    },
});
