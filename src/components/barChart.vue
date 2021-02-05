<template>
    <section class="contents-section">
        <div class="city-chart">
            <h2>시도별 발생동향</h2>
            <div class="chart-block">
                <Bar
                    v-if="isLoaded"
                    :topCity="this.topCity"
                    :topCityName="this.topCityName"
                    :options="this.options"
                    :labelText="this.label"
                />
            </div>
        </div>
    </section>
</template>

<script>
import Bar from "@/components/cityChart.vue";
import { getCovidData } from "@/api/index.js";
export default {
    name: "BarChartContainer",
    data() {
        return {
            label: "시도별 확진환자 현황 / 단위 %",
            isLoaded: false,
            topCity: Array,
            topCityName: Array,
            options: {
                indexAxis: "y",
                responsive: true,
                maintainAspectRatio: false,
                legend: {
                    labels: {
                        fontColor: "#f5f5f5",
                        fontSize: 14,
                    },
                },

                scales: {
                    xAxes: [
                        {
                            ticks: {
                                fontColor: "#fff",
                                fontSize: 14,
                            },
                            gridLines: {
                                color: "#575757",
                                lineWidth: 1.5,
                            },
                        },
                    ],
                    yAxes: [
                        {
                            ticks: {
                                fontColor: "#fff",
                                fontSize: 14,
                            },
                            gridLines: {
                                color: "#575757",
                                lineWidth: 1.5,
                            },
                        },
                    ],
                },
            },
        };
    },
    components: {
        Bar,
    },
    async mounted() {
        const { data } = await getCovidData();
        let cityArray = [
            data.city1p,
            data.city2p,
            data.city3p,
            data.city4p,
            data.city5p,
        ];
        let cityName = [
            data.city1n,
            data.city2n,
            data.city3n,
            data.city4n,
            data.city5n,
        ];
        this.topCity = cityArray;
        this.topCityName = cityName;
        this.isLoaded = !this.isLoaded;
    },
};
</script>

<style></style>
