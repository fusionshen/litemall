/** When your routing table is too long, you can split it into small modules **/

import Layout from '@/layout'

const statRouter =
{
  path: '/stat',
  component: Layout,
  redirect: 'noRedirect',
  alwaysShow: true,
  name: 'statManage',
  meta: {
    title: '统计报表',
    icon: 'chart'
  },
  children: [
    {
      path: 'user',
      component: () => import('@/views/stat/user'),
      name: 'statUser',
      meta: {
        perms: ['GET /admin/stat/user'],
        title: '用户统计',
        noCache: true
      }
    },
    {
      path: 'order',
      component: () => import('@/views/stat/order'),
      name: 'statOrder',
      meta: {
        perms: ['GET /admin/stat/order'],
        title: '订单统计',
        noCache: true
      }
    },
    {
      path: 'goods',
      component: () => import('@/views/stat/goods'),
      name: 'statGoods',
      meta: {
        perms: ['GET /admin/stat/goods'],
        title: '商品统计',
        noCache: true
      }
    }
  ]
}

export default statRouter
