<template>
  <div class="application">
    <div>
      <swiper
        :list="imageList"
        :index="imageIndex"
        loop
        auto
        @on-index-change="onIndexChange"/>
      <div class="home-head">
        <grid :cols="4">
          <grid-item
            v-for="(item, index) in commonsApplicationList"
            :key="index"
            @on-item-click="goTarget(item)">
            <img
              v-if="item.menuIcon"
              slot="icon"
              :src="item.menuIcon"
              class="image-50">
            <br>
            <div
              v-if="item.menuName"
              class="description">{{ item.menuName }}</div>
          </grid-item>
        </grid>
      </div>
      <div
        v-for="(items, index) in quickMenuList.categoryMenus"
        :key="index"
        class="home-content"
        style="clear: left">
        <div class="log-name">
          <div class="log-style"/>
          {{ items.cateoryName }}
        </div>
        <grid :cols="4">
          <grid-item
            v-for="(item, index) in items.menus"
            :key="index"
            @on-item-click="goTarget(item)">
            <badge v-show="item.menuName==='公告'"/>
            <img
              v-if="item.menuIcon"
              slot="icon"
              :src="item.menuIcon">
            <br>
            <div
              v-if="item.menuName"
              class="description">{{ item.menuName }}</div>
          </grid-item>
        </grid>
      </div>
    </div>
  </div>
</template>

<script>
import { Swiper, GroupTitle, SwiperItem, XButton, Grid, GridItem, Badge, Divider, XSwitch, Group, Cell, Alert } from 'vux'
import data from '../../data/data'
const baseList = [
  {
    url: 'javascript:',
    img: 'https://ww1.sinaimg.cn/large/663d3650gy1fq66vvsr72j20p00gogo2.jpg',
    title: '送你一朵'
  },
  {
    url: 'javascript:',
    img: 'https://ww1.sinaimg.cn/large/663d3650gy1fq66vw1k2wj20p00goq7n.jpg',
    title: '送你一辆车'
  }
]
const urlList = baseList.map((item, index) => ({
  url: 'http://m.baidu.com',
  img: item.img,
  fallbackImg: item.fallbackImg,
  title: `(可点击)${item.title}`
}))

export default {
  name: 'Application',
  components: {
    Swiper,
    SwiperItem,
    GroupTitle,
    XButton,
    Grid,
    GridItem,
    Badge,
    Divider,
    XSwitch,
    Group,
    Cell,
    Alert
  },
  data () {
    return {
      msg: 'Welcome to Your Home.js App',
      imageList: urlList,
      imageIndex: 0,
      isLoadingData: true,
      slideShowList: [],
      quickMenuList: [],
      swiperItemIndex: 1,
      slideShowIndex: 0,
      commonsApplicationList: [],
      newTip: false
    }
  },
  mounted () {
    // console.log("process.env:", JSON.stringify(process.env))
    // console.log("process.env:", JSON.stringify(process.env.baseUrl))
    this.quickMenuList = data.menuCateories
    this.commonsApplicationList = data.menuCateories.commonsApplication[0].menus
    if (this.commonsApplicationList) {
      this.commonsApplicationList.push({
        // 'menuIcon': require('../assets/images/home/addApp@3.png'),
        'menuResource': 'homeManage',
        'menuName': '添加'
      })
    }
  },
  methods: {
    onSwiperItemIndexChange (index) {
      // console.log("demo item change", index)
    },
    onIndexChange (index) {
      this.imageIndex = index
    },
    slideShowOnIndexChange (index) {
      this.slideShowIndex = index
    },
    goTarget (item) {
      if (item.menuName === '问与答') {
        window.location.href = item.menuResource
      } else {
        let selectItem = item.menuResource.split('/#/')[1]
        if (selectItem) {
          this.$router.push('/' + selectItem)
        } else {
          this.$router.push('/' + item.menuResource)
        }
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style type="text/less" lang="less" rel="stylesheet/less">
  .application {
    margin-bottom: 60px;
    .weui-grid__icon {
      width: 35px !important;
      height: 35px !important;
      margin: -5px auto;
    }

    .home-head {
      a {
        height: 100px;
        font-size: 13px;
        color: #000000;
      }
      z-index: 2;
      .weui-grids {
        border-top-left-radius: 15px;
        border-top-right-radius: 15px;
        margin-top: -10px;
        .weui-grid {
          background: #fff;
        }
        .weui-grid:first-child { //ios11没有继承圆角属性
          border-top-left-radius: 15px;
        }
        .weui-grid:nth-child(4) {
          border-top-right-radius: 15px;
        }
      }
      .weui-grids:before {
        border-top: none;
        border-right: 1px solid #F1F6F9 !important;
      }
      .weui-grids:after {
        border-left: none;
        border-bottom: 1px solid #F1F6F9 !important;
      }
      .weui-grid:nth-child(4) {
        &.weui-grid:before {
          border-right: none;
        }
        .weui-grid__icon {
          width: 100px;
          height: 100px;
        }
      }
      .description {
        margin: -5px auto;
      }
      .weui-grids:before {
        content: " ";
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        height: 1px;
        border-top: none;
        color: #D9D9D9;
        -webkit-transform-origin: 0 0;
        transform-origin: 0 0;
        -webkit-transform: scaleY(0.5);
        transform: scaleY(0.5);
      }
    }

    .home-content {
      a {
        height: 100px;
        font-size: 13px;
        color: #000000;
      }
      .log-name {
        text-align: left;
        padding: 10px;
        font-weight: bold;
        background-color: white;
        margin-top: 10px;
        .log-style {
          width: 5px;
          height: 14px;
          background-color: #0094F6;
          float: left;
          margin-right: 5px;
          margin-top: 2px;
        }
      }
      .description {
        margin: -5px auto;
      }
      .weui-grids:before {
        content: " ";
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        height: 1px;
        border-top: 1px solid #F1F6F9 !important;
        color: #D9D9D9;
        -webkit-transform-origin: 0 0;
        transform-origin: 0 0;
        -webkit-transform: scaleY(0.5);
        transform: scaleY(0.5);
      }
    }

    .weui-grid:after {
      content: " ";
      position: absolute;
      left: 0;
      bottom: 0;
      right: 0;
      height: 1px;
      border-bottom: 1px solid #F1F6F9 !important;
      color: #D9D9D9;
      -webkit-transform-origin: 0 100%;
      transform-origin: 0 100%;
      -webkit-transform: scaleY(0.5);
      transform: scaleY(0.5);
    }

    .weui-grid:before {
      content: " ";
      position: absolute;
      right: 0;
      top: 0;
      width: 1px;
      bottom: 0;
      border-right: 1px solid #F1F6F9 !important;
      color: #D9D9D9;
      -webkit-transform-origin: 100% 0;
      transform-origin: 100% 0;
      -webkit-transform: scaleX(0.5);
      transform: scaleX(0.5);
    }

    .weui-grids {
      background: #fff;
      .weui-grid {
        text-decoration: none;
        .vux-badge {
          position: absolute;
          top: 15px;
          right: 29px;
        }
      }
    }

    .weui-cells__title {
      margin-top: 0.77em;
      margin-bottom: 0.77em;
      padding-left: 15px;
      padding-right: 15px;
      color: #999999;
      font-size: 14px;
    }
  }
</style>
