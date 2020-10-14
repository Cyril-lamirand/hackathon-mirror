<template>
  <div id="MedicalMonitoringComponent">
    <div id="traitement" class="traitement">
      <h3>Mes Traitements</h3>
      <hr class="trait">
      <div class="traitement-matin">
        <h4>Matin</h4>
        <br>
        <label class="conteneur">Ketaprofene x1
          <input type="checkbox" >
          <span class="checkmark"></span>
        </label>
        <br>
        <label class="conteneur">Lamaline x2
          <input type="checkbox">
          <span class="checkmark"></span>
        </label>
        <br>
        <label class="conteneur">Célécoxib x1
          <input type="checkbox" >
          <span class="checkmark"></span>
        </label>
        <br>
      </div>
      <div class="traitement-midi">
        <h4>Midi</h4>
        <br>
        <label class="conteneur">Lamaline x2
          <input type="checkbox">
          <span class="checkmark"></span>
        </label>
        <br>
      </div>
      <div class="traitement-soir">
        <h4>Soir</h4>
        <br>
        <label class="conteneur">Ketaprofene x1
          <input type="checkbox" >
          <span class="checkmark"></span>
        </label>
        <br>
        <label class="conteneur">Lamaline x2
          <input type="checkbox">
          <span class="checkmark"></span>
        </label>
        <br>
        <label class="conteneur">Célécoxib x1
          <input type="checkbox" >
          <span class="checkmark"></span>
        </label>
      </div>
    </div>
    <!-- Navigation Fixe : BAS -->
    <Navbar/>
  </div>
</template>

<script>
import Navbar from "@/views/Navbar";
export default {
name: "MedicalMonitoringComponent",
  components: {Navbar}
}
</script>

<style scoped>

#MedicalMonitoringComponent{}
.traitement{
  width: 80%;
  margin: 10%;
  font-size: 1.75rem;
}

.traitement-matin, .traitement-midi, .traitement-soir{
  color: white;
  margin: 3% 0 0 0;
}

.traitement label{
  margin: 0 10% !important;
}

.traitement h3{
  font-size: 3rem;
  text-align: center;
  color: white;
}

.traitement h4{
  font-size: 2.25rem;
}

.trait{
  background: white;
  width: 50%;
}
.conteneur {
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 22px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

/* Hide the browser's default checkbox */
.conteneur input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

/* Create a custom checkbox */
.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 25px;
  width: 25px;
  background-color: #eee;
}

/* On mouse-over, add a grey background color */
.conteneur:hover input ~ .checkmark {
  background-color: #ccc;
}

/* When the checkbox is checked, add a blue background */
.conteneur input:checked ~ .checkmark {
  background-color: #2196F3;
}

/* Create the checkmark/indicator (hidden when not checked) */
.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

/* Show the checkmark when checked */
.conteneur input:checked ~ .checkmark:after {
  display: block;
}

/* Style the checkmark/indicator */
.conteneur .checkmark:after {
  left: 9px;
  top: 5px;
  width: 5px;
  height: 10px;
  border: solid white;
  border-width: 0 3px 3px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}
</style>
