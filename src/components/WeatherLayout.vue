<template>
  <v-container fluid>
    <v-row>
      <v-col cols="2">
        <v-card
          elevation="0"
          rounded="xl"
          class="mt-5 ml-13 d-flex flex-column align-center"
          style="width: 150px; height: 880px; background-color: #f5f5f5"
        >
          <img
            :src="logo"
            alt="logo"
            class="img-logo"
            style="width: 100px; height: 100px"
          />

          <!-- Menu Items -->
          <div
            class="d-flex flex-column align-center mt-10"
            @click="goTo('/weather-dashboard')"
          >
            <img
              :src="weathericon"
              alt="Weather Icon"
              class="menu-icon"
              :class="{ active: isActive('weather-dashboard') }"
            />
            <span
              class="menu-label mt-2"
              :class="{ active: isActive('weather-dashboard') }"
            >
              Weather
            </span>
          </div>

          <div
            class="d-flex flex-column align-center mt-10"
            @click="goTo('/weather-cities')"
          >
            <img
              :src="cityicon"
              alt="City Icon"
              class="menu-icon"
              :class="{ active: isActive('weather-cities') }"
            />
            <span
              class="menu-label mt-2"
              :class="{ active: isActive('weather-cities') }"
            >
              Cities
            </span>
          </div>

          <div
            class="d-flex flex-column align-center mt-10"
            @click="goTo('/weather-map')"
          >
            <img
              :src="mapicon"
              alt="Map Icon"
              class="menu-icon"
              :class="{ active: isActive('map') }"
            />
            <span
              class="menu-label mt-2"
              :class="{ active: isActive('map') }"
            >
              Map
            </span>
          </div>

          <div
            class="d-flex flex-column align-center mt-10"
            @click="goTo('/weather-setting')"
          >
            <img
              :src="settingsicon"
              alt="Settings Icon"
              class="menu-icon"
              :class="{ active: isActive('settings') }"
            />
            <span
              class="menu-label mt-2"
              :class="{ active: isActive('settings') }"
            >
              Settings
            </span>
          </div>
        </v-card>
      </v-col>

      <!-- Content Slot -->
      <slot></slot>
    </v-row>
  </v-container>
</template>

<script>
import logo from "@/assets/wheatherlogo2.png";
import weathericon from "@/assets/Icon/weather.svg";
import cityicon from "@/assets/Icon/city.svg";
import mapicon from "@/assets/Icon/map.svg";
import settingsicon from "@/assets/Icon/settings.svg";

export default {
  name: "WeatherLayout",
  data() {
    return {
      logo,
      weathericon,
      cityicon,
      mapicon,
      settingsicon,
    };
  },
  methods: {
    goTo(path) {
      if (this.$route.path !== path) {
        this.$router.push(path);
      }
    },
    isActive(pathName) {
      return this.$route.path.includes(pathName);
    },
  },
};
</script>

<style scoped>
.menu-icon {
  width: 30px;
  height: 40px;
  filter: grayscale(1);
  opacity: 0.5;
  transition: filter 0.3s, opacity 0.3s;
}

.menu-icon.active {
  filter: grayscale(0);
  opacity: 1;
}

.menu-label {
  font-size: 14px;
  color: gray;
  transition: color 0.3s;
}

.menu-label.active {
  color: black;
}
</style>
