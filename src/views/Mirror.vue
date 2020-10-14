<template>
  <div id="MirrorVue">

   <MirrorComponent/>

  </div>
</template>

<script>
import MirrorComponent from "@/components/MirrorComponent";
export default {
name: "Note",
  components: { MirrorComponent }
}
</script>

<style scoped>

#MirrorVue{}

</style>
