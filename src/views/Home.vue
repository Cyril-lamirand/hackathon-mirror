<template>
  <div id="HomeVue">
    <div class="col-12">
      <WeatherWidget/>
    </div>
    <div class="col-12">
      <div class="text-center">
        <h6><span id="hours">12</span>&nbsp;:&nbsp;<span id="mins">54</span></h6>
      </div>
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
  components: { Calendar, WeatherWidget }
}
</script>

<style scoped>

h6{ font-size: 96px; color: #F5F5F5; text-shadow: 0px 0px 2px rgba(0, 0, 0, 1); }

</style>
