<template>
  <div id="WeatherComponent">
    <h2>Weather Component</h2>
    <!-- Navigation Fixe : BAS -->
    <Navbar/>
  </div>
</template>

<script>
import Navbar from "@/views/Navbar";
export default {
name: "WeatherComponent",
  components: {Navbar}
}
</script>

<style scoped>

#WeatherComponent{}

</style>
