<!-- <template>
  <v-app>
    <v-main>
      <GetStarted/>
    </v-main>
    <router-view />
  </v-app>
</template> -->

<template>
  <div>
    <router-view />
  </div>
</template>

<script>
// import GetStarted from './components/GetStart.vue'

export default {
  name: 'App',

  components: {
    // GetStarted
  },

  data: () => ({
    //
  }),
}
</script>


<style>
body {
  font-family: 'Inria Sans', sans-serif;
}
</style>
