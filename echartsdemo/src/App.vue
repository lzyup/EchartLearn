<template>
    <div id="app">
        <div class="tab">
            <div class="tab-item">
                <router-link to="/histogram">直方图</router-link>
            </div>
            <div class="tab-item">
                <router-link to="/linechart">折线图</router-link>
            </div>
            <div class="tab-item">
                <router-link to="/completeechart">完整折线图示例</router-link>
            </div>
            <div class="tab-item">
                <router-link to="/polylinechart">折线图分段展示</router-link>
            </div>
        </div>
        <keep-alive>
            <router-view></router-view>
        </keep-alive>
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
#app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
.tab {
    display: flex;
    width: 100%;
    height: 40px;
    line-height: 40px;
}
.tab-item {
    flex: 1;
    width: 100%;
    text-align: center;
}
</style>
