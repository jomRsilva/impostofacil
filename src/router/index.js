import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Formulario from '../views/Formulario.vue'
import Conclusao from '../views/Conclusao.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/formulario',
    name: 'formulario',
    component: Formulario
  },
  {
    path: '/conclusao',
    name: 'conclusao',
    component: Conclusao
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
