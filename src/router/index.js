import Vue from 'vue'
import Router from 'vue-router'

import Application from '@/views/tab/application'
import Contact from '@/views/tab/contact'
import SetUp from '@/views/tab/setUp'
import AddressBook from '@/components/list-view'
import Organization from '@/views/organization'
import Payroll from '@/views/payroll'

// import Home from '@/views/home'
// import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', name: 'Application', component: Application },
    { path: '/contact', name: 'Contact', component: Contact },
    { path: '/setUp', name: 'SetUp', component: SetUp },
    { path: '/addressBook', name: 'AddressBook', component: AddressBook },
    { path: '/organization', name: 'Organization', component: Organization },
    { path: '/payroll', name: 'Payroll', component: Payroll },
    { path: '*', redirect: '/' }
    // { path: '/personal', name: 'HelloWorld', component: HelloWorld },
    // { path: '/HelloWorld', name: 'HelloWorld', component: HelloWorld },
    // { path: '/Home', name: 'Home', component: Home }
  ]
})
