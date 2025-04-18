// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import GetStart from '@/components/GetStart.vue'
import WheatherDashboard from '@/views/WheatherDashboard.vue'
import Cities from '@/views/WheatherCities.vue'
import Map from '@/views/WheatherMap.vue'
import Setting from '@/views/WhatherSettings.vue'

const routes = [
  { path: '/', name: 'Welcome', component: GetStart },
  { path: '/weather-dashboard', name: 'WeatherDashboard', component: WheatherDashboard },
  { path: '/weather-cities', name: 'WeatherCities', component: Cities },
  { path: '/weather-map', name: 'WeatherMap', component: Map },
  { path: '/weather-setting', name: 'WeatherSetting', component: Setting },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
