<template>
    <div>
        <div id="myechart" style="width:100%;height:500px"></div>
    </div>
</template>

<script>
var echarts = require("echarts");
require("echarts/lib/chart/line");
// require("echarts/lib/component/tooltip"); //tooltip组件
// require("echarts/lib/component/title"); //title组件
// require("echarts/lib/component/legend"); //legend组件
export default {
    name: "app",
    data() {
        return {
            option: {
                legend: {},
                xAxis: {},
                yAxis: {},
                label: {},
                tooltip: {},
                series: []
            }
        };
    },
    created() {
        let legend = {
            data: ["招商银行", "浦发银行", "广发银行", "上海银行"]
        };
        let xAxis = {
            type: "category",
            data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"], // x轴数据
            name: "日期", //x轴名称
            // x轴名称样式
            nameTextStyle: {
                fontWeight: 600,
                fontSize: 18
            }
        };
        let yAxis = {
            type: "value",
            name: "纵轴名称", //y轴名称
            //y轴名称样式
            nameTextStyle: {
                fontWeight: 600,
                fontSize: 18
            }
        };
        let tooltip = {
            trigger: "axis" //axis item none三个值
        };
        let series = [
            {
                name: "招商银行",
                data: [820, 932, 901, 934, 1290, 1320],
                type: "line"
            },
            {
                name: "浦发银行",
                data: [620, 711, 823, 934, 1445, 1456, 1178],
                type: "line"
            },
            {
                name: "广发银行",
                data: [621, 920, 1140, 1160, 1190, 1234, 1321],
                type: "line"
            },
            {
                name: "上海银行",
                data: [234, 320, 453, 567, 789, 999, 1200],
                type: "line"
            }
        ];
        this.option.legend = legend;
        this.option.xAxis = xAxis;
        this.option.yAxis = yAxis;
        this.option.tooltip = tooltip;
        this.option.series = series;
    },
    mounted() {
        //基于准备好的dom,初始化echarts实例
        let myChart = echarts.init(document.getElementById("myechart"));
        myChart.setOption(this.option);
    }
};
</script>

<style lang="scss">
</style>
