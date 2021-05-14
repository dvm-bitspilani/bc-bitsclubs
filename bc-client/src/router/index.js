import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/search',
    name: 'Search',
    component: function () {
      return import('../views/Search.vue')
    }
  },
  {
    path: '/calendar',
    name: 'Calendar',
    component: function () {
      return import('../views/Calendar.vue')
    }
  },
  {
    path: '/about',
    name: 'About',
    component: function () {
      return import('../views/About.vue')
    }
  },
  {
    path: '/club',
    name: 'Club',
    component: function () {
      return import('../views/Club.vue')
    }
  },
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
