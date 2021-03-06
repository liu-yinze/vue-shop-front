import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login'
import Home from '@/components/home.vue'
import HomeCompont from '@/components/tabbar/HomeContent.vue'
import MemberCompont from './../components/tabbar/MemberContent.vue'
import SearchCompont from './../components/tabbar/Search.vue'
import ShopcarCompont from './../components/tabbar/ShopCarContent.vue'
import SettingCompont from './../components/tabbar/Setting.vue'
import NewsListCompont from './../components/news/newslist.vue'
import RegisterCompont from './../components/register.vue'
import NewsInfoCompont from './../components/news/newsinfo.vue'
import PhotoListCompont from './../components/photos/photoList.vue'
import PhotoInfoCompont from './../components/photos/photoinfo.vue'
import GoodsListCompont from './../components/goods/goodslist.vue'
import GoodsInfoCompont from './../components/goods/goodsinfo.vue'
Vue.use(Router)

var homeRouter = {
  path: '/home',
  component: Home,
  children: [{
      path: 'home',
      component: HomeCompont
    },
    {
      path: 'member',
      component: MemberCompont
    },
    {
      path: 'shopcar',
      component: ShopcarCompont
    },
    {
      path: 'search',
      component: SearchCompont
    },
    {
      path: 'newslist',
      component: NewsListCompont
    }, {
      path: '',
      redirect: 'home'
    },
    {
      path: 'setting',
      component: SettingCompont
    }, {
      path: 'newslist/:id',
      component: NewsInfoCompont
    }, {
      path: 'photolist',
      component: PhotoListCompont
    }, {
      path: 'photoInfo/:id',
      component: PhotoInfoCompont
    },{
      path:'goodslist',
      component:GoodsListCompont
    },{
      path:'goodsInfo/:id',
      component:GoodsInfoCompont,
      name:'goodsinfo'
    }
  ]
};

export default new Router({
  routes: [{
    path: '/login',
    component: login
  }, {
    path: '/',
    redirect: '/login'
  }, homeRouter, {
    path: '/register',
    component: RegisterCompont
  }],
  linkActiveClass: 'mui-active' //覆盖默认路由高亮的类
})
