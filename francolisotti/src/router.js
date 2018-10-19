import Vue from 'vue'
import Router from 'vue-router'
import List from './components/list.vue'
import FlForm from './components/fl-form.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'list',
      component: List
    },
    {
      path: '/form',
      name: 'fl-form',
      component: FlForm
    },
    {
      path: '/delete/:id',
      name: 'delete',
      component: List
    },
    {
      path: '/update/:id',
      name: 'update',
      component: FlForm
    },

    
  ]
})
