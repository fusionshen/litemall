/** When your routing table is too long, you can split it into small modules **/

import Layout from '@/layout'

const promotionRouter = {
  path: '/promotion',
  component: Layout,
  redirect: 'noRedirect',
  alwaysShow: true,
  name: 'promotionManage',
  meta: {
    title: '推广管理',
    icon: 'chart'
  },
  children: [
    {
      path: 'ad',
      component: () => import('@/views/promotion/ad'),
      name: 'ad',
      meta: {
        perms: ['GET /admin/ad/list', 'POST /admin/ad/create', 'GET /admin/ad/read', 'POST /admin/ad/update', 'POST /admin/ad/delete'],
        title: '广告管理',
        noCache: true
      }
    },
    {
      path: 'coupon',
      component: () => import('@/views/promotion/coupon'),
      name: 'coupon',
      meta: {
        perms: ['GET /admin/coupon/list', 'POST /admin/coupon/create', 'POST /admin/coupon/update', 'POST /admin/coupon/delete'],
        title: '优惠券管理',
        noCache: true
      }
    },
    {
      path: 'couponDetail',
      component: () => import('@/views/promotion/couponDetail'),
      name: 'couponDetail',
      meta: {
        perms: ['GET /admin/coupon/list', 'GET /admin/coupon/listuser'],
        title: '优惠券详情',
        noCache: true
      },
      hidden: true
    },
    {
      path: 'topic',
      component: () => import('@/views/promotion/topic'),
      name: 'topic',
      meta: {
        perms: ['GET /admin/topic/list', 'POST /admin/topic/create', 'GET /admin/topic/read', 'POST /admin/topic/update', 'POST /admin/topic/delete'],
        title: '专题管理',
        noCache: true
      }
    },
    {
      path: 'topic-create',
      component: () => import('@/views/promotion/topicCreate'),
      name: 'topicCreate',
      meta: {
        perms: ['POST /admin/topic/create'],
        title: '专题创建',
        noCache: true
      },
      hidden: true
    },
    {
      path: 'topic-edit',
      component: () => import('@/views/promotion/topicEdit'),
      name: 'topicEdit',
      meta: {
        perms: ['GET /admin/topic/read', 'POST /admin/topic/update'],
        title: '专题编辑',
        noCache: true
      },
      hidden: true
    },
    {
      path: 'groupon-rule',
      component: () => import('@/views/promotion/grouponRule'),
      name: 'grouponRule',
      meta: {
        perms: ['GET /admin/groupon/list', 'POST /admin/groupon/create', 'POST /admin/groupon/update', 'POST /admin/groupon/delete'],
        title: '团购规则',
        noCache: true
      }
    },
    {
      path: 'groupon-activity',
      component: () => import('@/views/promotion/grouponActivity'),
      name: 'grouponActivity',
      meta: {
        perms: ['GET /admin/groupon/listRecord'],
        title: '团购活动',
        noCache: true
      }
    }
  ]
}

export default promotionRouter
