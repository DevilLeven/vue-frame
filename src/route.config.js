



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
        auth:true
      }
    },
    {
      path:"/email",
      name:"email",
      component:require("./pages/about.vue")
    }
  ]
},
  {
    path:"/login",
    name:"登录",
    component:require("./pages/login.vue")
  }
  ];

//const  Route=registerRoute(Navconfig);
export default Route;
