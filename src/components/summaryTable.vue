<template>
    <section class="contents-section">
        <article class="summary-table">
            <h2>국내 현황</h2>
            <div class="list-block">
                <ul class="list-item list-col-3">
                    <li>
                        <strong>국내 검사결과(양성)</strong>
                        <span
                            >{{ datas.caseCount }}
                            <small>({{ datas.casePercentage }}%)</small></span
                        >
                    </li>
                    <li>
                        <strong>국내 검사결과(음성)</strong>
                        <span
                            >{{ datas.notcaseCount }}
                            <small
                                >({{ datas.notcasePercentage }}%)</small
                            ></span
                        >
                    </li>
                    <li>
                        <strong>국내 검사중</strong>
                        <span
                            >{{ datas.checkingCounter }}
                            <small
                                >({{ datas.checkingPercentage }}%)</small
                            ></span
                        >
                    </li>
                </ul>

                <ul class="list-item list-col-3">
                    <li>
                        <strong>오늘 하루 완치자수</strong>
                        <span>{{ datas.TodayRecovered }}</span>
                    </li>
                    <li>
                        <strong>오늘 하루 사망자수</strong>
                        <span>{{ datas.TodayDeath }}</span>
                    </li>
                    <li>
                        <strong>전날 대비 환자수</strong>
                        <span>{{ datas.TotalCaseBefore }}</span>
                    </li>
                </ul>
                <ul class="list-item list-col-2">
                    <li>
                        <strong>국내 완치율</strong>
                        <span>{{ datas.recoveredPercentage }}%</span>
                    </li>
                    <li>
                        <strong>국내 사망률</strong>
                        <span>{{ datas.deathPercentage }}%</span>
                    </li>
                </ul>
            </div>
        </article>
    </section>
</template>

<script>
export default {
    computed: {
        datas() {
            return this.$store.state.covidDatas;
        },
    },
};
</script>
