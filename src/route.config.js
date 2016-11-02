



const Route=[{
  path:"/",
  name:"首页",
  component:require("./pages/home.vue")
},
  {
    path:"/about",
    name:"关于",
    component:require("./pages/about.vue"),
    meta:{
      "power":{
        "A":{
          "add":true
        }
      }
    }
  },
  {
    path:"/user",
    name:"user",
    component:require("./pages/user.vue"),
    meta:{
      "power":{
        "A":{
          "add":true
        }
      }
    },
    "children":[
      {
        path:"user1",
        component:require("./pages/user1.vue"),
        meta:{
          "power":{
            "A":{
              "add":true
            }
          }
        }
      }
    ]
  }];

//const  Route=registerRoute(Navconfig);
export default Route;
