// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Router from 'vue-router'

// 加载必须要的core，demo简化起见采用的直接加载类库，实际使用时应当采用异步按需加载
import ImportRecorder from 'recorder-core'
// 需要使用到的音频格式编码引擎的js文件统统加载进来
import 'recorder-core/src/engine/mp3'
import 'recorder-core/src/engine/mp3-engine'

Vue.config.productionTip = false

// 如果是上线前测试，引入 vconsole 调试工具
// if (process.env.NODE_ENV === 'development') {
const VConsole = require('vconsole')
new VConsole() // eslint-disable-line
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
  data: {
    Rec: ImportRecorder
  },
  template: '<App/>'
})
