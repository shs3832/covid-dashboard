<template>
    <h1>
        국내 코로나 현황판
        <span class="update-time"
            ><span>Update Time :</span> {{ covidDatas.updateTime }}</span
        >
        <div class="refresh">
            <button type="button" @click="getDatas">
                <i class="fas fa-sync"></i>
            </button>
        </div>
    </h1>
</template>

<script>
import { mapState } from "vuex";

export default {
    computed: {
        ...mapState(["covidDatas"]),
    },
    methods: {
        getDatas() {
            this.$store.state.spinner = !this.$store.state.spinner;
            this.$store.dispatch("fetchData");
            this.$store.dispatch("fetchCityData");
        },
    },
};
</script>
