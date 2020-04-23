<template>
  <div class="tabberWarp" >
    <div class="warp">
      <Item
        v-for="(item,index) in tabbarDes"
        :txt="item.txt"
        :page="item.page"
        :key ="index"
        :sel="selected"
        @change="getVal">
        <img
          slot="normalImg"
          :src="item.normalImg">
        <img
          slot="activeImg"
          :src="item.activeImg">
      </Item>
    </div>
  </div>
</template>

<script type="text/javascript">
// import data from './data/data'
import Item from './Item.vue'

export default{
  components: {
    Item
  },
  data: function () {
    return {
      selected: '',
      tabbarDes: [
        {
          'txt': '主页',
          'page': '',
          'normalImg': require('./img/home.png'),
          'activeImg': require('./img/home1.png')
        },
        {
          'txt': '通讯录',
          'page': 'contact',
          'normalImg': require('./img/contact.png'),
          'activeImg': require('./img/contact1.png')
        },
        {
          'txt': '设置',
          'page': 'setup',
          'normalImg': require('./img/set.png'),
          'activeImg': require('./img/set1.png')
        }
      ]
    }
  },
  mounted () {
    // this.tabbarDes = data.tabbarDes
  },
  methods: {
    getVal: function (res) {
      this.selected = res
    }
  }
}
</script>
<style type="text/css">
  .warp{
    width: 100%;
    border-top: 1px solid #eee;
    background: #fff;
    display: flex;
    align-items: center;
    justify-content: space-around;
    font-size: 0;
  }
  .warp img{
    width: 20px;
    height: 20px;
  }
  .tabberWarp img{
    margin-top: 10px;
    margin-bottom: 0px;
  }
  .tabberWarp{
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    padding-bottom: 5px;
    background: #fff;
  }
</style>
