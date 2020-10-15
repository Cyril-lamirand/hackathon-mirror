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
              <h2 class="uppercase">Ordonnance en cours</h2>
            </div>
            <hr>
            <div class="col-12">
              <h4>Numéro d'ordonnance : <b>54#205</b></h4>
              <h4>Praticien : <b>Docteur Jacques ARTUR</b></h4>
              <h4>Date d'émission : <b>05/04/2020</b></h4>
              <h4>Date fin de traitement : <b>10/04/2020</b></h4>
            </div>
            <hr>
            <table style="width: 100%;">
              <tr class="text-center">
                <th>Image</th>
                <th>Médicament</th>
                <th>Quantité</th>
                <th>Prise</th>
              </tr>
              <tr class="text-center">
                <td>
                  <div class="text-center">
                    <img width="64" class="img-pills" src="@/assets/pills-1.jpg"/>
                  </div>
                </td>
                <td>Laméline</td>
                <td>2 Boîtes</td>
                <td>Après repas</td>
              </tr>
              <tr class="text-center">
                <td>
                  <div class="text-center">
                    <img width="64" class="img-pills" src="@/assets/pills-2.jpg"/>
                  </div>
                </td>
                <td>Doliprane</td>
                <td>2 Boîtes</td>
                <td>Après repas</td>
              </tr>
              <tr class="text-center">
                <td>
                  <div class="text-center">
                    <img width="64" class="img-pills" src="@/assets/pills-3.jpg"/>
                  </div>
                </td>
                <td>Spasfon</td>
                <td>2 Boîtes</td>
                <td>Après repas</td>
              </tr>
              <tr class="text-center">
                <td>
                  <div class="text-center">
                    <img width="64" class="img-pills" src="@/assets/pills-4.jpg"/>
                  </div>
                </td>
                <td>Dafalgan</td>
                <td>2 Boîtes</td>
                <td>Après repas</td>
              </tr>
            </table>
            <hr>
            <h4 style="padding-top: 20px;">Complément d'information du praticien : </h4>
            <p style="padding-top: 20px;">Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusamus accusantium asperiores autem beatae consequatur cumque cupiditate deleniti eum fugiat illo iusto mollitia nostrum odio, optio quos ratione, ullam unde.</p>
            <p style="text-align: right"><b>Le 13 Octobre 2020,</b></p>
            <p style="text-align: right"><b>Docteur Jacques ARTUR.</b></p>
          </div>
        </div>

        <div class="col-6">
          <div id="ContainerTraitement">
            <div class="text-center">
              <h2 class="uppercase">Traitement</h2>
            </div>
            <hr>
            <div class="accordion" role="tablist">
              <b-card no-body class="mb-1">
                <b-card-header header-tag="header" class="p-1" role="tab">
                  <b-button block v-b-toggle.accordion-1 variant="success">Lundi</b-button>
                </b-card-header>
                <b-collapse id="accordion-1" visible accordion="my-accordion" role="tabpanel">
                  <b-card-body>
                    <b-card-text>
                      <b-progress height="1.5rem" :value="valueLundi" show-value striped :animated=true class="mb-3"></b-progress>
                      <p>Matinée</p>
                      <ul>
                        <li>Laméline x1</li>
                        <li>Doliprane x2</li>
                      </ul>
                      <p>Midi</p>
                      <ul>
                        <li>Dafalgan x1</li>
                      </ul>
                      <p>Soirée</p>
                      <ul>
                        <li>Laméline x1</li>
                        <li>Doliprane x1</li>
                      </ul>
                      <b-form-checkbox-group
                          v-model="checked"
                          :options="lundi"
                          class="mb-3"
                          value-field="id"
                          text-field="name"
                          disabled-field="notEnabled"
                          size="lg"
                      ></b-form-checkbox-group>
                    </b-card-text>
                  </b-card-body>
                </b-collapse>
              </b-card>
              <b-card no-body class="mb-1">
                <b-card-header header-tag="header" class="p-1" role="tab">
                  <b-button block v-b-toggle.accordion-2 variant="success">Mardi</b-button>
                </b-card-header>
                <b-collapse id="accordion-2" accordion="my-accordion" role="tabpanel">
                  <b-card-body>
                    <b-card-text>
                      <b-progress height="1.5rem" :value="valueMardi" show-value striped :animated=true class="mb-3"></b-progress>
                      <p>Matinée</p>
                      <ul>
                        <li>Laméline x1</li>
                        <li>Doliprane x2</li>
                      </ul>
                      <p>Midi</p>
                      <ul>
                        <li>Dafalgan x1</li>
                      </ul>
                      <p>Soirée</p>
                      <ul>
                        <li>Laméline x1</li>
                        <li>Doliprane x1</li>
                      </ul>
                      <b-form-checkbox-group
                          v-model="checked"
                          :options="mardi"
                          class="mb-3"
                          value-field="id"
                          text-field="name"
                          disabled-field="notEnabled"
                          size="lg"
                      ></b-form-checkbox-group>
                    </b-card-text>
                  </b-card-body>
                </b-collapse>
              </b-card>
              <b-card no-body class="mb-1">
                <b-card-header header-tag="header" class="p-1" role="tab">
                  <b-button block v-b-toggle.accordion-3 variant="danger">Mercredi</b-button>
                </b-card-header>
                <b-collapse id="accordion-3" accordion="my-accordion" role="tabpanel">
                  <b-card-body>
                    <b-card-text>
                      <b-progress height="1.5rem" :value="valueMercredi" show-value striped :animated=true variant="warning" class="mb-3"></b-progress>
                      <p>Matinée</p>
                      <ul>
                        <li>Laméline x1</li>
                        <li>Doliprane x2</li>
                      </ul>
                      <p>Midi</p>
                      <ul>
                        <li>Dafalgan x1</li>
                      </ul>
                      <p>Soirée</p>
                      <ul>
                        <li>Laméline x1</li>
                        <li>Doliprane x1</li>
                      </ul>
                      <b-form-checkbox-group
                          v-model="checked"
                          :options="mercredi"
                          class="mb-3"
                          value-field="id"
                          text-field="name"
                          disabled-field="notEnabled"
                          size="lg"
                      ></b-form-checkbox-group>
                    </b-card-text>
                  </b-card-body>
                </b-collapse>
              </b-card>
              <b-card no-body class="mb-1">
                <b-card-header header-tag="header" class="p-1" role="tab">
                  <b-button block v-b-toggle.accordion-4 variant="success">Jeudi</b-button>
                </b-card-header>
                <b-collapse id="accordion-4" accordion="my-accordion" role="tabpanel">
                  <b-card-body>
                    <b-card-text>
                      <b-progress height="1.5rem" :value="valueJeudi" show-value striped :animated=true class="mb-3"></b-progress>
                      <p>Matinée</p>
                      <ul>
                        <li>Laméline x1</li>
                        <li>Doliprane x2</li>
                      </ul>
                      <p>Midi</p>
                      <ul>
                        <li>Dafalgan x1</li>
                      </ul>
                      <p>Soirée</p>
                      <ul>
                        <li>Laméline x1</li>
                        <li>Doliprane x1</li>
                      </ul>
                      <b-form-checkbox-group
                          v-model="checked"
                          :options="jeudi"
                          class="mb-3"
                          value-field="id"
                          text-field="name"
                          disabled-field="notEnabled"
                          size="lg"
                      ></b-form-checkbox-group>
                    </b-card-text>
                  </b-card-body>
                </b-collapse>
              </b-card>
              <b-card no-body class="mb-1">
                <b-card-header header-tag="header" class="p-1" role="tab">
                  <b-button block v-b-toggle.accordion-5 variant="info">Vendredi</b-button>
                </b-card-header>
                <b-collapse id="accordion-5" accordion="my-accordion" role="tabpanel">
                  <b-card-body>
                    <b-card-text>

                      <b-progress
                          height="1.5rem"
                          :value="valueVendredi"
                          show-value striped :animated=true
                          class="mb-3">
                      </b-progress>
                      <p>Matinée</p>
                      <ul>
                        <li>Laméline x1</li>
                        <li>Doliprane x2</li>
                      </ul>
                      <p>Midi</p>
                      <ul>
                        <li>Dafalgan x1</li>
                      </ul>
                      <p>Soirée</p>
                      <ul>
                        <li>Laméline x1</li>
                        <li>Doliprane x1</li>
                      </ul>
                      <b-form-checkbox-group
                          v-model="selected"
                          :options="vendredi"
                          class="mb-3"
                          value-field="id"
                          text-field="name"
                          size="lg"
                          v-on:click="valueVendredi += 25"
                      >
                      </b-form-checkbox-group>
                      <p>Sélection : {{ selected }} // AllChecked : {{ AllChecked }}</p>
                    </b-card-text>
                  </b-card-body>
                </b-collapse>
              </b-card>
              <b-card no-body class="mb-1">
                <b-card-header header-tag="header" class="p-1" role="tab">
                  <b-button block v-b-toggle.accordion-6 variant="primary">Samedi</b-button>
                </b-card-header>
                <b-collapse id="accordion-6" accordion="my-accordion" role="tabpanel">
                  <b-card-body>
                    <b-card-text>
                      <b-progress height="1.5rem" :value="valueSamedi" show-value class="mb-3"></b-progress>
                      <p>Matinée</p>
                      <ul>
                        <li>Laméline x1</li>
                        <li>Doliprane x2</li>
                      </ul>
                      <p>Midi</p>
                      <ul>
                        <li>Dafalgan x1</li>
                      </ul>
                      <p>Soirée</p>
                      <ul>
                        <li>Laméline x1</li>
                        <li>Doliprane x1</li>
                      </ul>
                      <b-form-checkbox-group
                          v-model="checked"
                          :options="samedi"
                          class="mb-3"
                          value-field="id"
                          text-field="name"
                          disabled-field="notEnabled"
                          size="lg"
                      ></b-form-checkbox-group>
                    </b-card-text>
                  </b-card-body>
                </b-collapse>
              </b-card>
              <b-card no-body class="mb-1">
                <b-card-header header-tag="header" class="p-1" role="tab">
                  <b-button block v-b-toggle.accordion-7 variant="primary">Dimanche</b-button>
                </b-card-header>
                <b-collapse id="accordion-7" accordion="my-accordion" role="tabpanel">
                  <b-card-body>
                    <b-card-text>
                      <b-progress height="1.5rem" :value="valueDimanche" show-value class="mb-3"></b-progress>
                      <p>Matinée</p>
                      <ul>
                        <li>Laméline x1</li>
                        <li>Doliprane x2</li>
                      </ul>
                      <p>Midi</p>
                      <ul>
                        <li>Dafalgan x1</li>
                      </ul>
                      <p>Soirée</p>
                      <ul>
                        <li>Laméline x1</li>
                        <li>Doliprane x1</li>
                      </ul>
                      <b-form-checkbox-group
                          v-model="checked"
                          :options="dimanche"
                          class="mb-3"
                          value-field="id"
                          text-field="name"
                          disabled-field="notEnabled"
                          size="lg"
                      ></b-form-checkbox-group>
                    </b-card-text>
                  </b-card-body>
                </b-collapse>
              </b-card>
            </div>
          </div>
        </div>
      </div>
      <!-- Adding the features -->
      <div id="lastFeatures">
      </div>
    </div>
    <!-- Navigation Fixe : BAS -->
    <Navbar></Navbar>
  </div>
</template>

<script>
import Navbar from "@/views/Navbar";


export default {
name: "MedicalMonitoringComponent",
  components: { Navbar },

  data() {
    return {
      valueLundi: 100,
      valueMardi: 100,
      valueMercredi: 90,
      valueJeudi: 100,
      valueVendredi: 0,
      valueSamedi: 0,
      valueDimanche: 0,

      AllChecked: false,

      selected: [],
      value:[],

      checked: [
        1,'2','3','4',
        '5','6','7','8',
        '9','10','11',
        '13','14','15','16'
      ],

      lundi: [
        { id:1, name: 'Laméline x2',  notEnabled: true },
        { id:2, name: 'Dafalgan x1',  notEnabled: true },
        { id:3, name: 'Spasfon x1',   notEnabled: true },
        { id:4, name: 'Doliprane x3', notEnabled: true }
      ],
      mardi: [
        { id:5, name: 'Laméline x2',  notEnabled: true },
        { id:6, name: 'Dafalgan x1',  notEnabled: true },
        { id:7, name: 'Spasfon x1',   notEnabled: true },
        { id:8, name: 'Doliprane x3', notEnabled: true }
      ],
      mercredi: [
        { id:9,  name: 'Laméline x2',  notEnabled: true },
        { id:10, name: 'Dafalgan x1',  notEnabled: true },
        { id:11, name: 'Spasfon x1',   notEnabled: true },
        { id:12, name: 'Doliprane x3', notEnabled: true }
      ],
      jeudi: [
        { id:13, name: 'Laméline x2',  notEnabled: true },
        { id:14, name: 'Dafalgan x1',  notEnabled: true },
        { id:15, name: 'Spasfon x1',   notEnabled: true },
        { id:16, name: 'Doliprane x3', notEnabled: true }
      ],
      vendredi: [
        { id:17, name: 'Laméline x2',  value: 25 },
        { id:18, name: 'Dafalgan x1',  value: 25 },
        { id:19, name: 'Spasfon x1',   value: 25 },
        { id:20, name: 'Doliprane x3', value: 25 }
      ],
      samedi: [
        { id:21, name: 'Laméline x2',  notEnabled: true },
        { id:22, name: 'Dafalgan x1',  notEnabled: true },
        { id:23, name: 'Spasfon x1',   notEnabled: true },
        { id:24, name: 'Doliprane x3', notEnabled: true }
      ],
      dimanche: [
        { id:25, name: 'Laméline x2',  notEnabled: true },
        { id:26, name: 'Dafalgan x1',  notEnabled: true },
        { id:27, name: 'Spasfon x1',   notEnabled: true },
        { id:28, name: 'Doliprane x3', notEnabled: true }
      ]

    }
  },
  methods: {
    AllTheFridayMeds() {
      return
    }
  },
  computed: {}
}
</script>

<style scoped>

#TitleContainer{
  height: 100px;
  background-color: rgba(12,12,12,0.8);
  color:#F5F5F5;
  text-transform: uppercase;
  padding-top: 25px;
  border-radius: 8px;
}

#ContainerOrdonnance, #ContainerTraitement{ margin-top: 50px; color: #F5F5F5; background-color: rgba(12,12,12,0.8); border-radius: 8px; padding-top: 20px; padding-left: 20px; padding-right: 20px; padding-bottom: 20px; }

hr{ border:2px solid white; border-radius: 4px; width: 70%; }

.uppercase{ text-transform: uppercase; }

.card{ background: none !important;}

.img-pills{ border-radius: 128px; }

#lastFeatures{ padding-top: 50px; width: 100%; margin-top: 50px; height: 500px; background-color: black; }

</style>
