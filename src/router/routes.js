// 由于懒加载页面太多的话会造成webpack热更新太慢，所以开发环境不使用懒加载，只有生产环境使用懒加载
// const _import = require('@/libs/util.import.' + process.env.NODE_ENV)

/**
 * 在主框架内显示
 */
const frameIn = [
  {
    path: '/',
    redirect: { name: 'index' },
    component: () => import('@/layout/index.vue'),
    children: [
      // 首页
      {
        path: 'index',
        name: 'index',
        meta: {
          title: '首页',
          auth: true
        },
        component: () => import('@/views/home/index.vue')
      },
      // 详情页
      {
        path: 'blog/:id',
        name: 'blog',
        meta: {
          title: '详情页',
          auth: true
        },
        props: true,
        component: () => import('@/views/blog/index.vue')
      },
      // 分类页
      {
        path: 'types/:category',
        name: 'types',
        meta: {
          title: '分类页',
          auth: true
        },
        props: true,
        component: () => import('@/views/types/index.vue')
      },
      // 标签页
      {
        path: 'tags/:tag',
        name: 'tags',
        meta: {
          title: '标签页',
          auth: true
        },
        props: true,
        component: () => import('@/views/tags/index.vue')
      },
      // 归档页
      {
        path: 'archives',
        name: 'archives',
        meta: {
          title: '归档页',
          auth: true
        },
        props: true,
        component: () => import('@/views/archives/index.vue')
      },
      // 归档页
      {
        path: 'about',
        name: 'about',
        meta: {
          title: '关于我',
          auth: true
        },
        props: true,
        component: () => import('@/views/about/index.vue')
      }
    ]
  }
]

/**
 * 在主框架之外显示
 */
const frameOut = [
  // 登录
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/index.vue')
  }
]

/**
 * 错误页面
 */
const errorPage = [
  {
    path: '*',
    name: '404',
    component: () => import('@/views/error/404.vue')
  }
]

// 重新组织后导出
export default [
  ...frameIn,
  ...frameOut,
  ...errorPage
]
