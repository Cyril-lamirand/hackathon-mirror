import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/views/Home.vue'
import MedicalMonitoring from "@/views/MedicalMonitoring"
import Calendar from "@/views/Calendar"
import Weather from "@/views/Weather"
import Setting from "@/views/Setting"
import Note from "@/views/Note"

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },

  {
    path: '/Medical',
    name: 'Medical',
    component: MedicalMonitoring
  },

  {
    path: '/Calendar',
    name: 'Calendar',
    component: Calendar
  },

  {
    path: '/Notes',
    name: 'Notes',
    component: Note
  },

  {
    path: '/Settings',
    name: 'Settings',
    component: Setting
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
