<template>
  <div id="HomeVue">
    <HomeComponent/>
  </div>
</template>

<script>
// @ is an alias to /src
import HomeComponent from "@/components/HomeComponent";
export default {
  name: 'Home',
  components: {HomeComponent},
}
</script>

<style scoped>



</style>
