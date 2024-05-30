import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/views/Login.vue'
import Uploadjpg from '@/components/Uploadjpg.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: '/login',
      component: Login
    },
    {
      path: '/upload',
      component: Uploadjpg
    }
  ]
});

export default router;