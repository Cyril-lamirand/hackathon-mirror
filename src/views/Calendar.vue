<template>
  <div id="CalendarVue">

    <CalendarComponent/>

  </div>
</template>

<script>
import CalendarComponent from "@/components/CalendarComponent";
export default {
name: "Calendar",
  components: {CalendarComponent}
}
</script>

<style scoped>

#CalendarVue{}

</style>
