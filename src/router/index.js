import { createRouter, createWebHashHistory } from 'vue-router'
import App from '@/App.vue';
import Players from "@/views/Players.vue";
const routes = [
  {
    path: '/getplayers',
    name: 'Players',
    component: Players,
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
