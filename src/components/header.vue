<template>
    <h1>
        국내 코로나 현황판
        <span class="update-time"
            >Update Time : {{ covidDatas.updateTime }}</span
        >
        <div class="refresh">
            <button type="button"><i class="fas fa-sync"></i></button>
        </div>
    </h1>
</template>

<script>
import { mapState } from "vuex";

export default {
    computed: {
        ...mapState(["covidDatas"]),
    },
};
</script>
