<template>
  <div id="MedicalMonitoringComponent">
    <div class="container-fluid">
      <div class="text-center" id="TitleContainer">
        <h1>Mon suivi personnalisé</h1>
      </div>

      <div class="row">

        <div class="col-6">
          <div id="ContainerOrdonnance">
            <div class="text-center">
              <h2>Ordonnance en cours</h2>
            </div>
            <hr>
            <div class="col-12">
              <h4>Numéro d'ordonnance : <b>54#205</b></h4>
              <h4>Praticien : <b>Docteur Jacques ARTUR</b></h4>
              <h4>Date d'émission : <b>05/04/2020</b></h4>
              <h4>Date fin de traitement : <b>10/04/2020</b></h4>
            </div>
            <hr>
            <div class="col-12">
              <div class="row">
                <div class="col-2">
                   <img class="img-fluid" src="@/assets/logo.png"/>
                </div>
                <div class="col-10">
                  <h5>Nom du médicament : <b>LAMELINE</b></h5>
                  <h5>Quantité : 2 Boîtes</h5>
                  <h5>Nombre par jours : <b>2</b></h5>
                  <h5>Prise : <b>Avant/Après repas</b></h5>
                </div>
              </div>
              <div class="row medic-pt">
                <div class="col-2">
                  <img class="img-fluid" src="@/assets/logo.png"/>
                </div>
                <div class="col-10">
                  <h5>Nom du médicament : <b>LAMELINE</b></h5>
                  <h5>Quantité : 2 Boîtes</h5>
                  <h5>Nombre par jours : <b>2</b></h5>
                  <h5>Prise : <b>Avant/Après repas</b></h5>
                </div>
              </div>
              <div class="row medic-pt">
                <div class="col-2">
                  <img class="img-fluid" src="@/assets/logo.png"/>
                </div>
                <div class="col-10">
                  <h5>Nom du médicament : <b>LAMELINE</b></h5>
                  <h5>Quantité : 2 Boîtes</h5>
                  <h5>Nombre par jours : <b>2</b></h5>
                  <h5>Prise : <b>Avant/Après repas</b></h5>
                </div>
              </div>
              <div class="row medic-pt">
                <div class="col-2">
                  <img class="img-fluid" src="@/assets/logo.png"/>
                </div>
                <div class="col-10">
                  <h5>Nom du médicament : <b>LAMELINE</b></h5>
                  <h5>Quantité : 2 Boîtes</h5>
                  <h5>Nombre par jours : <b>2</b></h5>
                  <h5>Prise : <b>Avant/Après repas</b></h5>
                </div>
              </div>
              <div class="row medic-pt">
                <div class="col-2">
                  <img class="img-fluid" src="@/assets/logo.png"/>
                </div>
                <div class="col-10">
                  <h5>Nom du médicament : <b>LAMELINE</b></h5>
                  <h5>Quantité : 2 Boîtes</h5>
                  <h5>Nombre par jours : <b>2</b></h5>
                  <h5>Prise : <b>Avant/Après repas</b></h5>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-6">
          <div id="ContainerTraitement">
            <div class="text-center">
              <h2>Traitement</h2>
            </div>
            <hr>

            <div class="accordion" role="tablist">
              <b-card no-body class="mb-1">
                <b-card-header header-tag="header" class="p-1" role="tab">
                  <b-button block v-b-toggle.accordion-1 variant="info">Lundi</b-button>
                </b-card-header>
                <b-collapse id="accordion-1" visible accordion="my-accordion" role="tabpanel">
                  <b-card-body>
                    <b-card-text>
                      <p>Avancement</p>
                      <b-progress :value="value" :max="max" show-value class="mb-3"></b-progress>
                      <p>Médicament(s)</p>

                    </b-card-text>
                  </b-card-body>
                </b-collapse>
              </b-card>

              <b-card no-body class="mb-1">
                <b-card-header header-tag="header" class="p-1" role="tab">
                  <b-button block v-b-toggle.accordion-2 variant="info">Mardi</b-button>
                </b-card-header>
                <b-collapse id="accordion-2" accordion="my-accordion" role="tabpanel">
                  <b-card-body>
                    <b-card-text>Hello</b-card-text>
                  </b-card-body>
                </b-collapse>
              </b-card>

              <b-card no-body class="mb-1">
                <b-card-header header-tag="header" class="p-1" role="tab">
                  <b-button block v-b-toggle.accordion-3 variant="info">Mercredi</b-button>
                </b-card-header>
                <b-collapse id="accordion-3" accordion="my-accordion" role="tabpanel">
                  <b-card-body>
                    <b-card-text>Hello</b-card-text>
                  </b-card-body>
                </b-collapse>
              </b-card>

              <b-card no-body class="mb-1">
                <b-card-header header-tag="header" class="p-1" role="tab">
                  <b-button block v-b-toggle.accordion-4 variant="info">Jeudi</b-button>
                </b-card-header>
                <b-collapse id="accordion-4" accordion="my-accordion" role="tabpanel">
                  <b-card-body>
                    <b-card-text>Hello</b-card-text>
                  </b-card-body>
                </b-collapse>
              </b-card>

              <b-card no-body class="mb-1">
                <b-card-header header-tag="header" class="p-1" role="tab">
                  <b-button block v-b-toggle.accordion-5 variant="info">Vendredi</b-button>
                </b-card-header>
                <b-collapse id="accordion-5" accordion="my-accordion" role="tabpanel">
                  <b-card-body>
                    <b-card-text>Hello</b-card-text>
                  </b-card-body>
                </b-collapse>
              </b-card>

              <b-card no-body class="mb-1">
                <b-card-header header-tag="header" class="p-1" role="tab">
                  <b-button block v-b-toggle.accordion-6 variant="info">Samedi</b-button>
                </b-card-header>
                <b-collapse id="accordion-6" accordion="my-accordion" role="tabpanel">
                  <b-card-body>
                    <b-card-text>Hello</b-card-text>
                  </b-card-body>
                </b-collapse>
              </b-card>

              <b-card no-body class="mb-1">
                <b-card-header header-tag="header" class="p-1" role="tab">
                  <b-button block v-b-toggle.accordion-7 variant="info">Dimanche</b-button>
                </b-card-header>
                <b-collapse id="accordion-7" accordion="my-accordion" role="tabpanel">
                  <b-card-body>
                    <b-card-text>Hello</b-card-text>
                  </b-card-body>
                </b-collapse>
              </b-card>


            </div>

          </div>
        </div>
      </div>
    </div>

    <!-- Partie Alex -->
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
  components: {Navbar},
  data() {
    return {
      value: 33.333333333,
      max: 50
    }
  }
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


#TitleContainer{
  height: 100px;
  background-color: rgba(12,12,12,0.8);
  color:#F5F5F5;
  text-transform: uppercase;
  padding-top: 25px;
  border-radius: 8px;
}

#ContainerOrdonnance, #ContainerTraitement{ margin-top: 50px; color: #F5F5F5; text-transform: uppercase; background-color: rgba(12,12,12,0.8); border-radius: 8px; padding-top: 20px; padding-left: 20px; padding-right: 20px; padding-bottom: 20px; }

hr{ border:2px solid white; border-radius: 4px; width: 70%; }

.medic-pt{ padding-top: 15px; }

</style>
