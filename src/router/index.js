import Vue from 'vue'
import VueRouter from 'vue-router'
import routeList from './routes'

Vue.use(VueRouter)

const routes = [
  ...routeList
]

const router = new VueRouter({
  routes: routes,
  mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 })
})

export default router
