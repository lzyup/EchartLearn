<template>
    <div>
        <div id="myechart" style="width:100%;height:500px;"></div>
        <!-- <img src="./images/qipao@3x.png" style="height:18px;width:32px;" /> -->
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
                series: [],
                dataX: []
            }
        };
    },
    created() {
        this.dataX = [
            "01/31",
            "03/08",
            "03/24",
            "03/26",
            "03/27",
            "03/28",
            "03/29",
            "03/31",
            "04/02",
            "04/03",
            "04/04",
            "04/05",
            "04/06",
            "04/08",
            "04/09",
            "04/10",
            "04/11",
            "04/12",
            "04/14",
            "04/16",
            "04/17",
            " ",
            " "
        ];
        let today = "04/11";
        let departureTime = "04/17";
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
            data: this.dataX
        };
        let yAxis = {
            type: "value",
            name: "y"
        };
        let tooltip = {
            show: false,
            trigger: "axis" //axis item none三个值
        };
        // let grid = {
        //     left: "3%",
        //     right: "4%",
        //     bottom: "3%",
        //     containLabel: true
        // };
        let grid = {
            left: "20",
            right: "7",
            bottom: "10%",
            containLabel: true
        };
        let endValue = " ";
        let dataZoom = [
            {
                type: "inside",
                disabled: false,
                realtime: true,
                startValue: "04/10",
                endValue: " ",
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
        let series = [
            {
                data: [
                    2015,
                    2015,
                    2015,
                    2015,
                    1998,
                    1998,
                    2015,
                    1998,
                    1998,
                    1998,
                    1624,
                    1989,
                    1989,
                    1989,
                    1989,
                    1674,
                    1989,
                    "-",
                    "-",
                    "-",
                    "-"
                ],
                type: "line",
                showSymbol: true,
                symbolSize: 6, //拐点圆的大小
                // symbol:
                //     "image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACcAAAAnCAYAAACMo1E1AAAAAXNSR0IArs4c6QAAA6FJREFUWAnNWD1oFEEU/nZjSBQharqACAdaqIgQSKcmIKJGbCS1jUQL0UKLdMYujYVJiiTYWIuNaBQRzp9OCIioRSAHIqTzJyCaEJP1+2Zvk7udmcvd5W65D5a5nTfvve/evJ15MwHqQDSNdoToR4RBPjkE6GHbw7ab7Xe2i2wXaXqB42axjtfBVazW6iqoRSF6gJN0dI2Oz1OvqwbdJRKeJdGp4AreVqtXFbloBkdocIykLlRr2DsuwFPKRoJhfPaOKQoqkovy2IF53OPY63zCrYzVIF9nJCdwELeDAfzz6XnJRQ+ZP8t4RMUBn3ID+vPoxFBwmXnqgJMcp/EQp/A5x+ccOo3uKjCK5zjN82nDFrlixN5vSax9N7D/LHDgIrD3MLCrB+jsBpYZhD/8UH9+Ab4+Ab69AFZ/p/2m3wuMYF86gmXkijn2kpr+qezYAxwfAY7eANp2pp3Y72t/gU/jwIcxYOWXLd/syXO+zpTmYDm5adznWHr1IHcJODEDdOzzDKjQvfIDeDcMFB5XGIRxroc3kwEb5MxyEeEjBe6vsvcOoIcJUj8iYO5u/LiN6Cs+liwzpUQY90rERineDjGxoX4v7Zg/qXcL4iMeBsabWfnX8CbpLGs1lae1omyXWKlVRvDVkH+K23BKO0kcOW1JLij5lWMNJSZH/KMmd2nfhSKf0Gzi8V5pD9NXWU/y25bsHtmVfRfIR7xCZlk/5fYmrnVMy0UzIfvyY6NLvELuBIO2jD1aYKtZx5zKVXbKvvy4QF4il3PJzMrvFDS4UzuMC+QVMje57zigLSkL+PyQlyLnJqe9Mgv4/JCXIsfd2gFt4lnA54e8FDlnLWWqiyzIqYpxgbwUOR1EbKjsyQI+P+SlyLlZqB7LAj4/5KXIFZwcVChmAb+fBZF75uSgClaFYjMh+/LjAs+7oQ68lC1ZcpXWqmCbCdl3l/BL4hWak7gOvC6Y0poVbDOgylj2XSAf8YpLJp7EXWNMza/Sml9NY0F7sus7UxT5GHLmiiA+idscVPOrtG4kZM93liCP5MoijlzsWMXVupODqftHKdpuBKk/Rzv+Pyv/4mGwQa54qJhMBFYrgyqtlSv1QHrS9xNTgTyRHG7kgvXyJlr63CqaLXviT2LYKnclGzmXEFNrLlV4d8Gf+dL+JvzWLVOf8ecwXpZzaXlT7+eASd6N3Cq9G0n7r0guGdySN5sJuaRtyTvhhFzSVn2brnJMVU+dt+n/AU4VO15l8D89AAAAAElFTkSuQmCC",
                itemStyle: {
                    normal: {
                        lineStyle: {
                            color: "#D1D1D1" //折线颜色
                        }
                    }
                },
                color: "rgba(209, 209, 209, 1)",
                label: {
                    show: true,
                    color: "rgba(204,204,204,1)",
                    formatter: obj => {
                        if (obj.name == today) {
                            return ["{b|" + "￥" + obj.value + "}"].join("");
                        } else {
                            return ["{a|" + "￥" + obj.value + "}"].join("");
                        }
                    },
                    rich: {
                        a: {
                            color: "rgba(209, 209, 209, 1)"
                        },
                        b: {
                            color: "rgba(17, 136, 255, 1)",
                            opacity: 0
                        }
                    }
                },
                smooth: true,
                areaStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                            {
                                offset: 0,
                                color: "rgba(232, 232, 232, 1)"
                            },
                            {
                                offset: 1,
                                color: "rgba(255, 255, 255, 1)"
                            }
                        ])
                    }
                }
            },
            {
                data: [
                    "-",
                    "-",
                    "-",
                    "-",
                    "-",
                    "-",
                    "-",
                    "-",
                    "-",
                    "-",
                    "-",
                    "-",
                    "-",
                    "-",
                    "-",
                    "-",
                    1989,
                    2015,
                    2015,
                    2015,
                    2015
                ],
                markPoint: {
                    data: [
                        {
                            value: 2015,
                            xAxis: 18,
                            yAxis: 2015
                        }
                    ],
                    symbolKeepAspect: true,
                    symbolSize: [42, 18],
                    symbolOffset: [0, "-150%"],
                    symbol:
                        "image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAAA2CAYAAAA4T5zSAAAAAXNSR0IArs4c6QAAAk9JREFUeAHtnLlKBEEURd9rBXFJXBL9BX9AUxFEEEMjBcEtEUFcQ0MVxMRE0czQwA9QQ/9ADcTIFXRGA3EBsXxvHEFcYEC77zRzC3q6qrqp25xbt5gZqFbJlxCC1i/IoDUH7GgOIjUf13j+OwEVubdRDuzYyMzIuqoaYhHrF2lYDo2vz7JpPW3eZomXgEHfiyqk92ZcLyOf+YQfL/Cvo/tEzzE39lo3H4asY+3rTWzHT8CSMByZjK/5LBgCA25AM0abqs4+suWH33ZAc8HZewJYgARoABC+S9MAGgAmAJZnAmgAmABYngmgAWACYHkmgAaACYDlmQAaACYAlmcCaACYAFieCaABYAJgeSaABoAJgOWZABoAJgCWZwJoAJgAWJ4JoAFgAmB5JoAGgAmA5ZkAGgAmAJZnAmgAmABYngmgAWACYPkov30S/BilKe/sfQnyvassGAIHbsAGRpuqzl7zO+R3fO8qkSRHwDdr24759si3zPuube9ITr60lZx1jrmxt/p74bsiPkjEczbQv78rIh7JeEZtWg1VT3eyG4K0FKSgclJRKa1XY3pd0P0J35S6H2IXI/pQWS1dqnJUAKtMuUpnscL350+dAf7Q56OakXLpMBPOvP1Tscg/2dF9Pa3HP10vlr5UGuDwshN6KmXSYdXbbzBVgr2Ipy87q/vfrhVZR2oNcI7ZST20We7L0eNnrtY3lZ3Rrc99xVpPtQEO1We5/Z/SY9WXHGSVFYO/lKvzIzkC9Yuhv3Y+bM+FkPpJlRy1f1Yi/H8GWgrDvQHn7nmqOJKrVAAAAABJRU5ErkJggg==",
                    label: {
                        show: true,
                        color: "#ffffff",
                        offset: [0, -2],
                        formatter: obj => {
                            return "￥" + obj.value;
                        }
                    }
                },
                type: "line",
                showSymbol: true,
                smooth: true,
                // color: "#1188FF",
                color: params => {
                    if (params.value == 2015) {
                        return "#1188FF";
                    } else {
                        return "#1188FF";
                    }
                },
                symbolSize: 6, //拐点圆的大小
                // // symbol: "circle",
                // symbol:
                //     "image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACcAAAAnCAYAAACMo1E1AAAAAXNSR0IArs4c6QAAA6FJREFUWAnNWD1oFEEU/nZjSBQharqACAdaqIgQSKcmIKJGbCS1jUQL0UKLdMYujYVJiiTYWIuNaBQRzp9OCIioRSAHIqTzJyCaEJP1+2Zvk7udmcvd5W65D5a5nTfvve/evJ15MwHqQDSNdoToR4RBPjkE6GHbw7ab7Xe2i2wXaXqB42axjtfBVazW6iqoRSF6gJN0dI2Oz1OvqwbdJRKeJdGp4AreVqtXFbloBkdocIykLlRr2DsuwFPKRoJhfPaOKQoqkovy2IF53OPY63zCrYzVIF9nJCdwELeDAfzz6XnJRQ+ZP8t4RMUBn3ID+vPoxFBwmXnqgJMcp/EQp/A5x+ccOo3uKjCK5zjN82nDFrlixN5vSax9N7D/LHDgIrD3MLCrB+jsBpYZhD/8UH9+Ab4+Ab69AFZ/p/2m3wuMYF86gmXkijn2kpr+qezYAxwfAY7eANp2pp3Y72t/gU/jwIcxYOWXLd/syXO+zpTmYDm5adznWHr1IHcJODEDdOzzDKjQvfIDeDcMFB5XGIRxroc3kwEb5MxyEeEjBe6vsvcOoIcJUj8iYO5u/LiN6Cs+liwzpUQY90rERineDjGxoX4v7Zg/qXcL4iMeBsabWfnX8CbpLGs1lae1omyXWKlVRvDVkH+K23BKO0kcOW1JLij5lWMNJSZH/KMmd2nfhSKf0Gzi8V5pD9NXWU/y25bsHtmVfRfIR7xCZlk/5fYmrnVMy0UzIfvyY6NLvELuBIO2jD1aYKtZx5zKVXbKvvy4QF4il3PJzMrvFDS4UzuMC+QVMje57zigLSkL+PyQlyLnJqe9Mgv4/JCXIsfd2gFt4lnA54e8FDlnLWWqiyzIqYpxgbwUOR1EbKjsyQI+P+SlyLlZqB7LAj4/5KXIFZwcVChmAb+fBZF75uSgClaFYjMh+/LjAs+7oQ68lC1ZcpXWqmCbCdl3l/BL4hWak7gOvC6Y0poVbDOgylj2XSAf8YpLJp7EXWNMza/Sml9NY0F7sus7UxT5GHLmiiA+idscVPOrtG4kZM93liCP5MoijlzsWMXVupODqftHKdpuBKk/Rzv+Pyv/4mGwQa54qJhMBFYrgyqtlSv1QHrS9xNTgTyRHG7kgvXyJlr63CqaLXviT2LYKnclGzmXEFNrLlV4d8Gf+dL+JvzWLVOf8ecwXpZzaXlT7+eASd6N3Cq9G0n7r0guGdySN5sJuaRtyTvhhFzSVn2brnJMVU+dt+n/AU4VO15l8D89AAAAAElFTkSuQmCC",
                itemStyle: {
                    normal: {
                        lineStyle: {
                            color: "#1989FB" //折线颜色
                        },
                        label: {
                            show: true,
                            // color: "rgba(68, 68, 68, 1)",
                            color: params => {
                                console.log(
                                    "测试color------>",
                                    JSON.stringify(params)
                                );
                            },
                            formatter: obj => {
                                if (obj.name == today) {
                                    return [
                                        "{b|" + "￥" + obj.value + "}"
                                    ].join("");
                                } else if (obj.name == departureTime) {
                                    return [
                                        "{b|" + "￥" + obj.value + "}"
                                    ].join("");
                                } else {
                                    return [
                                        "{a|" + "￥" + obj.value + "}"
                                    ].join("");
                                }
                            },
                            rich: {
                                a: {
                                    color: "rgba(68, 68, 68, 1)"
                                },
                                b: {
                                    color: "rgba(17, 136, 255, 1)"
                                }
                            }
                        }
                    }
                },
                areaStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                            {
                                offset: 0,
                                color: "rgba(179, 217, 255, 1)"
                            },
                            {
                                offset: 1,
                                color: "rgba(252, 254, 255, 1)"
                            }
                        ])
                    }
                }
            }
        ];
        // let series = [
        //     {
        //         name: "指数",
        //         type: "line",
        //         color: "#1188FF",
        //         data: [4, 8, 16, 32, 64, "-", "-"],
        //         markPoint: {
        //             // data: [{ type: "max", name: "最大值" }]
        //             // data: [{ value: 16, xAxis: 2, yAxis: 16 }]
        //             data: [{ coord: [2, 16] }],
        //             itemStyle: {
        //                 color: "#4587E7",
        //                 borderColor: "#000",
        //                 borderWidth: 0,
        //                 borderType: "solid"
        //             }
        //         },
        //         label: {
        //             show: true,
        //             color: "rgba(204,204,204,1)",
        //             formatter: obj => {
        //                 console.log("测试label------>", JSON.stringify(obj));
        //                 return "￥" + obj.value;
        //             }
        //         },
        //         itemStyle: {
        //             normal: {
        //                 lineStyle: {
        //                     color: "#1989FB" //折线颜色
        //                 }
        //             }
        //         }
        //     },
        //     {
        //         name: "指数",
        //         type: "line",
        //         color: "#FF00FF",
        //         data: ["-", "-", "-", "-", 64, 128, 256],
        //         markPoint: {
        //             large: true,
        //             data: [
        //                 {
        //                     name: "最大值",
        //                     type: "max",
        //                     label: {
        //                         normal: {
        //                             show: true,
        //                             fontSize: 24
        //                         }
        //                     }
        //                 }
        //             ],
        //             label: {
        //                 normal: {
        //                     show: true,
        //                     fontSize: 24
        //                 }
        //             }
        //         }
        //     }
        // ];
        this.option.legend = legend;
        // this.option.toolbox = toolbox;
        this.option.xAxis = xAxis;
        this.option.yAxis = yAxis;
        this.option.tooltip = tooltip;
        this.option.series = series;
        this.option.grid = grid;
        this.option.dataZoom = dataZoom;
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
