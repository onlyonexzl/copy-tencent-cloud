<template>
  <div class="pageHome">
    <div class="title_box">
      <div class="box_item"
           style="background:#5ab6df; box-shadow: 0 5px 0 rgb(57 154 197);">
        <i class="el-icon-c-scale-to-original"></i>
        <div class="text">
          <p>商品数量</p>
          <span>2000</span>
        </div>
      </div>
      <div class="box_item"
           style="background:#4acacb; box-shadow: 0 5px 0 #3e9192;">
        <i class="el-icon-c-scale-to-original"></i>
        <div class="text">
          <p>商品数量</p>
          <span>2000</span>
        </div>
      </div>
      <div class="box_item"
           style="background:#fc8675; box-shadow: 0 5px 0 #e27869;">
        <i class="el-icon-c-scale-to-original"></i>
        <div class="text">
          <p>商品数量</p>
          <span>2000</span>
        </div>
      </div>
      <div class="box_item"
           style="background:#6a8abe; box-shadow: 0 5px 0 #5f7cab;">
        <i class="el-icon-c-scale-to-original"></i>
        <div class="text">
          <p>商品数量</p>
          <span>2000</span>
        </div>
      </div>
    </div>

    <div class="content">
      <div class="tit_box">
        图标一
      </div>
      <div id="echarts">

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home page',
  methods: {
    getEcharts () {
      // 基于准备好的dom，初始化echarts实例
      let myChart1 = this.$echarts.init(document.getElementById('echarts'));
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

        color: ["#4BB3FF", "#1DBB9D", "#FFCD58", "#FF7EA7", "#FC940A"],
        toolbox: {
          show: true,
          feature: {
            dataZoom: {
              yAxisIndex: 'none'
            },
            dataView: { readOnly: false },
            magicType: { type: ['line', 'bar'] },
            restore: {},
            saveAsImage: {}
          }
        },
        xAxis: {
          axisLabel: { color: "#666666" },
          type: "value",
          //刻度
          axisTick: {
            show: false
          },
          type: 'category',
          boundaryGap: false,
          data: ['2019-02-25', '2019-03-04', '2019-03-18', '2019-03-26', '2019-04-16', '2019-04-26', '2019-05-04']
        },
        yAxis: {
          axisLabel: { color: "#666666" },
          type: "value",
          //刻度
          axisTick: {
            show: false
          },
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
                { type: 'max', name: '最大值' },
                { type: 'min', name: '最小值' }
              ]
            },
            markLine: {
              data: [
                { type: 'average', name: '平均值' }
              ]
            }
          },
          {
            name: '最低',
            type: 'line',
            data: [1, -2, 2, 5, 3, 2, 0],
            markPoint: {
              data: [
                { name: '周最低', value: 2, xAxis: 1, yAxis: 1.5 }
              ]
            },
            markLine: {
              data: [
                { type: 'average', name: '平均值' },
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
  },

  mounted () {
    this.getEcharts()
  }
}
</script>

<style lang="scss">
.pageHome {
  width: 100%;
  height: 100%;
  .title_box {
    width: 100%;
    height: 135px;
    display: flex;
    justify-content: space-between;
    .box_item {
      width: 24%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 15px;
      line-height: 20px;
      margin-bottom: 10px;
      color: #fff;
      > i {
        font-size: 70px;
        margin-right: 10px;
      }
      .text {
        > p {
          font-size: 18px;
          margin-bottom: 10px;
        }
      }
    }
  }

  .content {
    width: 100%;
    height: 700px;
    background: #fff;
    margin-top: 30px;
    border-radius: 10px;

    .tit_box {
      width: 100%;
      padding: 18px 20px;
      border-bottom: 1px solid #ebeef5;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
    }

    #echarts {
      width: 100%;
      height: 600px;
      margin-top: 20px;
    }
  }
}
</style>
