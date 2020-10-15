<template>
  <div id="MessengerVue">

    <MessengerComponent/>

  </div>
</template>

<script>
import MessengerComponent from "@/components/MessengerComponent";
export default {
name: "Messenger",
  components: {MessengerComponent}
}
</script>

<style scoped>

#MessengerVue{}

</style>
