import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'
import Login from '../views/Login'
import Hospital from '../views/Hospital'
import Exames from '../views/Exames'
import Questionario from '../views/Questionario'

Vue.use(VueRouter)

const routes = [

  {
    path: '/',
    name: 'hospital',
    component: Hospital
  },

  {
    path: '/questionario',
    name: 'questionario',
    component: Questionario
  },

  {
    path: '/exames',
    name: 'exames',
    component: Exames
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
