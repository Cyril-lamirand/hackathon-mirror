<template>
  <div id="WeatherVue">

    <WeatherComponent/>

  </div>
</template>

<script>
import WeatherComponent from "@/components/WeatherComponent";
export default {
  name: "Weather",
  components: {WeatherComponent}
}
</script>

<style scoped>

#WeatherVue{}

</style>
