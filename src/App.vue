<template>
    <div id="app">
        <Header></Header>
        <SummaryBoard></SummaryBoard>
        <SummaryTable></SummaryTable>
        <BarChart></BarChart>
        <CityTable></CityTable>
        <Spinner v-if="!spinner"></Spinner>
    </div>
</template>

<script>
import Header from "@/components/header.vue";
import SummaryTable from "@/components/summaryTable.vue";
import SummaryBoard from "@/components/summaryBoard.vue";
import CityTable from "@/components/cityTable.vue";
import BarChart from "@/components/barChart.vue";
import Spinner from "@/components/spinner.vue";
import { mapState } from "vuex";
export default {
    components: {
        SummaryBoard,
        Header,
        SummaryTable,
        CityTable,
        BarChart,
        Spinner,
    },
    created() {
        this.$store.dispatch("fetchData");
        this.$store.dispatch("fetchCityData");
    },
    computed: {
        ...mapState(["covidDatas", "spinner"]),
    },
};
</script>

<style>
@import "./assets/css/style.css";
</style>
