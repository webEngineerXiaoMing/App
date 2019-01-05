import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/login',
      name: 'App',
      component: () => import('../App')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../pages/login')
    },
    {
      path: '/header',
      name: 'header',
      component: () => import('../pages/fristHeader'),
      children: [
        {
          path: '',
          name: 'echarts',
          component: () => import('../pages/echarts')
        },
        {
          path: '/header/qrcode',
          name: 'qrcode',
          component: () => import('../pages/qrcode')
        }
      ]
    }
  ]
})
