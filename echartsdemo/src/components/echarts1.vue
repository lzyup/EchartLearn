<template>
    <div>
        <div id="myechart" style="width:500px;height:500px"></div>
    </div>
</template>

<script>
var echarts = require("echarts");
export default {
    name: "app",
    data() {
        return {
            msg: "Welcome to Your Vue.js App"
        };
    },
    mounted() {
        //基于准备好的dom,初始化echarts实例
        let myChart = echarts.init(document.getElementById("myechart"));
        myChart.setOption({
            title: { text: "Echarts 入门示例" },
            tooltip: {},
            xAxis: {
                data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
            },
            yAxis: {},
            series: [
                {
                    name: "销量",
                    type: "bar",
                    data: [5, 20, 36, 10, 10, 20]
                }
            ]
        });
    }
};
</script>

<style lang="scss">
</style>
