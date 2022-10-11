import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'home',
    component: HomeView,
    children: [
      
      {
        path: '/senhas',
        name: 'senhas',
        component: () => import(/* webpackChunkName: "about" */ '../views/SenhasView.vue')
      },
      {
        path: '/usuario',
        name: 'usuario',
        component: () => import(/* webpackChunkName: "about" */ '../views/UsuarioView.vue')
      },
     
    ]
  },
  {
    path: '/',
    name: 'login',
    
    component: () => import(/* webpackChunkName: "about" */ '../views/LoginView.vue')
  },
  {
    path: '/register',
    name: 'register',
    
    component: () => import(/* webpackChunkName: "about" */ '../views/RegisterView.vue')
  }, 
  
]

const router = new VueRouter({
  routes
})
router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('token')
   
    if (token || to.name === 'login' || to.name ==='register') {
      next()
    } else {
      next({name: 'login'})
    }
  }
);

  
export default router