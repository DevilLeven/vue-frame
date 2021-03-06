


import VueRouter from 'vue-router';
const Route=[{
  path:"/",
  name:"首页",
  component:require("./pages/home.vue"),
  "children":[
    {
      path:"/chart",
      name:"图表",
      component:require("./pages/chart.vue"),
      meta:{
        auth:["chart"]
      }
    },
    {
      path:"/email",
      name:"email",
      component:require("./pages/about.vue")
    }
    ,
    {
      path:"/user",
      name:"user",
      component:require("./pages/user1.vue")
    }
    ,
    {
      path:"/notification",
      name:"notification",
      component:require("./pages/notification.vue")
    }
  ]
},
  {
    path:"/login",
    name:"登录",
    component:require("./pages/login.vue"),
    meta:{
      auth: false
    }
  },
  {
    path:"/404",
    name:"def",
    component:require("./pages/about.vue")
  }

  ];
const routerOBJ = new VueRouter({
  mode: 'hash',
  base: __dirname,
  routes:Route
});

//const  Route=registerRoute(Navconfig);
export default routerOBJ;
