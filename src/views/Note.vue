<template>
  <div id="NoteVue">

    <NoteComponent/>

  </div>
</template>

<script>
import NoteComponent from "@/components/NoteComponent";
export default {
name: "Note",
  components: {NoteComponent}
}
</script>

<style scoped>

#NoteVue{}

</style>