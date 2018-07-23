import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import Resume from '@/views/Resume'
import NotFound from '@/views/NotFound'

Vue.use(Router)

export default new Router({
  mode: 'history',
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
