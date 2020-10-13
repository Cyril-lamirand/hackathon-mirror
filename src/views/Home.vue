<template>
  <div id="HomeVue">
    <div class="row">
      <div class="div-100">
        <WeatherWidget/>
      </div>
      <div class="div-100">
        <Calendar/>
      </div>
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
