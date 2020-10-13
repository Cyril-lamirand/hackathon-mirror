import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import MedicalMonitoring from "@/views/MedicalMonitoring"
import Calendar from "@/views/Calendar"
import Weather from "@/views/Weather"

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },

  {
    path: '/MedicalMonitoring',
    name: 'MedicalMonitoring',
    component: MedicalMonitoring
  },

  {
    path: '/Calendar',
    name: 'Calendar',
    component: Calendar
  },

  {
    path: '/Weather',
    name: 'Weather',
    component: Weather
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
