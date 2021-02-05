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
                        axis: "y",
                        label: this.labelText,
                        backgroundColor: [
                            "rgba(255, 99, 132, 0.5)",
                            "rgba(54, 162, 235, 0.5)",
                            "rgba(255, 206, 86, 0.5)",
                            "rgba(75, 192, 192, 0.5)",
                            "rgba(153, 102, 255, 0.5)",
                        ],
                        borderColor: [
                            "rgba(255,99,132,1)",
                            "rgba(54, 162, 235, 1)",
                            "rgba(255, 206, 86, 1)",
                            "rgba(75, 192, 192, 1)",
                            "rgba(153, 102, 255, 1)",
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
