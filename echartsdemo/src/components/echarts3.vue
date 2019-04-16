<template>
    <div>
        <div id="myechart" style="width:100%;height:500px;background:#ff00ff"></div>
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
            MaxNumber: "",
            MinNumber: "",
            interval: "",
            index: "",
            startValue: "",
            endValue: "",
            xAxis: {},
            yAxis: {},
            label: {},
            tooltip: {},
            series: [
                2630,
                2677,
                2682,
                2618,
                2618,
                2681,
                2629,
                2629,
                2631,
                2683,
                2582,
                2582,
                2582,
                2622,
                2576,
                2640,
                2764,
                2764,
                3039,
                3003,
                2608,
                2574,
                2622,
                2575,
                2616,
                2576,
                2637,
                2578,
                2578,
                2659,
                2710,
                2577,
                2571,
                2615,
                2583,
                2638,
                2637,
                2578,
                2520,
                2578,
                2577,
                2569,
                2577,
                2578,
                2563,
                2644,
                2563,
                2558,
                3326,
                3326,
                3360,
                3371,
                4398,
                3293,
                20966,
                4633,
                3315,
                3491,
                3939,
                3939,
                5224,
                6130,
                6148,
                5437,
                5245,
                5424,
                5234,
                5402,
                5145,
                5543,
                6077,
                6165,
                5564,
                5573,
                6083,
                6079,
                8427
            ],
            dataX: [
                "11/05",
                "11/08",
                "11/15",
                "11/18",
                "11/20",
                "11/21",
                "11/22",
                "11/24",
                "11/27",
                "11/30",
                "12/01",
                "12/02",
                "12/03",
                "12/04",
                "12/06",
                "12/07",
                "12/08",
                "12/10",
                "12/11",
                "12/12",
                "12/13",
                "12/16",
                "12/17",
                "12/18",
                "12/19",
                "12/21",
                "12/23",
                "12/24",
                "12/26",
                "12/27",
                "12/28",
                "12/29",
                "12/30",
                "12/31",
                "01/02",
                "01/03",
                "01/04",
                "01/05",
                "01/06",
                "01/07",
                "01/08",
                "01/09",
                "01/10",
                "01/11",
                "01/12",
                "01/13",
                "01/14",
                "01/16",
                "01/17",
                "01/21",
                "01/28",
                "01/29",
                "01/30",
                "02/01",
                "02/28",
                "03/07",
                "03/08",
                "03/13",
                "03/14",
                "03/15",
                "03/19",
                "03/21",
                "03/22",
                "03/23",
                "03/25",
                "03/27",
                "03/28",
                "03/29",
                "03/30",
                "03/31",
                "04/01",
                "04/02",
                "04/03",
                "04/05",
                "04/06",
                "04/08",
                "04/09",
                " ",
                " "
            ],
            toolTipTimeArr: [
                "11月05日 周一",
                "11月08日 周四",
                "11月15日 周四",
                "11月18日 周日",
                "11月20日 周二",
                "11月21日 周三",
                "11月22日 周四",
                "11月24日 周六",
                "11月27日 周二",
                "11月30日 周五",
                "12月01日 周六",
                "12月02日 周日",
                "12月03日 周一",
                "12月04日 周二",
                "12月06日 周四",
                "12月07日 周五",
                "12月08日 周六",
                "12月10日 周一",
                "12月11日 周二",
                "12月12日 周三",
                "12月13日 周四",
                "12月16日 周日",
                "12月17日 周一",
                "12月18日 周二",
                "12月19日 周三",
                "12月21日 周五",
                "12月23日 周日",
                "12月24日 周一",
                "12月26日 周三",
                "12月27日 周四",
                "12月28日 周五",
                "12月29日 周六",
                "12月30日 周日",
                "12月31日 周一",
                "01月02日 周三",
                "01月03日 周四",
                "01月04日 周五",
                "01月05日 周六",
                "01月06日 周日",
                "01月07日 周一",
                "01月08日 周二",
                "01月09日 周三",
                "01月10日 周四",
                "01月11日 周五",
                "01月12日 周六",
                "01月13日 周日",
                "01月14日 周一",
                "01月16日 周三",
                "01月17日 周四",
                "01月21日 周一",
                "01月28日 周一",
                "01月29日 周二",
                "01月30日 周三",
                "02月01日 周五",
                "02月28日 周四",
                "03月07日 周四",
                "03月08日 周五",
                "03月13日 周三",
                "03月14日 周四",
                "03月15日 周五",
                "03月19日 周二",
                "03月21日 周四",
                "03月22日 周五",
                "03月23日 周六",
                "03月25日 周一",
                "03月27日 周三",
                "03月28日 周四",
                "03月29日 周五",
                "03月30日 周六",
                "03月31日 周日",
                "04月01日 周一",
                "04月02日 周二",
                "04月03日 周三",
                "04月05日 周五",
                "04月06日 周六",
                "04月08日 周一"
            ],
            option: {}
        };
    },
    created() {
        console.log("测试dataX------->", JSON.stringify(this.dataX));
        let len = this.series.length;
        if (this.dataX.length <= 9) {
            this.startValue = this.dataX[0];
            this.endValue = this.dataX[8];
        } else {
            if (len <= 5) {
                this.startValue = this.dataX[0];
                this.endValue = this.dataX[8];
            } else if (len > 5 && this.dataX.length - 1 - len <= 5) {
                this.startValue = this.dataX[this.dataX.length - 9];
                this.endValue = this.dataX[this.dataX.length - 1];
            } else if (len > 5 && this.dataX.length - 1 - len > 5) {
                this.startValue = this.dataX[len - 4];
                this.endValue = this.dataX[len + 4];
            }
        }
        let maxData = Math.max.apply(null, this.dataList);
        let minData = Math.min.apply(null, this.dataList);
        this.MaxNumber = (parseInt(maxData / 100) + 1) * 100;
        this.MinNumber = parseInt(minData / 100) * 100;
        this.interval = (this.MaxNumber - this.MinNumber) / 4;
        let xAxis = {
            type: "category",
            data: this.dataX, // x轴数据
            name: "日期", //x轴名称
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            boundaryGap: true, //从X轴0刻度开始//x轴小锯齿显示与否
            // x轴名称样式
            axisLabel: {
                padding: [20, 0, 0, 0],
                interval: 0,
                show: true,
                fontSize: 10,
                color: "rgba(255,255,255,0.6)",
                fontFamily: "Avenir-Roman",
                align: "center",
                formatter: params => {
                    for (let i = 1; i < this.series.length; i++) {
                        if (
                            Math.min.apply(null, this.series) == this.series[i]
                        ) {
                            this.index = i;
                            break;
                        }
                    }
                    if (this.dataX[this.index] == params) {
                        return ["{a|" + params + "}", "{b|最低}"].join("\n");
                    } else {
                        return ["{a|" + params + "}", "{b|}"].join("\n");
                    }
                },
                rich: {
                    a: {
                        verticalAlign: "bottom",
                        fontSize: 10,
                        color: "rgba(255,255,255,0.6)",
                        fontFamily: "Avenir-Roman"
                    },
                    b: {
                        verticalAlign: "bottom",
                        fontSize: 10,
                        color: "RGBA(50, 249, 247, 1)",
                        fontFamily: "Avenir-Roman"
                    }
                }
            }
        };
        let yAxis = {
            interval: this.interval,
            type: "value",
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            //y轴名称样式
            axisLabel: {
                padding: [0, 0, 0, -20],
                inside: true,
                fontSize: 9,
                color: "rgba(255,255,255,0.6)",
                fontFamily: "Avenir-Roman",
                formatter: ["{a|¥}{x|{value}}"].join("\n"),
                rich: {
                    a: {
                        verticalAlign: "bottom",
                        fontSize: 9,
                        fontFamily: "Avenir-Roman"
                    },
                    x: {
                        verticalAlign: "bottom",
                        fontSize: 9,
                        fontFamily: "Avenir-Roman"
                    }
                }
            },
            min: this.MinNumber,
            max: this.MaxNumber,
            scale: false,
            show: true, //y轴刻度值
            splitLine: {
                show: true,
                lineStyle: {
                    color: "rgba(255,255,255,.35)",
                    width: 0.1,
                    type: "dotted",
                    opacity: 1
                }
            },
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(
                        0.02,
                        0.1,
                        0.01,
                        1,
                        [
                            {
                                offset: 0,
                                color: "rgba(255,153,0,0.3)"
                            },
                            {
                                offset: 1,
                                color: "rgba(255,255,255,0.1)"
                            }
                        ]
                    )
                }
            }
        };
        let tooltip = {
            triggerOn: "click", //提示框触发的条件
            trigger: "axis", //axis item none三个值
            position: (point, params, dom, rect, size) => {
                //   //其中point为当前鼠标的位置，size中有两个属性：viewSize和contentSize，分别为外层div和tooltip提示框的大小
                let x = point[0];
                let y = point[1];
                console.log("测试x------>", x);
                console.log("测试y------>", y);

                let viewWidth = size.viewSize[0];
                let viewHeight = size.viewSize[1];
                let boxWidth = size.contentSize[0];
                let boxHeight = size.contentSize[1];
                let startD = 40;
                let endD = viewWidth;
                let padx = (endD - startD) / 8;
                let offX = boxWidth / 2;
                console.log("startD", startD);
                console.log("endD", endD);
                console.log("padx", padx);
                console.log("point", point[0]);
                if ((point[0] - startD) % padx == 0) {
                    x = point[0];
                } else {
                    if ((point[0] - startD) % padx < padx / 2) {
                        x = point[0] - ((point[0] - startD) % padx);
                    } else {
                        x = point[0] - ((point[0] - startD) % padx) + padx;
                    }
                }

                console.log("测试viewWidth------>", viewWidth);
                console.log("测试viewHeight----->", viewHeight);
                console.log("测试boxWidth------->", boxWidth);
                console.log("测试boxHeight------>", boxHeight);

                return [x - offX, 10];
            },
            formatter: obj => {
                console.log("测试obj------>", JSON.stringify(obj));
                console.log(
                    "测试toolTipTime----->",
                    JSON.stringify(this.toolTipTime)
                );
                let priceFlag = "总价";
                let timeTip = "";
                let M = obj[0].axisValue.substr(0, 2);
                let D = obj[0].axisValue.substr(3, 2);
                for (let i = 0; i < this.toolTipTime.length; i++) {
                    if (
                        M == this.toolTipTimeArr[i].substr(0, 2) &&
                        D == this.toolTipTimeArr[i].substr(3, 2)
                    ) {
                        timeTip = this.toolTipTimeArr[i];
                    }
                }
                return (
                    '<div style="font-size: 10px;text-align: center;color:rgba(255,255,255,0.6)">' +
                    timeTip +
                    "</div>" +
                    '<div style="font-size: 11px;color:rgba(255,153,0,1);font-family: Avenir-Book;">' +
                    "¥" +
                    '<span style="font-size: 15px;">' +
                    obj[0].value +
                    "</span>" +
                    '<span style="font-size: 9px;color:rgba(255,255,255,0.6)">' +
                    priceFlag +
                    "</span>" +
                    "</div>" +
                    '<div style="position:absolute;top:45px;left:34px;border-left:12px solid transparent;border-right:12px solid transparent;border-top:12px solid rgba(77,78,88,1);"></div>'
                );
            },
            textStyle: {
                fontSize: 12,
                width: 200
            },
            backgroundColor: "rgba(77,78,88,1)",
            borderRadius: 4,
            axisPointer: {
                show: false,
                margin: 30,
                lineStyle: {
                    color: "rgba(255,255,255,0.1)",
                    width: 1,
                    type: "dotted",
                    opacity: 1
                }
            }
        };
        let series = [
            {
                name: "招商银行",
                data: this.series,
                type: "line"
            }
        ];
        let grid = {
            left: "20",
            right: "-20",
            bottom: "10%",
            containLabel: true
        };
        let dataZoom = [
            {
                type: "inside",
                disabled: false,
                realtime: true,
                startValue: this.startValue,
                endValue: this.endValue,
                throttle: 100,
                zoomLock: true,
                preventDefaultMouseMove: false
            },
            {
                type: "slider",
                show: false,
                preventDefaultMouseMove: false
            }
        ];
        this.option.dataZoom = dataZoom;
        this.option.grid = grid;
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
