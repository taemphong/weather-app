<template>
  <WeatherLayout>
    <v-row>
      <v-col cols="7"
        ><v-text-field
          class="mt-10 ml-n12"
          label="Search for cities"
          variant="solo-filled"
          rounded
          style="border-radius: 12px"
        ></v-text-field
      ></v-col>
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
</script>

