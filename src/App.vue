<template>
    <div id="app">
        <Header></Header>
        <SummaryBoard></SummaryBoard>
        <SummaryTable></SummaryTable>
        <CityTable></CityTable>
    </div>
</template>

<script>
import { store } from "@/store/index.js";
import { getCovidData } from "@/api/index.js";

import Header from "@/components/header.vue";
import SummaryTable from "@/components/summaryTable.vue";
import SummaryBoard from "@/components/summaryBoard.vue";
import CityTable from "@/components/cityTable.vue";

export default {
    name: "App",
    components: { SummaryBoard, Header, SummaryTable, CityTable },
    store,
    created() {
        getCovidData();
    },
};
</script>

<style>
@import "./assets/css/style.css";
</style>
