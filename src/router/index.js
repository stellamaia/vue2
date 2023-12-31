import Vue from 'vue'
import VueRouter from 'vue-router'
import TarefasView from '../views/TarefasView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Tarefas',
    component: TarefasView
  },
  {
    path: '/sobre',
    name: 'Sobre',
    component: () => import('../views/SobreView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
