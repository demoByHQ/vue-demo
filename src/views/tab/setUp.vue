<template>
  <div class="setUp">
    <div class="backImg personInforstyle">
      <div class="setUp-name">{{ name }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SetUp',
  components: {

  },
  data () {
    return {
      name: '张三'
    }
  },
  mounted () {

  },
  methods: {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style type="text/less" lang="less" rel="stylesheet/less">
  .setUp .backImg {
    background: url(../../assets/images/personal/background@1.png) no-repeat;
    background-size: cover;
    width: 100%;
    height: 200px;
    margin-top: -20px;
  }
  .setUp .setUp-name {
    position: absolute;
    top: 140px;
    color: white;
    font-size: 17px;
    left: 50%;
    margin-left: -20px;
    text-align: center;
  }
</style>
