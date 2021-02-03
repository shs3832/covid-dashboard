<template>
    <section class="contents-section">
        <article class="city-table">
            <h2>시&middot;도별 발생동향</h2>
            <table border="0">
                <caption>
                    시도별 확진자 현황, 도시명, 신규확진자수, 확진환자수,
                    완치자수, 사망자, 발생률을 표시하는 테이블입니다.
                </caption>
                <thead>
                    <tr>
                        <th scope="col">도시명</th>
                        <th scope="col">신규확진자수</th>
                        <th scope="col">확진환자수</th>
                        <th scope="col">완치자수</th>
                        <th scope="col">사망자</th>
                        <th scope="col">발생률</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="data in datas" :key="data.countryName">
                        <template v-if="data.countryName">
                            <td>{{ data.countryName }}</td>
                            <td>{{ data.newCase }}</td>
                            <td>{{ data.totalCase }}</td>
                            <td>{{ data.recovered }}</td>
                            <td>{{ data.death }}</td>
                            <td>
                                <template v-if="Number(data.percentage)">
                                    {{ data.percentage }}%
                                </template>
                                <template v-else>
                                    {{ data.percentage }}
                                </template>
                            </td>
                        </template>
                    </tr>
                </tbody>
            </table>
        </article>
        <article class="city-table isMobile">
            <div
                class="city-block"
                v-for="dataMobile in datas"
                :key="dataMobile.countryName"
            >
                <template v-if="dataMobile.countryName">
                    <h2 class="city-name">
                        {{ dataMobile.countryName }}
                        <i class="fas fa-chevron-down" @click="toggleEvent"></i>
                    </h2>
                    <ul class="city-list">
                        <li>
                            <span>신규확진자수</span>{{ dataMobile.newCase }}
                        </li>
                        <li>
                            <span>확진환자수</span>{{ dataMobile.totalCase }}
                        </li>
                        <li><span>완치자수</span>{{ dataMobile.recovered }}</li>
                        <li><span>사망자</span>{{ dataMobile.death }}</li>
                        <li>
                            <template v-if="Number(dataMobile.percentage)">
                                <span>발생률</span>
                                {{ dataMobile.percentage }}%
                            </template>
                            <template v-else>
                                <span>발생률</span>
                                {{ dataMobile.percentage }}
                            </template>
                        </li>
                    </ul>
                </template>
            </div>
        </article>
    </section>
</template>

<script>
export default {
    computed: {
        datas() {
            return this.$store.state.covidCityDatas;
        },
    },
    created() {},
    methods: {
        toggleEvent(event) {
            let target = event.target.parentNode.parentNode.querySelector(
                ".city-list"
            );
            event.target.classList.contains("fa-chevron-up")
                ? event.target.classList.remove("fa-chevron-up")
                : event.target.classList.add("fa-chevron-up");

            target.classList.contains("on")
                ? target.classList.remove("on")
                : target.classList.add("on");
        },
    },
};
</script>
