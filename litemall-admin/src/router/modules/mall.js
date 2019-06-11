/** When your routing table is too long, you can split it into small modules **/

import Layout from '@/layout'

const mallRouter = {
  path: '/mall',
  component: Layout,
  redirect: 'noRedirect',
  alwaysShow: true,
  name: 'mallManage',
  meta: {
    title: '商场管理',
    icon: 'chart'
  },
  children: [
    {
      path: 'region',
      component: () => import('@/views/mall/region'),
      name: 'region',
      meta: {
        title: '行政区域',
        noCache: true
      }
    },
    {
      path: 'brand',
      component: () => import('@/views/mall/brand'),
      name: 'brand',
      meta: {
        perms: ['GET /admin/brand/list', 'POST /admin/brand/create', 'GET /admin/brand/read', 'POST /admin/brand/update', 'POST /admin/brand/delete'],
        title: '品牌制造商',
        noCache: true
      }
    },
    {
      path: 'category',
      component: () => import('@/views/mall/category'),
      name: 'category',
      meta: {
        perms: ['GET /admin/category/list', 'POST /admin/category/create', 'GET /admin/category/read', 'POST /admin/category/update', 'POST /admin/category/delete'],
        title: '商品类目',
        noCache: true
      }
    },
    {
      path: 'order',
      component: () => import('@/views/mall/order'),
      name: 'order',
      meta: {
        perms: ['GET /admin/order/list', 'GET /admin/order/detail', 'POST /admin/order/ordership', 'POST /admin/order/orderrefund', 'POST /admin/order/orderreply'],
        title: '订单管理',
        noCache: true
      }
    },
    {
      path: 'issue',
      component: () => import('@/views/mall/issue'),
      name: 'issue',
      meta: {
        perms: ['GET /admin/issue/list', 'POST /admin/issue/create', 'GET /admin/issue/read', 'POST /admin/issue/update', 'POST /admin/issue/delete'],
        title: '通用问题',
        noCache: true
      }
    },
    {
      path: 'keyword',
      component: () => import('@/views/mall/keyword'),
      name: 'keyword',
      meta: {
        perms: ['GET /admin/keyword/list', 'POST /admin/keyword/create', 'GET /admin/keyword/read', 'POST /admin/keyword/update', 'POST /admin/keyword/delete'],
        title: '关键词',
        noCache: true
      }
    }
  ]
}

export default mallRouter
