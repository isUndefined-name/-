import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'admin',
    component: () => import('../admin'),
    redirect:'/home',
    children:[
      {
        path: '/home',
        name: 'home',
        alias:'首页',
        component: () => import('../views/home/home'),
      },
      {
        path: '/goods',
        name: 'goods',
        alias:'分类',
        redirect:'/recommend',
        component: () => import('../views/goods/goods'),
        children:[
          {
            path:'/recommend',
            name:'recommend',
            alias:'推荐分类',
            component:()=>import('../views/goods/recommend')
          },
          {
            path:'/supermarket',
            name:'supermarket',
            alias:'京东超市',
            component:()=>import('../views/goods/supermarket')
          },
          {
            path:'/man',
            name:'man',
            alias:'男装',
            component:()=>import('../views/goods/man')
          },
          {
            path:'/woman',
            name:'woman',
            alias:'女装',
            component:()=>import('../views/goods/woman')
          },
          {
            path:'/manshoes',
            name:'manshoes',
            alias:'男鞋',
            component:()=>import('../views/goods/manshoes')
          },
          {
            path:'/womanshoes',
            name:'womanshoes',
            alias:'女鞋',
            component:()=>import('../views/goods/womanshoes')
          },
        ]
      },
      {
        path: '/shop',
        name: 'shop',
        alias:'购物车',
        component: () => import('../views/shop/shop'),
      },
      {
        path: '/mine',
        name: 'mine',
        alias:'我的',
        component: () => import('../views/mine/mine'),
      },
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
