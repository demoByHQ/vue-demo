<template>
  <div class="vacation">
    <div
      class="personal-helptxt"
      @click="openHelp()">
      ?
    </div>
    <div
      v-if="isHelpOpen"
      class="personal-help-content">
      <div class="personal-helpClose-content">
        <div
          class="personal-helpClose"
          @click="closeHelp()">
          X
        </div>
      </div>
      <div class="personal-massage-box">
        <div class="personal-help-message">
          <div v-html="message"/>
        </div>
      </div>
    </div>

    <div class="vacation-background"/>

    <div class="vacation-head">
      <div class="row">
        <div
          class="col text-left"
          style="color: #6d7a80">剩余假期</div>
      </div>
      <div
        class="row"
        style="margin-top: 0px">
        <div
          class="col"
          style="color: #1f8ceb"><span class="num-size">1.5</span>/5天</div>
        <div
          class="col"
          style="color: #48d3a0"><span class="num-size">2.5</span>/8天</div>
        <div
          class="col"
          style="color: #f5a623"><span class="num-size">3</span>/7天</div>
      </div>
      <div
        class="row"
        style="color: #4a4a4a;font-weight: bold">
        <div class="col">带薪年假</div>
        <div class="col">带薪病假</div>
        <div class="col">福利年假</div>
      </div>
    </div>
    <div class="vacation-content text-left">
      <h3>休假记录</h3>
      <div
        class="row vacationWrap"
        @click="vacationDetail">
        <img
          class="image-25"
          src="../../assets/images/vacation/year.png"
          alt="图标">
        <div class="line"/>
        <div class="vacationType">
          <p class="row"><span class="col-80">带薪年假</span><span class="col-20 text-right">通过</span></p>
          <p class="row"><span class="col-80">2017-11-26至2017-12-13</span><span
            class="col-20 text-right">18天</span></p>
        </div>
      </div>
      <div
        class="row vacationWrap"
        @click="vacationDetail">
        <img
          class="image-25"
          src="../../assets/images/vacation/illness.png"
          alt="图标">
        <div class="line"/>
        <div class="vacationType">
          <p class="row"><span class="col-80">带薪病假</span><span class="col-20 text-right">通过</span></p>
          <p class="row"><span class="col-80">2017-10-21至2017-10-23</span><span class="col-20 text-right">3天</span></p>
        </div>
      </div>
      <div
        class="row vacationWrap"
        @click="vacationDetail">
        <img
          class="image-25"
          src="../../assets/images/vacation/year.png"
          alt="图标">
        <div class="line"/>
        <div class="vacationType">
          <p class="row"><span class="col-80">福利年假</span><span class="col-20 text-right">通过</span></p>
          <p class="row"><span class="col-80">2017-12-24至2017-12-25</span><span class="col-20 text-right">2天</span></p>
        </div>
      </div>
      <div
        class="row vacationWrap"
        @click="vacationDetail">
        <img
          class="image-25"
          src="../../assets/images/vacation/year.png"
          alt="图标">
        <div class="line"/>
        <div class="vacationType">
          <p class="row"><span class="col-80">带薪年假</span><span class="col-20 text-right">通过</span></p>
          <p class="row"><span class="col-90">2016-11-20至2016-11-22</span><span class="col-10 text-right">3天</span></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Vacation',
  components: {
  },
  data () {
    return {
      vacationRecord: [],
      isHelpOpen: false,
      message: ''
    }
  },
  mounted () {

  },
  methods: {
    addVacation () {
      this.$router.push('/vacationInfo')
    },
    vacationDetail () {
      this.$router.push('/vacationDetail')
    },
    openHelp () {
      this.isHelpOpen = true
    },
    closeHelp () {
      this.isHelpOpen = false
    }
  }
}
</script>

<style lang="less" rel="stylesheet/less" type="text/less">
  .vacation {
    .personal-helptxt{
      border-radius: 50%;
      width: 30px;
      height: 30px;
      position: absolute;
      z-index: 2;
      right: 5px;
      top: 5px;
      color: white;
      border:1px solid white;
      line-height: 30px;
    }

    .personal-helpClose-content{
      width: 100%;
      height: 30px;
      margin-top: 6px;
    }
    .personal-help-message{
      text-align:left;
      margin-left: 10px;
    }
    .personal-helpClose{
      border-radius: 50%;
      width: 30px;
      height: 30px;
      z-index: 2;
      color: white;
      border:1px solid white;
      line-height: 30px;
      float: right;
      right: 0;
      top: 10px;
      margin-right: 15px;
    }
    .personal-help-content{
      width:100%;
      height: 100%;
      background-color:rgba(0,0,0,0.8);
      position: fixed;
      z-index: 2;
      left: 0;
      top: 0;
       overflow: auto;
       bottom: 0px;
    }
    .vacation-background {
      height: 120px;
      background: #1f8ceb;
      width: 100%
    }
    .vacation-head {
      width: 90%;
      height: 120px;
      background: #FFFFFF;
      margin-left: 5%;
      margin-top: -80px
    }
    .vacation-content {
      margin-top: 20px;
      h3 {
        font-size: 16px;
      }
      h3:before {
        content: "";
        display: inline-block;
        border-right: 4px solid #1f8ceb;
        height: 20px;
        width: 0;
        margin-right: 7px;
        vertical-align: sub;
      }
      .vacationWrap {
        padding: 0;
        background: #fff;
        margin: 0 0 10px;
        height: 85px;
        .col {
          padding: 5px;
        }
        img {
          margin: 25px 15px;
        }
        .line {
          position: relative;
          height: 100%;
          width: 0;
          border-right: 1px solid #ddd
        }
        .line:after {
          content: "";
          position: absolute;
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: #48d2a0;
          left: -4px;
          top: 50%;
          margin-top: -5px;
        }
        .vacationType {
          width: 100%;
          padding: 10px 10px 0;
          p:first-child {
            margin-bottom: 15px;
          }
        }
      }
    }
    .num-size {
      font-size: 30px;
    }
  }
</style>
