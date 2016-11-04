import Vue from 'vue'
import App from './App'
import  vueResource from "vue-resource";
import router from './route.config.js';
import VueRouter from 'vue-router';
import until from "./until";
import Element from 'element-ui';
import 'element-ui/lib/theme-default/index.css'
import  Auth from "@websanova/vue-auth";
Vue.use(Element);
Vue.use(VueRouter);
Vue.use(vueResource);
Vue.http.options.emulateJSON = true;



router.beforeEach((to, from, next) => {
 // console.log(to);
  next();
});
Vue.use(Auth,{
  router: router,
  http: Vue.http
});
new Vue({
  render: h => h(App),
  router
}).$mount('#app');
//请求拦截器
Vue.http.interceptors.push((request, next)  => {

  console.log(request);
//使用es5写法 方便使用this==Vue实例化组件
  next(function (response) {
    response.body=eval("(" + response.body + ")")
    console.log(response);
    //通过until的方法进行通讯
    const fn=until.onuserGetCallback();
    if(typeof  fn=="function"){
     // fn({mm:"21312"});
    }
  })

});
