import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/views/Home.vue'
import MedicalMonitoring from "@/views/MedicalMonitoring"
import Calendar from "@/views/Calendar"
import Weather from "@/views/Weather"
import Messenger from "@/views/Messenger"
import Mirror from "@/views/Mirror"
import Webcam from "@/views/Webcam"

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
    path: '/Webcam',
    name: 'Webcam',
    component: Webcam
  },


  {
    path: '/Calendar',
    name: 'Calendar',
    component: Calendar
  },

  {
    path: '/Mirror',
    name: 'Mirror',
    component: Mirror
  },

  {
    path: '/Messenger',
    name: 'Messenger',
    component: Messenger
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
