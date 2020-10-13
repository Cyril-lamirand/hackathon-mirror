<template>
  <div id="WeatherWidgetComponent">
    <vue-weather
        api-key="a9a79e59327a0dc88a110c7f442c8db8"
        units="uk"
        language="fr"
        bar-color="#F5F5F5"
        text-color="#F5F5F5"
        hide-header="true"
    />
  </div>

</template>

<script>

import VueWeather from "vue-weather-widget";

export default {
  name: "WeatherWidgetComponent",
  components: {
    VueWeather,
  }
};
</script>

<style scoped>

#WeatherWidgetComponent{
  display: flex;
  justify-content: center;
  background-color: rgba(12,12,12,0.8);
  border-radius: 8px;
  padding-top: 20px;
  padding-bottom: 15px; }

</style>
