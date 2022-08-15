import Vue from 'vue'
import App from './App.vue'

//注册全局组件--三级联动
import TypeNav from '@/components/TypeNav';
import Carousel from '@/components/Carousel';
import Pagination from '@/components/Pagination';
import { Button, MessageBox, Form, FormItem ,Input } from 'element-ui';

//传两个参数
Vue.component(TypeNav.name, TypeNav);
Vue.component(Carousel.name, Carousel);
Vue.component(Pagination.name, Pagination);

Vue.component(Button.name, Button);
Vue.component(Form.name, Form);
Vue.component(FormItem.name, FormItem);
Vue.component(Input.name, Input);

//引入饿了么的MessageBox
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;

//引入路由
import router from '@/router'

//引入仓库
import store from '@/store'

import { reqCategoryList } from '@/api';
reqCategoryList();

Vue.config.productionTip = false

import '@/mock/mockServe';
import 'swiper/css/swiper.css'

//统一引入
import * as API from '@/api'
import jiazai from '@/assets/louding.gif';
import VueLazyload from 'vue-lazyload';



Vue.use(VueLazyload, {
  loading: jiazai
});

import myPlugins from "@/plugins/myplugins"
Vue.use(myPlugins)



new Vue({
  render: h => h(App),
  beforeCreate() {
    //全局事件总线
    Vue.prototype.$bus = this;
    Vue.prototype.$API = API;

  },
  ///注册路由
  router,
  //注册仓库
  store
}).$mount('#app')
