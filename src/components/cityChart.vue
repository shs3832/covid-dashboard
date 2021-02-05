<script>
import { Bar } from "vue-chartjs";
export default {
    extends: Bar,
    props: {
        labelText: String,
        topCityName: Array,
        topCity: Array,
        options: Object,
    },
    mounted() {
        this.renderChart(
            {
                labels: this.topCityName,
                datasets: [
                    {
                        label: this.labelText,
                        backgroundColor: [
                            "rgba(238,35,35,.8)",
                            "rgba(248,144,9,.8)",
                            "rgba(0,154,135,.8)",
                            "rgba(241,202,241,.8)",
                            "rgba(40,167,69,.8)",
                        ],

                        data: this.topCity,
                    },
                ],
            },
            this.options
        );
    },
};
</script>
