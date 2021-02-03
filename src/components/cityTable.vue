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
    </section>
</template>

<script>
export default {
    computed: {
        datas() {
            return this.$store.state.covidCityDatas;
        },
    },
};
</script>
