



const Route=[{
  path:"/",
  name:"首页",
  component:require("./pages/home.vue"),
  "children":[
    {
      path:"/chart",
      name:"图表",
      component:require("./pages/chart.vue")
    },
    {
      path:"/email",
      name:"email",
      component:require("./pages/about.vue")
    }
  ]
}
  ];

//const  Route=registerRoute(Navconfig);
export default Route;
