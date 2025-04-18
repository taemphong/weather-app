<template>
  <v-container fluid>
    <v-row>
      <v-col cols="6">
        <v-card
          elevation="0"
          rounded="xl"
          class="mt-5 ml-9 d-flex justify-center align-center"
          style="width: 860px; height: 880px; background-color: #f5f7fa"
        >
          <img :src="logo" alt="logo" class="img-logo"
        /></v-card>
      </v-col>
      <v-col cols="6" class="d-flex flex-column justify-center align-center">
        <h1 style="font-size: 70px">Sunny</h1>
        <p class="ml-4" style="font-size: 20px; color: gray">
          Welcome to Sunny!
        </p>
        <v-btn rounded="xl" class="mt-8" color="primary" @click="goToDashboard">
          Get Start
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import logo from "@/assets/wheatherlogo.png";

export default {
  data() {
    return {
      logo,
    };
  },
  methods: {
    goToDashboard() {
      this.$router.push("/weather-dashboard");
    },
  },
};
</script>

<style></style>
