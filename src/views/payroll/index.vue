<template>
  <div class="pay-roll-report">
    <div class="top">
      <div class="dateChoose">
        <div>
          <form
            action=""
            method="post">
            <select
              v-model="selected"
              @change="choosePayRoll(selected)">
              <option
                v-for="(option,index) in options"
                :key="index"
                :value="option.value">
                {{ option.text }}
              </option>
            </select>
          </form>
        </div>
      </div>
      <div class="pieChart">
        <div
          id="main2"
          style="width: 300px;height:200px;"
          class="pieContent"/>
        <div
          v-for="(itemReport,index) in payRollReportList"
          :key="index"
          class="payContent-center-txt-box">
          <div class="payContent-center-txt">
            实发工资/应发工资
          </div>
          <div class="salaryTxt-basePercent">
            {{ itemReport.hrPayrollReportBasePercent }}
          </div>
        </div>
      </div>

      <div class="salaryTxt">
        <div
          v-for="(itemReport,index) in payRollReportList"
          :key="index"
          class="content">
          <div class="row">
            <div>应发工资：{{ itemReport.hrPayrollReportShouldSalary }}</div>
          </div>
          <div class="row">
            <div>个人所得税：{{ itemReport.hrPayrollReportIndividualIncomeTax }}</div>
          </div>
          <div class="row">
            <div>四金个人缴纳：{{ itemReport.hrPayrollReportSocialSecurity }}</div>
          </div>
          <div class="row">
            <div>实发工资：{{ itemReport.hrPayrollReportRealSalary }}</div>
          </div>
        </div>
      </div>
    </div>

    <div class="salaryBody">
      <div class="salaryTitle">
        <div class="leftImg"/>
        <div class="rightTxt">
          薪资明细
        </div>
      </div>
      <div
        v-for="(item,index) in payRollReportDateList"
        :key="index"
        class="payRollReport-dateList"
        @click="goTarget(item,index)">
        <!-- <pay-list>
          <pay-item :item="item"/>
        </pay-list> -->
      </div>
    </div>
  </div>
</template>

<script>
import {CellFormPreview, Group, Cell, Datetime, XTable, Grid, GridItem} from 'vux'
import echarts from 'echarts'

export default {
  name: 'PayRollReport',
  components: {
    CellFormPreview,
    Group,
    Cell,
    Datetime,
    XTable,
    Grid,
    GridItem
  },
  data () {
    return {
      showLoading: true,
      vocationManageList: [],
      value1: '搜索日期',
      payRollReportList: '',
      payRollReportDateList: '',
      options: [
        {text: '上月', value: ''},
        {text: '最近三月', value: '2'},
        {text: '最近半年', value: ''},
        {text: '最近一年', value: ''},
        {text: '年初至今', value: '0'}
      ],
      selected: '0'
    }
  },
  mounted () {
    this.choosePayRoll(0)
  },

  methods: {
    goTarget (item, index) {
      this.$router.push({
        name: 'payRollData',
        query: {
          hrPayrollReportRealSalaryDate: item.hrPayrollReportRealSalaryDate
        }
      })
    },
    showPie (itemReport) {
      let option = {
        tooltip: { // 提示框组件
          trigger: 'item', // 触发类型(饼状图片就是用这个)
          formatter: '{a} <br/>{b} : {c} ({d}%)', // 提示框浮层内容格式器
          position: [3, 3]
        },
        color: ['#48cda6', '#fd87ab', '#ffdf33', '#968ade'], // 手动设置每个图例的颜色
        legend: { // 图例组件
          // right:100, //图例组件离右边的距离
          // orient: 'horizontal', //布局  纵向布局 图例标记居文字的左边 vertical则反之horizontal
          width: 200, // 图行例组件的宽度,默认自适应
          // x: '55%',                //图例显示在右边
          // y: '60%',                //图例在垂直方向上面显示居中
          x: '5%', // 图例显示在右边
          y: '78%',
          bottom: 10,
          itemWidth: 10, // 图例标记的图形宽度
          itemHeight: 10, // 图例标记的图形高度
          data: ['个人所得税', '四金个人缴纳', '实发工资'],
          textStyle: { // 图例文字的样式
            color: 'white', // 文字颜色
            fontSize: 9 // 文字大小
          }
        },
        series: [ // 系列列表
          {
            name: '薪水信息', // 系列名称
            type: 'pie', // 类型 pie表示饼图
            center: ['30%', '40%'], // 设置饼的原心坐标 不设置就会默认在中心的位置
            radius: ['50%', '70%'], // 饼图的半径,第一项是内半径,第二项是外半径,内半径为0就是真的饼,不是环形
            itemStyle: { // 图形样式
              normal: { // normal 是图形在默认状态下的样式；emphasis 是图形在高亮状态下的样式，比如在鼠标悬浮或者图例联动高亮时。
                label: { // 饼图图形上的文本标签
                  show: false // 平常不显示
                },
                labelLine: { // 标签的视觉引导线样式
                  show: false // 平常不显示
                }
              },
              emphasis: { // normal 是图形在默认状态下的样式；emphasis 是图形在高亮状态下的样式，比如在鼠标悬浮或者图例联动高亮时。
                label: { // 饼图图形上的文本标签
                  show: false,
                  position: 'center',
                  textStyle: {
                    fontSize: '10',
                    fontWeight: 'bold'
                  }
                }
              }
            },
            data: [
              {value: 100, name: '个人所得税'},
              {value: 200, name: '四金个人缴纳'},
              {value: 300, name: '实发工资'}
            ]
          }
        ]
      }
      let myChart = echarts.init(document.getElementById('main2'))
      myChart.setOption(option)
    },

    choosePayRoll (rowReport) {
      this.showPie()
      this.payRollReportList = [ {'hrPayrollReportBasePercent': 11} ]
    }
  }
}
</script>

<style type="text/less" lang="less" rel="stylesheet/less" scoped>
  .pay-roll-report {
    .top {
      background-color: #0293da;
      height: 260px;
    }

    .dateChoose {
      height: 60px;
      line-height: 60px;
    }

    .pieChart {
      float: left;
      width: 60%;
      height: 200px;
      background-color: #0293da;
      position: relative;
    }

    .salaryTxt {
      float: left;
      width: 40%;
      text-align: center;
      background-color: #0293da;
      height: 200px;
      position: relative;
      color: white;
      font-size: 10px;
    }

    select {
      width: 90px;
      height: 30px;
      appearance: none;
      background: url("../../assets/images/payroll/chooseMonth@3.png") no-repeat right center;
      background-Size: 20px 10px;
      font-size: 16px;
      color: white;
      border: none;
      outline:none;
    }

    option {
      color: #000000;
    }

    .salaryTitle {
      height: 40px;
      background-color: white;
      border-bottom: solid #ebebeb ;
      display: flex;
      align-items: center;
    }

    .leftImg {
      float: left;
      height: 20px;
      width: 10px;
      background-color: #1f8dea;
      line-height: 40px;
    }

    .rightTxt {
      padding-left: 10px;
      float: left;
      color: #6d7a81;
      text-align: left;
      line-height: 40px;
    }

    .salaryBody {
      border-bottom: solid #ebebeb ;
      padding-top: 10px;

    }

    .pieContent {
      z-index: 1;
      position: relative;
    }

    .payContent-center-txt {
      position: absolute;
      top: 0;
      font-size: 12px;
      color: white;
      left: 0;
      margin-top: 75px;
      margin-left: 40px;
    }

    .salaryTxt-basePercent {
      position: absolute;
      top: 55px;
      font-size: 20px;
      color: white;
      left: 71px;
    }
  }
</style>
