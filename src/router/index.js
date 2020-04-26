import Vue from 'vue'
import Router from 'vue-router'

import Application from '@/views/tab/application'
import Contact from '@/views/tab/contact'
import SetUp from '@/views/tab/setUp'

// import Home from '@/views/home'
// import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/application', name: 'Application', component: Application },
    { path: '/', name: 'Contact', component: Contact },
    { path: '/setUp', name: 'SetUp', component: SetUp }
    // { path: '/personal', name: 'HelloWorld', component: HelloWorld },
    // { path: '/HelloWorld', name: 'HelloWorld', component: HelloWorld },
    // { path: '/Home', name: 'Home', component: Home }
  ]
})
