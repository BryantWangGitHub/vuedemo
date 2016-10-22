/**
 * Created by admin on 16/10/20.
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import Hello from './components/Hello.vue'
import Test from './components/Test.vue'
import VueResouceDemo from './components/VueResouceDemo.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    { path: '/home', component: Hello },
    { path: '/test', component: Test },
    { path: '/vueresouce', component: VueResouceDemo }
  ]
})

export default router
