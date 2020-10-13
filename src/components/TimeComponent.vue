<template>
  <div id="TimeComponent">
    <div id="TimeContainer">
      <digital-clock
          :blink="true"
          :displaySeconds="true"
      />
    </div>
    <hr>
    <h6 id="Date">{{ moment().format('LL') }}.</h6>
  </div>
</template>

<script>
import DigitalClock from "vue-digital-clock";

export default {
  name: "TimeComponent",
  components: {
    DigitalClock
  }
}
</script>

<style scoped>

hr{ width: 200px; border:1px solid white; border-radius: 8px; }

#TimeContainer{ color: #F5F5F5; font-size: 96px; padding-top: 30px; text-shadow: 1px 1px 2px rgba(0, 0, 0, 1); }

h6{ color: white; font-size: 30px;}

#Date{ padding-top: 20px; }

</style>
