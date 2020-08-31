import Vue from 'vue'
import vueRouter from 'vue-router'
Vue.use(vueRouter)

const User=()=> import ('./views/User.vue')
const Home=()=> import ('./views/Home.vue')
const Find=()=> import ('./views/Find.vue')
const Cart=()=> import ('./views/Cart.vue')
const Detail=()=> import('./views/Detail.vue')
const Login=()=> import('./views/Login.vue')
const Reg=()=> import('./views/reg.vue')
const router=new vueRouter({
    mode:'hash',
    routes:[
        {path:'/home' ,component:Home},
        {path:'/find' ,component:Find},
        {path:'/cart' ,component:Cart},
        {path:'/user' ,component:User},
        {path:'/detail/:id',component:Detail},
        {path:'/login',component:Login},
        {path:'/reg',component:Reg},
        {path:'/*',redirect:"/home"}
    ],
    
})
router.beforeEach((to,from,next) => {
    if(to.path=='/user'||to.path=='/cart'){
        let token=localStorage.getItem('token')
        if(token){
            next()
        }else{
            next('/login')
        }
    }else{
        next()
    }
})

export default router