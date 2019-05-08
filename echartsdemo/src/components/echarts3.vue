<template>
    <div>
        <div id="myechart" style="width:100%;height:500px"></div>
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
            boundaryGap: false,
            data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"]
        };
        let yAxis = {
            type: "value",
            axisLabel: {
                formatter: "{value} °C"
            }
        };
        let tooltip = {
            trigger: "axis" //axis item none三个值
        };
        let series = [
            {
                name: "最高气温",
                type: "line",
                data: [11, 11, 15, 13, 12, 13, 10],
                markPoint: {
                    // data: [{ type: "max", name: "最大值" }]
                    data: [{ name: "周最低", value: 15, xAxis: 2, yAxis: 15 }]
                },
                markLine: {
                    data: [{ type: "average", name: "平均值" }]
                }
            },
            {
                name: "最低气温",
                type: "line",
                data: [1, -2, 2, 5, 3, 2, 0],

                label: {
                    nomal: {
                        position: ["30%", "50%"],
                        textStyle: {
                            color: "#000000"
                        }
                    }
                },
                markPoint: {
                    data: [{ name: "周最低", value: -2, xAxis: 1, yAxis: -1 }],

                    label: {
                        nomal: {
                            position: ["30%", "50%"],
                            textStyle: {
                                color: "#000000"
                            }
                        }
                    }
                },
                markLine: {
                    data: [
                        { type: "average", name: "平均值" },
                        [
                            {
                                symbol: "arrow",
                                label: {
                                    normal: {
                                        formatter: "最大值"
                                    }
                                },
                                type: "max",
                                name: "最大值"
                            },
                            {
                                symbol: "circle",
                                x: "60%",
                                y: "50%"
                            }
                        ]
                    ]
                }
            }
        ];
        this.option.legend = legend;
        // this.option.toolbox = toolbox;
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
