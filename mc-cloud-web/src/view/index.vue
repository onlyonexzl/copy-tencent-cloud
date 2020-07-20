<template>
  <div class="home">
    <el-row :gutter="12" class="total-box">
      <el-col :sm="12" :md="6" :lg="6" v-for="(item,index) in statData" :key="index">
        <div :class="['grid-content clearfix',item.bgClass]">
          <img :src="item.iconUrl" class="icon float-l">
          <div>
            <h2>{{item.title}}</h2>
            <h3>{{item.val}}</h3>
          </div>
        </div>
      </el-col>
    </el-row>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>图表1</span>
      </div>
      <div class="item">
        <div class="mychart" id="myChart1"></div>
      </div>
    </el-card>
  </div>
</template>
<script>
    // // 引入基本模板
    // let echarts = require('echarts/lib/echarts');
    // // 引入柱状图组件
    // require('echarts/lib/chart/bar');
    // // 引入提示框和title组件
    // require('echarts/lib/component/tooltip');
    // require('echarts/lib/component/title');
    export default {
        name: 'index',
        data() {
            return {
                msg: "hello",
                statData: [
                    {
                        title: "商品数量",
                        val: "2000",
                        bgClass: "bg-blue",
                        iconUrl: "../../static/image/icon-num.png"
                    },
                    {
                        title: "销售总金额",
                        val: "1200,230",
                        bgClass: "bg-green",
                        iconUrl: "../../static/image/icon-num.png"
                    },
                    {
                        title: "日销售额",
                        val: "20000",
                        bgClass: "bg-red",
                        iconUrl: "../../static/image/icon-num.png"
                    },
                    {
                        title: "月销售额",
                        val: "2000000",
                        bgClass: "bg-purple",
                        iconUrl: "../../static/image/icon-num.png"
                    },
                ],
            }
        },
        mounted() {
            this.drawLine();
        },
        methods: {
            drawLine() {
                // 基于准备好的dom，初始化echarts实例
                let myChart1 = this.$echarts.init(document.getElementById('myChart1'));
                // 绘制图表
                myChart1.setOption({
                    title: {
                        text: '',
                        subtext: ''
                    },
                    tooltip: {
                        trigger: 'axis'
                    },
                    legend: {
                        data: ['最高', '最低']
                    },
                    toolbox: {
                        show: true,
                        feature: {
                            dataZoom: {
                                yAxisIndex: 'none'
                            },
                            dataView: {readOnly: false},
                            magicType: {type: ['line', 'bar']},
                            restore: {},
                            saveAsImage: {}
                        }
                    },
                    xAxis: {
                        type: 'category',
                        boundaryGap: false,
                        data: ['2019-02-25', '2019-03-04', '2019-03-18', '2019-03-26', '2019-04-16', '2019-04-26', '2019-05-04']
                    },
                    yAxis: {
                        type: 'value',
                        axisLabel: {
                            formatter: '{value}'
                        }
                    },
                    series: [
                        {
                            name: '最高',
                            type: 'line',
                            data: [11, 11, 15, 13, 12, 13, 10],
                            markPoint: {
                                data: [
                                    {type: 'max', name: '最大值'},
                                    {type: 'min', name: '最小值'}
                                ]
                            },
                            markLine: {
                                data: [
                                    {type: 'average', name: '平均值'}
                                ]
                            }
                        },
                        {
                            name: '最低',
                            type: 'line',
                            data: [1, -2, 2, 5, 3, 2, 0],
                            markPoint: {
                                data: [
                                    {name: '周最低', value: 2, xAxis: 1, yAxis: 1.5}
                                ]
                            },
                            markLine: {
                                data: [
                                    {type: 'average', name: '平均值'},
                                    [{
                                        symbol: 'none',
                                        x: '90%',
                                        yAxis: 'max'
                                    }, {
                                        symbol: 'circle',
                                        label: {
                                            normal: {
                                                position: 'start',
                                                formatter: '最大值'
                                            }
                                        },
                                        type: 'max',
                                        name: '最高点'
                                    }]
                                ]
                            }
                        }
                    ]
                });
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .el-col {
    /*border-radius: 5px;*/
    margin-bottom: 20px;
  }

  .grid-content {
    position: relative;
    height: 115px;
    border-radius: 2px;
    font-size: 14px;
    color: #fff;
    padding-top: 32px;
  }

  .grid-content .icon {
    position: absolute;
    top: 50%;
    width: 50px;
    left: 60px;
    transform: translateY(-50%);
  }

  .grid-content div {
    margin-left: 60px;
  }

  .total-box h2 {
    font-size: 15px;
    line-height: 20px;
    font-weight: bold;
    margin-bottom: 10px;
  }

  .total-box h3 {
    font-size: 18px;
  }

  .bg-blue {
    background: #5ab6df;
    box-shadow: 0 5px 0 #51a3c8;
  }

  .bg-green {
    background: #4acacb;
    box-shadow: 0 5px 0 #42b5b6;
  }

  .bg-red {
    background: #fc8675;
    box-shadow: 0 5px 0 #e27869;
  }

  .bg-purple {
    background: #6a8abe;
    box-shadow: 0 5px 0 #5f7cab;
  }

  .mychart {
    width: 80%;
    height: 400px;
    margin: 100px auto 0;
    padding: 0 30px;
  }

  .box-card {
    margin-bottom: 20px;
  }

  .box-card .el-card__header .clearfix {
    text-align: left;
  }
  .box-card .el-card__header span {
    font-size: 18px;
    font-weight: 400;
  }
</style>
