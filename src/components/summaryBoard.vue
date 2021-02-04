<template>
    <section class="contents-section">
        <article class="summary-top">
            <div class="board-block">
                <h2>신규확진자수</h2>
                <div class="today">
                    <ul>
                        <li>
                            국내 확진자수
                            <strong>{{ datas.TotalCase }}</strong>
                        </li>
                        <li>
                            신규 확진자수
                            <strong>{{ stateAccess.today }}</strong>
                        </li>

                        <!-- <li>
                            전일 환자수
                            <strong>
                                {{ stateAccess.today - stateAccess.yesterday }}
                            </strong>
                        </li>

                        <li>
                            전일대비
                            <strong :class="calc === true ? '' : 'minus'">
                                <span>
                                    <span v-if="calc"
                                        >+{{ stateAccess.yesterday }}</span
                                    >
                                    <span v-else
                                        >-{{ stateAccess.yesterday }}</span
                                    >
                                </span>
                            </strong>
                        </li> -->
                    </ul>
                </div>
            </div>
        </article>
        <article class="summary-board">
            <!-- <div class="board-block">
                <h2>국내 확진자수</h2>
                <div class="count">{{ datas.TotalCase }}</div>
            </div> -->
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
        today() {
            return `${new Date(Date.now()).toLocaleDateString()}`;
        },
        yesterday() {
            return `${new Date(Date.now() - 86400000).toLocaleDateString()}`;
        },
        calc() {
            let status = null;
            let calcCase = this.stateAccess.today - this.stateAccess.yesterday;
            Math.sign(calcCase) === 1 ? (status = true) : (status = false);
            return status;
        },
        ...mapState(["covidCityDatas"]),
    },
};
</script>
