import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      props: { align: 'middle' }
    },
    {
      path: '/resume',
      name: 'resume',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: function () {
        return import('../views/Resume.vue')
      }
    },
    {
      /**
       * Migrating from Vue 2; Breaking Changes
       * @see removed-star-or-catch-all-routes {@link https://router.vuejs.org/guide/migration/index.html#removed-star-or-catch-all-routes}
       */
      path: '/:pathMatch(.*)*',
      name: 'notfound',
      component: function () {
        return import('../views/NotFound.vue')
      }
    }
  ]
})