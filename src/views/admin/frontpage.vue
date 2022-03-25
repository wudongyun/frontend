<template>
  <div class="page">
    <div class="div-1">
      <div class="des">
        <div style="width: 45%;height: 100%;position: absolute;left: 0;text-align: center;margin-top: 40px;color: grey">今日咨询数<div style="font-size: 4em;margin-top: 20px;color: #445974;">{{ this.consultant_number }}</div></div>
        <div style="width: 55%;height: 100%;position: absolute;right: 0;text-align: center;margin-top: 40px;color: grey">今日咨询时长<div style="font-size: 4em;margin-top: 20px;color: #445974;border-left: 1px solid grey">{{ this.consultant_time }}</div></div>
      </div>
      <div class="chart">
        <div style="color: grey;margin: 10px">今日咨询数据变化</div>
        <div id="myChart" style="height: 85%;width: 100%;color: grey" />
      </div>
    </div>
    <div class="div-2">
      <div class="left">咨询师</div>
      <div class="right">督导</div>
    </div>
    <div class="div-3">
      <div class="chart">
        <div style="color: grey;margin: 10px">七日咨询数量统计</div>
        <div id="myChart2" style="height: 85%;width: 100%;color: grey" />
      </div>
      <div class="table">
        <div class="table-1">
          <div class="des">
            当月咨询数量排行
          </div>
          <div class="table-content">
            <el-table
              :data="tableConsultantNumberData"
              stripe
              class="table-data"
              :row-style="{height:'50px'}"
              :cell-style="{padding:'0px'}"
              :show-header="false"
            >
              <el-table-column
                prop="seq"
                width="30px"
              />
              <el-table-column
                prop="name"
                width="190px"
              />
              <el-table-column
                prop="number"
                width=""
              />
            </el-table>
          </div>
        </div>
        <div class="table-2">
          <div class="des">
            当月好评数量排行
          </div>
          <div class="table-content">
            <el-table
              :data="tableGoodNumberData"
              stripe
              class="table-data"
              :row-style="{height:'50px'}"
              :cell-style="{padding:'0px'}"
              :show-header="false"
            >
              <el-table-column
                prop="seq"
                width="30px"
              />
              <el-table-column
                prop="name"
                width="190px"
              />
              <el-table-column
                prop="number"
                width=""
              />
            </el-table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import * as echarts from 'echarts'
export default {
  data() {
    return {
      consultant_number: '35',
      consultant_time: '60:30:23',
      consultant_day_data: [5, 30, 24, 8, 13, 14, 20, 4, 3, 2, 5, 6, 23, 12, 31, 2, 5, 2, 1, 3, 5, 12],
      consultant_week_data_y: [5, 30, 24, 8, 13, 14, 20],
      consultant_week_data_x: [5, 30, 24, 8, 13, 14, 20],
      tableConsultantNumberData: [
        { seq: 1, name: 'name', number: 23 },
        { seq: 2, name: 'name', number: 23 },
        { seq: 3, name: 'name', number: 23 },
        { seq: 4, name: 'name', number: 23 }
      ],
      tableGoodNumberData: [
        { seq: 1, name: 'name', number: 23 },
        { seq: 2, name: 'name', number: 23 },
        { seq: 3, name: 'name', number: 23 },
        { seq: 4, name: 'name', number: 23 }]
    }
  },
  mounted() {
    this.Draw()
    this.Draw2()
  },
  methods: {
    Draw() {
      // 基于准备好的dom，初始化echarts实例
      const myChart = echarts.init(document.getElementById('myChart'))
      myChart.clear()
      console.log('s')
      myChart.setOption({
        grid: {
          left: '40px',
          right: '4px',
          bottom: '50px',
          // containLabel: true
          height: '120px',
          width: '90%'
        },
        axisPointer: {
          type: 'cross',
          label: {
            backgroundColor: '#6a7985'
          }
        },
        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        xAxis: {
          type: 'category',
          data: ['00:00', '01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00', '24:00']
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            name: 'Line 1',
            type: 'line',
            stack: 'Total',
            smooth: true,
            lineStyle: {
              width: 0
            },
            showSymbol: false,
            areaStyle: {
              opacity: 0.8,
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: '#dbb14e'
                },
                {
                  offset: 1,
                  color: '#cedfae'
                }
              ])
            },
            emphasis: {
              focus: 'series'
            },
            data: this.consultant_day_data
          }
        ]
      })
    },
    Draw2() {
      // 基于准备好的dom，初始化echarts实例
      const myChart = echarts.init(document.getElementById('myChart2'))
      myChart.clear()
      console.log('s')
      myChart.setOption({
        color: 'green',
        grid: {
          left: '40px',
          right: '4px',
          bottom: '40px',
          // containLabel: true
          height: '140px',
          width: '90%'
        },
        axisPointer: {
          type: 'cross',
          label: {
            backgroundColor: '#6a7985'
          }
        },
        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        xAxis: {
          type: 'category',
          data: this.consultant_week_data_x
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            name: 'Email',
            type: 'line',
            stack: 'Total',
            data: this.consultant_week_data_y
          }
        ]
      })
    }
  }
}
</script>

<style scoped lang="scss">
.page{
  height: 96%;
  margin: 1%;
  .div-1{
    position: relative;
    width: 100%;
    height: 30%;
    .des{
      position: absolute;
      width: 39%;
      height: 90%;
      background-color: white;
      margin-top: 0.8%;
    }
    .chart{
      position: absolute;
      background-color: white;
      right: 0;
      width: 60%;
      height: 90%;
      margin-top: 0.8%;
    }
  }
  .div-2{
    position: relative;
    width: 100%;
    height: 35%;
    .left{
      position: absolute;
      background-color: white;
      width: 45%;
      height: 90%;
      margin-top: 0.8%;
    }
    .right{
      position: absolute;
      width: 54%;
      height: 90%;
      background-color: white;
      margin-top: 0.8%;
      right: 0;
    }
  }
  .div-3{
    position: relative;
    width: 100%;
    height: 35%;
    .chart{
      position: absolute;
      background-color: white;
      width: 50%;
      height: 90%;
      margin-top: 0.8%;
    }
    .table{
      position: absolute;
      width: 49%;
      height: 90%;
      margin-top: 0.8%;
      right: 0;
      .table-1{
        width: 49%;
        background-color: white;
        height: 100%;
        position: absolute;
        box-shadow: 2px 2px 5px #888888;
        padding: 10px;
        .des{
          width: 100%;
          height: 20px;
          background-color: white;
        }
        .table-content{
          height: 90%;
          width: 100%;
          overflow: hidden;
          .table-data{
          }
        }
      }
      .table-2{
        width: 49%;
        background-color: white;
        height: 100%;
        position: absolute;
        right: 0px;
        box-shadow: 2px 2px 5px #888888;
        padding: 10px;
        .des{
          width: 100%;
          height: 20px;
          background-color: white;
        }
        .table-content{
          height: 90%;
          width: 100%;
          overflow: hidden;
          .table-data{
          }
        }
      }
    }
  }

}
</style>
