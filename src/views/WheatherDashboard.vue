<template>
  <WeatherLayout>
    <v-row>
      <v-col cols="7">
        <v-text-field
          class="mt-10 ml-n12"
          label="Search for cities"
          variant="solo-filled"
          rounded
          style="border-radius: 12px"
          v-model="city"
          @keyup.enter="fetchWeather"
        ></v-text-field>

        <v-row>
          <v-col cols="6">
            <h1 class="mt-3" style="font-size: 50px">{{ weather.name }}</h1>
            <p>Humidity: {{ weather.main.humidity }}%</p>
            <h1 class="mt-12" style="font-size: 40px">
              {{ weather.main.temp }}°
            </h1>
          </v-col>
          <v-col cols="6" class="d-flex justify-center"
            ><img
              :src="`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`"
              alt="weather icon"
              style="width: 300px; height: 300px"
          /></v-col>
        </v-row>
        <v-row class="mt-n12">
          <v-col cols="7">
            <v-card
              elevation="0"
              rounded="xl"
              class="mt-5"
              style="width: 870px; height: 200px; background-color: #f5f7fa"
              title="Today's Weather"
            >
              <v-row class="d-flex align-center mt-3">
                <v-col class="d-flex flex-column justify-center align-center">
                  <h3>api AM</h3>
                  <h2 class="mt-3">{{ weather.main.temp }}°</h2>
                </v-col>
                <v-divider :thickness="3" color="success" vertical></v-divider>
                <v-col class="d-flex flex-column justify-center align-center">
                  <h3>api AM</h3>
                  <h2 class="mt-3">{{ weather.main.temp }}°</h2>
                </v-col>
                <v-divider :thickness="3" color="success" vertical></v-divider>
                <v-col class="d-flex flex-column justify-center align-center">
                  <h3>api AM</h3>
                  <h2 class="mt-3">{{ weather.main.temp }}°</h2>
                </v-col>
                <v-divider :thickness="3" color="success" vertical></v-divider>
                <v-col class="d-flex flex-column justify-center align-center">
                  <h3>api AM</h3>
                  <h2 class="mt-3">{{ weather.main.temp }}°</h2>
                </v-col>
                <v-divider :thickness="3" color="success" vertical></v-divider>
                <v-col class="d-flex flex-column justify-center align-center">
                  <h3>api AM</h3>
                  <h2 class="mt-3">{{ weather.main.temp }}°</h2>
                </v-col>
                <v-divider :thickness="3" color="success" vertical></v-divider>
                <v-col class="d-flex flex-column justify-center align-center">
                  <h3>api AM</h3>
                  <h2 class="mt-3">{{ weather.main.temp }}°</h2>
                </v-col>
              </v-row>
            </v-card>
            <v-row>
              <v-col>
                <v-card
                  elevation="0"
                  rounded="xl"
                  class="mt-5"
                  style="width: 870px; height: 300px; background-color: #f5f7fa"
                  title="AIR CODITIONS"
                >
                  <v-row>
                    <v-col
                      class="d-flex flex-column justify-center align-center"
                    >
                      <div class="d-flex align-center">
                        <v-icon class="mr-2 mt-3" color="blue"
                          >mdi-weather-windy</v-icon
                        >
                        <h2 class="mt-3">Feels like</h2>
                      </div>
                      <h2 class="mt-3">{{ weather.main.feels_like }} °C</h2>
                    </v-col>
                    <v-col
                      class="d-flex flex-column justify-center align-center"
                    >
                      <div class="d-flex align-center">
                        <v-icon class="mr-2 mt-3" color="blue"
                          >mdi-weather-windy</v-icon
                        >
                        <h2 class="mt-3">Wind</h2>
                      </div>
                      <h2 class="mt-3">{{ weather.wind.speed }} m/s</h2>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col
                      class="d-flex flex-column justify-center align-center"
                    >
                      <div class="d-flex align-center">
                        <v-icon class="mr-2 mt-3" color="blue"
                          >mdi-thermometer-low</v-icon
                        >
                        <h2 class="mt-3">Minimum temperature </h2>
                      </div>
                      <h2 class="mt-3">{{ weather.main.temp_min }} °C</h2>
                    </v-col>
                    <v-col
                      class="d-flex flex-column justify-center align-center"
                    >
                      <div class="d-flex align-center">
                        <v-icon class="mr-2 mt-3" color="blue"
                          >mdi-thermometer-high</v-icon
                        >
                        <h2 class="mt-3"> Maximum temperature</h2>
                      </div>
                      <h2 class="mt-3">{{ weather.main.temp_max }} °C</h2>
                    </v-col>
                  </v-row>
                </v-card>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="5">
        <v-card
          elevation="0"
          rounded="xl"
          class="mt-5 ml-9"
          style="width: 600px; height: 880px; background-color: #f5f7fa"
          title="7- Day Forecast"
        >
          <v-row class="d-flex justify-center align-center mt-12">
            <h1 class="mx-10">Today</h1>
            <img
              :src="`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`"
              alt="weather icon"
              style="width: 100px; height: 100px"
              class="mx-10"
            />
            <h4 class="mx-10">Waiting for API...</h4>
            <v-divider class="mt-5" inset></v-divider>
          </v-row>
          <v-row class="d-flex justify-center align-center mt-10">
            <h1 class="mx-10">The</h1>
            <img
              :src="`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`"
              alt="weather icon"
              style="width: 100px; height: 100px"
              class="mx-10"
            />
            <h4 class="mx-10">Waiting for API...</h4>
            <v-divider class="mt-5" inset></v-divider>
          </v-row>
          <v-row class="d-flex justify-center align-center mt-10">
            <h1 class="mx-10">Wed</h1>
            <img
              :src="`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`"
              alt="weather icon"
              style="width: 100px; height: 100px"
              class="mx-10"
            />
            <h4 class="mx-10">Waiting for API...</h4>
            <v-divider class="mt-5" inset></v-divider>
          </v-row>
          <v-row class="d-flex justify-center align-center mt-10">
            <h1 class="mx-10">Thu</h1>
            <img
              :src="`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`"
              alt="weather icon"
              style="width: 100px; height: 100px"
              class="mx-10"
            />
            <h4 class="mx-10">Waiting for API...</h4>
            <v-divider class="mt-5" inset></v-divider>
          </v-row>
          <v-row class="d-flex justify-center align-center mt-10">
            <h1 class="mx-10">Fri</h1>
            <img
              :src="`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`"
              alt="weather icon"
              style="width: 100px; height: 100px"
              class="mx-10"
            />
            <h4 class="mx-10">Waiting for API...</h4>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </WeatherLayout>
</template>

<script>
import axios from "axios";
import WeatherLayout from "@/components/WeatherLayout.vue";

export default {
  name: "WeatherDashboard",
  components: {
    WeatherLayout,
  },
  data() {
    return {
      city: "Bangkok", // city เริ่มต้น
      apiKey: "2b13253ccb418d9f2420a6bc1344b41d",
      weather: {
        // เริ่มต้นให้มีค่า default เผื่อไว้ก่อนโหลด API
        coord: {},
        weather: [{ icon: "01d", description: "" }], 
        main: {},
        wind: {},
        name: "",
      },
    };
  },
  methods: {
    async fetchWeather() {
      try {
        const res = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.apiKey}&units=metric&lang=th`
        );
        this.weather = res.data;
        console.log("asdasd",this.weather);
      } catch (err) {
        console.error("Error fetching weather data:", err);
        alert("ไม่พบข้อมูลเมืองนี้ กรุณาลองใหม่อีกครั้ง");
      }
    },
  },
  mounted() {
    this.fetchWeather(); // โหลดข้อมูลเริ่มต้น
  },
};
</script>


