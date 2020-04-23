<template>
  <div class="contact">
    <h4>{{ msg }}</h4>
  </div>
</template>

<script>
import { Swiper, GroupTitle, SwiperItem, XButton, Divider, XSwitch, Group, Cell, Alert } from 'vux'

export default {
  name: 'Contact',
  components: {
    Swiper,
    SwiperItem,
    GroupTitle,
    XButton,
    Divider,
    XSwitch,
    Group,
    Cell,
    Alert
  },
  data () {
    return {
      msg: 'Welcome to Your Home.js App'
    }
  },
  mounted () {
    // console.log('process.env:', JSON.stringify(process.env))
    // console.log('process.env:', JSON.stringify(process.env.baseUrl))
  },
  methods: {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
