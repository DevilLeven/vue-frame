import Vue from 'vue'
import App from './App'
import  vueResource from "vue-resource";
import configRouter from './route.config';
import VueRouter from 'vue-router';
import until from "./until";
import Element from 'element-ui';
import 'element-ui/lib/theme-default/index.css'
import  Auth from "@websanova/vue-auth";
Vue.use(Element);
Vue.use(VueRouter);
Vue.use(vueResource);
Vue.http.options.emulateJSON = true;
const router = new VueRouter({
  mode: 'hash',
  base: __dirname,
  routes:configRouter
});

 new Vue({
   render: h => h(App),
   router
}).$mount('#app');
router.beforeEach((to, from, next) => {
 // console.log(to);
  next();
});
Vue.use(Auth,{
  router: router,
  http: Vue.http
});
//请求拦截器
Vue.http.interceptors.push((request, next)  => {

  console.log(request);
//使用es5写法 方便使用this==Vue实例化组件
  next(function (response) {
    console.log(response.body);
    //通过until的方法进行通讯
    const fn=until.onuserGetCallback();
    if(typeof  fn=="function"){
     // fn({mm:"21312"});
    }
  })

});
