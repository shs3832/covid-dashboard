import Vue from "vue";
import Vuex from "vuex";
import { getCovidData } from "@/api/index.js";

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        covidDatas: "",
        spinner: false,
    },
    mutations: {
        covidStatus(state, data) {
            state.covidDatas = data;
        },
        spinnerStatus(state) {
            state.spinner = !state.spinner;
        },
    },
    actions: {
        async fetchData({ commit }) {
            console.log("loading!!");
            try {
                const { data } = await getCovidData();
                console.log(data);
                commit("covidStatus", data);
                commit("spinnerStatus");
            } catch (error) {
                console.log(error);
            }
        },
    },
});
