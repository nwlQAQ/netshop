import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
// const index= ()=>import ("../pages/index");
const login = () => import("../pages/login")
const reg = () => import("../pages/reg")
const index = () => import("../pages/index")
const home = () => import("../pages/home")
const menu = () => import("../pages/menu")
const shopping = () => import("../pages/shopping")
const me = () => import("../pages/me")
const baby = () => import("../pages/baby")
const makeup = () => import("../pages/makeup")
const global = () => import("../pages/global")
const life = () => import("../pages/life")
const food = () => import("../pages/food")
const detail = () => import("../pages/detail")
const proimg = () => import("../pages/proimg")
const comment = () => import("../pages/comment")






export default new Router({
  routes: [
       {
         path:"/login",
         component:login,
       },
       {
        path:"/detail/:id",
        component:detail,
        // children:[
        //   {
        //     path:"proimg",
        //     component:proimg
        //   }, 
        //   {
        //     path:"comment",
        //     component:comment
        //   }, 
        //   {
        //     path:"",
        //     redirect:"proimg"
        //   },
        // ]
      },
       {
        path:"/reg",
        component:reg,
      },
      {
        path:"/index",
        component:index,
        children:[
          {
            path:"home",
            component:home,
          },
          {
            path:"me",
            component:me,
          },
          {
            path:"shopping",
            component:shopping,
          },
          {
            path:"menu",
            component:menu,
            children:[
              {
              path:"baby",
              component:baby
            }, 
            {
              path:"food",
              component:food
            }, 
            {
              path:"global",
              component:global
            }, 
            {
              path:"life",
              component:life
            }, 
            {
              path:"makeup",
              component:makeup
            }, 
            {
              path:"",
              redirect:"baby"
            },
            ]
          },
          {
            path:"",
            redirect:"home"
          },
        ]
      },
       {
         path:"*",
         redirect:"/login"
       }
  ]
})
