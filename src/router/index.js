import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'

import Welcome from '@/components/Welcome'


Vue.use(Router)

const originalPush = Router.prototype.push
//修改原型对象中的push方法
Router.prototype.push = function push(location) {
   return originalPush.call(this, location).catch(err => err)
}

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },

    {
      path:'/Welcome',
      name:'Welcome',
      component:Welcome
    }
  ]
})
