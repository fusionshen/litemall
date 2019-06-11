/** When your routing table is too long, you can split it into small modules **/

import Layout from '@/layout'

const configRouter =
{
  path: '/config',
  component: Layout,
  redirect: 'noRedirect',
  alwaysShow: true,
  name: 'configManage',
  meta: {
    title: '配置管理',
    icon: 'chart'
  },
  children: [
    {
      path: 'mall',
      component: () => import('@/views/config/mall'),
      name: 'configMall',
      meta: {
        perms: ['GET /admin/config/mall', 'POST /admin/config/mall'],
        title: '商场配置',
        noCache: true
      }
    },
    {
      path: 'express',
      component: () => import('@/views/config/express'),
      name: 'configExpress',
      meta: {
        perms: ['GET /admin/config/express', 'POST /admin/config/express'],
        title: '运费配置',
        noCache: true
      }
    },
    {
      path: 'order',
      component: () => import('@/views/config/order'),
      name: 'configOrder',
      meta: {
        perms: ['GET /admin/config/order', 'POST /admin/config/order'],
        title: '订单配置',
        noCache: true
      }
    },
    {
      path: 'wx',
      component: () => import('@/views/config/wx'),
      name: 'configWx',
      meta: {
        perms: ['GET /admin/config/wx', 'POST /admin/config/wx'],
        title: '小程序配置',
        noCache: true
      }
    }
  ]
}

export default configRouter
