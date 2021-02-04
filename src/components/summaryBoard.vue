<template>
    <section class="contents-section">
        <article class="summary-board">
            <div class="board-block">
                <h2>신규확진자수</h2>
                <div class="count">
                    전일 환자수 :
                    {{ stateAccess.yesterday - stateAccess.today }}
                    <br />
                    금일 환자수 : {{ stateAccess.yesterday }}
                </div>
            </div>
            <div class="board-block">
                <h2>국내 확진자수</h2>
                <div class="count">{{ datas.TotalCase }}</div>
            </div>
            <div class="board-block">
                <h2>국내 완치자수</h2>
                <div class="count">{{ datas.TotalRecovered }}</div>
            </div>
            <div class="board-block">
                <h2>국내 사망자수</h2>
                <div class="count">{{ datas.TotalDeath }}</div>
            </div>
            <div class="board-block">
                <h2>국내 격리자수</h2>
                <div class="count">{{ datas.NowCase }}</div>
            </div>
        </article>
    </section>
</template>

<script>
import { mapState } from "vuex";
export default {
    computed: {
        datas() {
            return this.$store.state.covidDatas;
        },
        stateAccess() {
            return this.$store.state;
        },

        ...mapState(["covidCityDatas"]),
    },
};
</script>
