import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/views/Home'
import Resume from '@/components/views/Resume'
import NotFound from '@/components/views/NotFound'

Vue.use(Router)

export default new Router({
  mode: 'history',
  // base: __dirname,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },

    {
      path: '/resume',
      name: 'resume',
      component: Resume
    },

    {
      path: '*',
      name: 'notfound',
      component: NotFound
    }
  ]
})
