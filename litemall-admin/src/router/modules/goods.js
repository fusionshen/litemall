/** When your routing table is too long, you can split it into small modules **/

import Layout from '@/layout'

const goodsRouter = {
  path: '/goods',
  component: Layout,
  redirect: 'noRedirect',
  alwaysShow: true,
  name: 'goodsManage',
  meta: {
    title: '商品管理',
    icon: 'chart'
  },
  children: [
    {
      path: 'list',
      component: () => import('@/views/goods/list'),
      name: 'goodsList',
      meta: {
        perms: ['GET /admin/goods/list', 'POST /admin/goods/delete'],
        title: '商品列表',
        noCache: true
      }
    },
    {
      path: 'create',
      component: () => import('@/views/goods/create'),
      name: 'goodsCreate',
      meta: {
        perms: ['POST /admin/goods/create'],
        title: '商品上架',
        noCache: true
      }
    },
    {
      path: 'edit',
      component: () => import('@/views/goods/edit'),
      name: 'goodsEdit',
      meta: {
        perms: ['GET /admin/goods/detail', 'POST /admin/goods/update', 'POST /admin/goods/catAndBrand'],
        title: '商品编辑',
        noCache: true
      },
      hidden: true
    },
    {
      path: 'comment',
      component: () => import('@/views/goods/comment'),
      name: 'goodsComment',
      meta: {
        perms: ['GET /admin/comment/list', 'POST /admin/comment/delete'],
        title: '商品评论',
        noCache: true
      }
    }
  ]
}

export default goodsRouter
