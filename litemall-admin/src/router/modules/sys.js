/** When your routing table is too long, you can split it into small modules **/

import Layout from '@/layout'

const sysRouter =
{
  path: '/sys',
  component: Layout,
  redirect: 'noRedirect',
  alwaysShow: true,
  name: 'sysManage',
  meta: {
    title: '系统管理',
    icon: 'chart'
  },
  children: [
    {
      path: 'admin',
      component: () => import('@/views/sys/admin'),
      name: 'admin',
      meta: {
        perms: ['GET /admin/admin/list', 'POST /admin/admin/create', 'POST /admin/admin/update', 'POST /admin/admin/delete'],
        title: '管理员',
        noCache: true
      }
    },
    {
      path: 'log',
      component: () => import('@/views/sys/log'),
      name: 'log',
      meta: {
        perms: ['GET /admin/log/list'],
        title: '操作日志',
        noCache: true
      }
    },
    {
      path: 'role',
      component: () => import('@/views/sys/role'),
      name: 'role',
      meta: {
        perms: ['GET /admin/role/list', 'POST /admin/role/create', 'POST /admin/role/update', 'POST /admin/role/delete', 'GET /admin/role/permissions', 'POST /admin/role/permissions'],
        title: '角色管理',
        noCache: true
      }
    },
    {
      path: 'os',
      component: () => import('@/views/sys/os'),
      name: 'os',
      meta: {
        perms: ['GET /admin/storage/list', 'POST /admin/storage/create', 'POST /admin/storage/update', 'POST /admin/storage/delete'],
        title: '对象存储',
        noCache: true
      }
    }
  ]
}

export default sysRouter
