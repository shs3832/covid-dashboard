import Vue from "vue";
import Vuex from "vuex";
import { getCovidData } from "@/api/index.js";

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        covidDatas: 0,
    },
    mutations: {},
    actions: {
        async fetchData() {
            const covidData = await getCovidData();
            console.log(covidData);
        },
    },
});
