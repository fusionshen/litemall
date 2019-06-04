// 1.import...from...的from命令后面可以跟很多路径格式，若只给出vue，axios这样的包名，则会自动到node_modules中加载；
// 若给出相对路径及文件前缀，则到指定位置寻找。
// 2.可以加载各种各样的文件：.js、.vue、.less等等。
// 3.可以省略掉from直接引入。

import Vue from 'vue' // import Vue from "../node_modules/vue/dist/vue.js";

import Cookies from 'js-cookie' // 引入第三方插件

import 'normalize.css/normalize.css' // A modern alternative to CSS resets

import Element from 'element-ui'
import './styles/element-variables.scss'

import '@/styles/index.scss' // global css  build/webpack.conf.js '@': resolve('src')

import App from './App' // import App from './App.vue';
import store from './store' // vuex数据源
import router from './router' // 引入工具类 默认./router/index.js

import './icons' // icon
import './permission' // permission control
import './utils/error-log' // error log

import * as filters from './filters' // global filters

import permission from '@/directive/permission/index.js' // 权限判断指令

Vue.use(Element, {
  size: Cookies.get('size') || 'medium' // set element-ui default size
})

Vue.directive('permission', permission)

// register global utility filters.
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
