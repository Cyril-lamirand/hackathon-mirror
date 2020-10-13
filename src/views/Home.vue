<template>
  <div id="HomeVue">
    <div class="col-12">
      <WeatherWidget/>
    </div>
      <div class="col-12">
        <Calendar/>
      </div>
    </div>
</template>

<script>
// @ is an alias to /src
import WeatherWidget from "@/views/WeatherWidget";
import Calendar from "@/views/Calendar";

export default {
  name: 'Home',
  components: {Calendar, WeatherWidget }
}
</script>

<style>

</style>
