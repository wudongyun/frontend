import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
// import Layout from '@/layout'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'/'el-icon-x' the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: '/',
    redirect: '/login',
    hidden: true
  },
  {
    name: 'index',
    path: '/index',
    hidden: true,
    component: () => import('@/views/index/index'),
    redirect: '/index/frontpage',
    children: [
      {
        name: 'frontpage',
        path: '/index/frontpage',
        component: () => import('@/views/index/frontpage')
      },
      {
        name: 'help',
        path: '/index/help',
        component: () => import('@/views/index/help')
      },
      {
        name: 'connect',
        path: '/index/connect',
        component: () => import('@/views/index/connect')
      },
      {
        name: 'desc',
        path: '/index/desc',
        component: () => import('@/views/index/desc')
      }
    ]
  },
  {
    name: 'user',
    path: '/user',
    component: () => import('@/views/user/index'),
    redirect: '/user/contribution',
    children: [
      {
        name: 'contribution',
        path: '/user/contribution',
        component: () => import('@/views/user/contribution')
      },
      {
        name: 'information',
        path: '/user/information',
        component: () => import('@/views/user/information')
      },
      {
        name: 'table',
        path: '/user/table',
        component: () => import('@/views/user/table')
      },
      {
        name: 'des',
        path: '/user/des',
        component: () => import('@/views/user/des')
      },
      {
        name: 'change',
        path: '/user/change',
        component: () => import('@/views/user/change')
      }
    ]
  },
  {
    name: 'review',
    path: '/review',
    component: () => import('@/views/review/index'),
    redirect: '/review/table',
    children: [
      {
        name: 'table',
        path: '/review/table',
        component: () => import('@/views/review/table')
      },
      {
        name: 'information',
        path: '/review/information',
        component: () => import('@/views/review/information')
      },
      {
        name: 'des',
        path: '/review/des',
        component: () => import('@/views/review/des')
      },
      {
        name: 'comment',
        path: '/review/comment',
        component: () => import('@/views/review/comment')
      }
    ]
  },
  {
    name: 'admin',
    path: '/admin',
    component: () => import('@/views/admin/index'),
    redirect: '/admin/frontpage',
    children: [
      {
        name: 'frontpage',
        path: '/admin/frontpage',
        component: () => import('@/views/admin/frontpage')
      },
      {
        name: 'record',
        path: '/admin/record',
        component: () => import('@/views/admin/record')
      },
      {
        name: 'schedule',
        path: '/admin/schedule',
        component: () => import('@/views/admin/schedule')
      },
      {
        name: 'consultant',
        path: '/admin/consultant',
        component: () => import('@/views/admin/consultant')
      },
      {
        name: 'helper',
        path: '/admin/helper',
        component: () => import('@/views/admin/helper')
      },
      {
        name: 'visitor',
        path: '/admin/visitor',
        component: () => import('@/views/admin/visitor')
      }
    ]
  },
  {
    path: '/login',
    component: () => import('@/views/login/login'),
    hidden: true
  },
  {
    path: '/404',
    component: () => import('@/views/error'),
    hidden: true
  },
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
