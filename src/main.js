import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import Fastclick from 'fastclick'
import {
  Button,
  Search,
  Swipe,
  SwipeItem,
  Lazyload,
  Grid,
  GridItem,
  Image,
  Pagination,
  Card,
  SubmitBar,
  NavBar,
  Sidebar,
  Skeleton,
  SidebarItem,
  Checkbox,
  CheckboxGroup,
  Field,
  Cell,
  Toast,
  CellGroup
} from 'vant';

Vue.use(Cell).use(CellGroup);
Vue.use(Field);
Vue.use(Checkbox).use(CheckboxGroup);
Vue.use(SubmitBar);
Vue.use(Sidebar);
Vue.use(Toast);
Vue.use(Skeleton);
Vue.use(SidebarItem);
Vue.use(Button);
Vue.use(NavBar);
Vue.use(Card);
Vue.use(Search);
Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(Lazyload);
Vue.use(Image);
// 使用vant分页
Vue.use(Pagination);
Vue.use(Grid).use(GridItem);
Vue.prototype.$http = Axios;
Vue.config.productionTip = false
//解决移动端300ms延迟
Fastclick.attach(document.body);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
