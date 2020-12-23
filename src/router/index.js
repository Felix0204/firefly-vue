import Vue from 'vue'
import VueRouter from 'vue-router'
<<<<<<< HEAD
import routeList from './routes.js'

Vue.use(VueRouter)

const allRoutes = [
=======
import routeList from './routes'

Vue.use(VueRouter)

const routes = [
>>>>>>> 9431a47c58c007b3f195c7391da4ed1bf1125ecb
  ...routeList
]

const router = new VueRouter({
<<<<<<< HEAD
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
=======
  routes: routes,
  mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 })
>>>>>>> 9431a47c58c007b3f195c7391da4ed1bf1125ecb
})

export default router
