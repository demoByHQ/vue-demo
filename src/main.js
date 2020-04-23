// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Router from 'vue-router'

Vue.config.productionTip = false

// // 如果是上线前测试，引入 vconsole 调试工具
// if (process.env.NODE_ENV === 'development') {
//   const VConsole = require('vconsole')
//   new VConsole() // eslint-disable-line
// }

Vue.use(Router)
const originalPush = Router.prototype.push
Router.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
