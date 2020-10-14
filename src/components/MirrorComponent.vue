<template>
  <div id="MirrorComponent">


    <!-- Navigation Fixe : BAS -->
    <Navbar/>
  </div>
</template>

<script>
import Navbar from "@/views/Navbar";
export default {
name: "NoteComponent",
  components: { Navbar }
}
</script>

<style scoped>

#MirrorComponent{ width: 100vw; height: 100vh; position: absolute; top:0; left: 0; background-color: black; }

</style>
