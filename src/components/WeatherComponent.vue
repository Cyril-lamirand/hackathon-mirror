<template>
  <div id="WeatherComponent">

    <div class="WeatherContainerContent">
      <vue-weather
          api-key="a9a79e59327a0dc88a110c7f442c8db8"
          units="uk"
          language="fr"
          bar-color="#F5F5F5"
          text-color="#F5F5F5"
          hide-header="true"
      />
    </div>

    <div class="WeatherContainerContent">
      <vue-weather
          api-key="a9a79e59327a0dc88a110c7f442c8db8"
          units="uk"
          language="fr"
          bar-color="#F5F5F5"
          text-color="#F5F5F5"
          hide-header="true"
      />
    </div>

    <div class="WeatherContainerContent">
      <vue-weather
          api-key="a9a79e59327a0dc88a110c7f442c8db8"
          units="uk"
          language="fr"
          bar-color="#F5F5F5"
          text-color="#F5F5F5"
          hide-header="true"
      />
    </div>

    <div class="WeatherContainerContent">
      <vue-weather
          api-key="a9a79e59327a0dc88a110c7f442c8db8"
          units="uk"
          language="fr"
          bar-color="#F5F5F5"
          text-color="#F5F5F5"
          hide-header="true"
      />
    </div>

    <div class="WeatherContainerContent">
      <vue-weather
          api-key="a9a79e59327a0dc88a110c7f442c8db8"
          units="uk"
          language="fr"
          bar-color="#F5F5F5"
          text-color="#F5F5F5"
          hide-header="true"
      />
    </div>
    <!-- Navigation Fixe : BAS -->
    <Navbar/>
  </div>
</template>

<script>
import Navbar from "@/views/Navbar";
import VueWeather from "vue-weather-widget";

export default {
name: "WeatherComponent",
  components: {
    VueWeather,
    Navbar
  }
}
</script>

<style scoped>

#WeatherComponent{}

.WeatherContainerContent{
  display: flex;
  justify-content: center;
  background-color: rgba(12,12,12,0.8);
  border-radius: 8px;
  padding-top: 20px;
  padding-bottom: 15px;
  margin-top: 30px;
}

</style>
