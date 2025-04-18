<!-- <template>
    <WeatherLayout>
        <v-row>
       <v-col><h1>Weather Cities</h1></v-col>
    </v-row>
    </WeatherLayout>
  </template>
  
<script>
import WeatherLayout from "@/components/WeatherLayout.vue";


export default {
    name: "WeatherCities",
  components: {
    WeatherLayout,
  },
};
</script> -->

<template>
    <v-container>
      <!-- ฟอร์มกรอกชื่อเมือง -->
      <v-text-field
        v-model="city"
        label="กรอกชื่อเมือง"
        prepend-icon="mdi-city"
        @keyup.enter="getWeather"
      />
      <v-btn color="primary" @click="getWeather">ดูสภาพอากาศ</v-btn>
  
      <!-- ถ้ามีข้อมูลแสดงผล -->
      <v-card v-if="weather" class="mt-4">
        <v-card-title>{{ weather.name }}</v-card-title>
        <v-card-subtitle>{{ weather.weather[0].description }}</v-card-subtitle>
        <v-card-text>
          <div>🌡 อุณหภูมิ: {{ weather.main.temp }}°C</div>
          <div>💧 ความชื้น: {{ weather.main.humidity }}%</div>
          <div>💨 ลม: {{ weather.wind.speed }} m/s</div>
          <img
            :src="`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`"
            alt="weather icon"
          />
        </v-card-text>
      </v-card>
  
      <!-- ถ้าไม่พบข้อมูล -->
      <v-alert v-if="errorMessage" type="error" class="mt-4">{{ errorMessage }}</v-alert>
    </v-container>
  </template>
  
  <script>
  import { ref } from 'vue'
  
  export default {
    name: 'WeatherCities',
    setup() {
      const city = ref('')
      const weather = ref(null)
      const errorMessage = ref(null)
      const apiKey = '2b13253ccb418d9f2420a6bc1344b41d' // 👉 ใส่ API Key ของคุณที่นี่
  
      // ฟังก์ชันเพื่อดึงข้อมูลสภาพอากาศ
      const getWeather = async () => {
        if (!city.value) {
          errorMessage.value = 'กรุณากรอกชื่อเมือง!'
          return
        }
  
        try {
          const res = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&appid=${apiKey}&units=metric&lang=th`
          )
          const data = await res.json()
  
          if (data.cod !== 200) {
            errorMessage.value = `ไม่พบข้อมูลสภาพอากาศของเมืองนี้: ${data.message}`
            weather.value = null
          } else {
            weather.value = data
            errorMessage.value = null
          }
        } catch (err) {
          console.error('เกิดข้อผิดพลาด:', err)
          errorMessage.value = 'เกิดข้อผิดพลาดในการเชื่อมต่อ API'
          weather.value = null
        }
      }
  
      return { city, weather, errorMessage, getWeather }
    }
  }
  </script>
  
  <style scoped>
  /* สามารถปรับแต่งสไตล์ได้ที่นี่ */
  </style>
  