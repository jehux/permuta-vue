import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* login */ '../views/Login.vue')
  },
  {
    path: '/registro',
    name: 'Registro',
    component: () => import( '../views/Registro.vue')
  },
  {
    path: '/agregaramigos',
    name: 'AgregarAmigos',
    component: () => import('../views/AgregarAmigos.vue')
  },
  {
    path: '/registroinvit',
    name: 'RegistroInvit',
    component: () => import('../views/RegistroInvit.vue')
  },
  {
    path: '/visualizacionadmin',
    name: 'VisualizacionAdmin',
    component: () => import('../views/VisualizacionAdmin.vue')
  },
  {
    path: '/statusinvit',
    name: 'StatusInvit',
    component: () => import('../views/StatusInvit.vue')
  },
  {
    path: '/detalles',
    name: 'Detalles',
    component: () => import('../views/Detalles.vue')
  },
  {
    path: '/especificaciones',
    name: 'Especificaciones',
    component: () => import('../views/Especificaciones.vue')
  },
  {
    path: '/ingresoinvit',
    name: 'IngresoInvit',
    component: () => import('../views/IngresoInvit.vue')
  },
  {
    path: '/invitacion',
    name: 'Invitacion',
    component: () => import('../views/Invitacion.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
