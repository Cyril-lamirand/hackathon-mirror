<template>
  <div id="NoteComponent">

    <!-- Navigation Fixe : BAS -->
    <Navbar/>
  </div>
</template>

<script>
import Navbar from "@/views/Navbar";
export default {
name: "NoteComponent",
  components: {Navbar}
}
</script>

<style scoped>

#NoteComponent{}

</style>