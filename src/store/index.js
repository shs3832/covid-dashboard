import Vue from "vue";
import Vuex from "vuex";
import { getCovidData } from "@/api/index.js";

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        covidDatas: 0,
    },
    mutations: {
        covidStatus(state, data) {
            state.covidDatas = data;
        },
    },
    actions: {
        async fetchData(context) {
            console.log("loading!!");
            try {
                const { data } = await getCovidData();
                console.log(data);
                context.commit("covidStatus", data);
            } catch (error) {
                console.log(error);
            }
        },
    },
});
