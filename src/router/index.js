import Vue from 'vue'
import VueRouter from 'vue-router'
import routeList from './routes.js'

Vue.use(VueRouter)

const allRoutes = [
  ...routeList
]

const router = new VueRouter({
  mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: allRoutes
})

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}

router.beforeEach(async (to, from, next) => {
  next()
})

export default router
