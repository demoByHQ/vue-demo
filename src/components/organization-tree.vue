
<template>
  <div class="er-tree">
    <ul class="l_tree">
      <li
        v-for="item in test"
        :key="item.id"
        class="l_tree_branch">
        <div class="l_tree_click">
          <button
            v-if="item.children"
            type="button"
            class="l_tree_children_btn"
            @click="toggle(item)">{{ item.test ? '-' : '+' }}</button>
          <span
            class="l_folder"
            @click="toParent(item)">{{ item.name }}</span>
        </div>
        <organization-tree
          v-show="item.test"
          v-if="item.children"
          :test="item.children"
        />
      </li>
    </ul>
  </div>
</template>

<script>
import Vue from 'vue'
export default {
  name: 'OrganizationTree',
  props: {
    test: {
      type: Array,
      default: () => {}
    }
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted () {
  },
  methods: {
    toParent: function (item) {
      // func: 是父组件指定的传数据绑定的函数，this.msg:子组件给父组件传递的数据
      this.$emit('func', item)
    },
    toggle: function (item) {
      var idx = this.test.indexOf(item)
      Vue.set(this.test[idx], 'test', !item.test)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style type="text/less" lang="less" rel="stylesheet/less">
.er-tree{
  text-align: left;
  padding: 10px;
  *{
    box-sizing: border-box;
    margin: 0;padding: 0;
  }
  *:before,*:after{
    box-sizing: border-box;
  }
  ul,
  li {
    list-style: none;
  }

  .l_tree_container {
    height: 100%;
    box-shadow: 0 0 3px #ccc;
    margin:0 50px;
    position: relative;
  }

  .l_tree {
    // width: calc(100% - 44px);
    height: 100%;
    padding-left: 22px;
  }
  .l_tree_branch {
    width: 100%;
    height: 100%;
    display: block;
    padding: 10px;
    position: relative;
  }

  .l_tree_branch .l_tree_children_btn {
    width: 19px;
    height: 19px;
    background-color: #23b1f0;
    font-size: 14px;
    text-align: center;
    color: #ffffff;
    outline: none;
    border: 0;
    cursor: pointer;
  }

  ul.l_tree:before {
    content: '';
    border-left: 1px dashed #999999;
    height: calc(100%);
    position: absolute;
    left: 10px;
    top: 0px;
  }

  .l_tree .l_tree_branch:last-child::before {
    content: '';
    width: 3px;
    height: calc(100% - 24px);
    display: block;
    background-color: #ffffff;
    position: absolute;
    bottom: 0;
    left: -14px;
  }

  .l_tree,
  .l_tree_branch {
    position: relative;
  }

  .l_tree_branch::after {
    content: '';
    width: 20px;
    height: 0;
    border-bottom: 1px dashed #000;
    position: absolute;
    right: calc(100% - 9px);
    top: 22px;
  }

  .l_tree_container>.l_tree::before,
  .l_tree_container>.l_tree>.l_tree_branch::after {
    display: none;
  }
}

</style>
