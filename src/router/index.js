import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './modules'

Vue.use(VueRouter)

const router = new VueRouter({
  routes,
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})

export default router
