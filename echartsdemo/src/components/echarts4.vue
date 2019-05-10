<template>
    <div>
        <div id="myechart" style="width:100%;height:500px;"></div>
    </div>
</template>

<script>
// var echarts = require("echarts");

let echarts = require("echarts/lib/echarts");
//以下组件按需引入
// require("echarts/lib/chart/line");
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
            data: ["最高气温", "最低气温"]
        };
        let toolbox = {
            show: true,
            feature: {
                dataZoom: {},
                dataView: { readOnly: false },
                magicType: { type: ["line", "bar"] },
                restore: {},
                saveAsImage: {}
            }
        };
        let xAxis = {
            type: "category",
            name: "x",
            splitLine: { show: false },
            data: [
                "星期一",
                "星期二",
                "星期三",
                "星期四",
                "星期五",
                "星期六",
                "星期日"
            ]
        };
        let yAxis = {
            type: "value",
            name: "y"
        };
        let tooltip = {
            trigger: "axis" //axis item none三个值
        };
        let grid = {
            left: "3%",
            right: "4%",
            bottom: "3%",
            containLabel: true
        };
        let series = [
            {
                name: "指数",
                type: "line",
                color: "#1188FF",
                data: [4, 8, 16, 32, 64, "-", "-"],
                markPoint: {
                    // data: [{ type: "max", name: "最大值" }]
                    // data: [{ value: 16, xAxis: 2, yAxis: 16 }]
                    data: [{ coord: [2, 16] }],
                    itemStyle: {
                        color: "#4587E7",
                        borderColor: "#000",
                        borderWidth: 0,
                        borderType: "solid"
                    }
                },
                label: {
                    show: true,
                    color: "rgba(204,204,204,1)",
                    formatter: obj => {
                        console.log("测试label------>", JSON.stringify(obj));
                        return "￥" + obj.value;
                    }
                },
                itemStyle: {
                    normal: {
                        lineStyle: {
                            color: "#1989FB" //折线颜色
                        }
                    }
                }
            },
            {
                name: "指数",
                type: "line",
                color: "#FF00FF",
                data: ["-", "-", "-", "-", 64, 128, 256],
                markPoint: {
                    // data: [{ type: "max", name: "最大值" }]
                    data: [{ name: "周最低", value: 16, xAxis: 4, yAxis: 63 }],
                    itemStyle: {
                        color: "#4587E7",
                        borderColor: "#000",
                        borderWidth: 0,
                        borderType: "solid"
                    }
                }
            }
        ];
        this.option.legend = legend;
        // this.option.toolbox = toolbox;
        this.option.xAxis = xAxis;
        this.option.yAxis = yAxis;
        this.option.tooltip = tooltip;
        this.option.series = series;
        this.option.grid = grid;
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
