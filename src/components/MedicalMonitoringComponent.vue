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
                      <b-progress :value="valueLundi" show-value striped :animated=true class="mb-3"></b-progress>
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
                          value-field="item"
                          text-field="name"
                          disabled-field="notEnabled"
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
                      <b-progress :value="valueMardi" show-value striped :animated=true class="mb-3"></b-progress>
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
                          value-field="item"
                          text-field="name"
                          disabled-field="notEnabled"
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
                      <b-progress :value="valueMercredi" show-value striped :animated=true variant="warning" class="mb-3"></b-progress>
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
                          value-field="item"
                          text-field="name"
                          disabled-field="notEnabled"
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
                      <b-progress :value="valueJeudi" show-value striped :animated=true class="mb-3"></b-progress>
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
                          value-field="item"
                          text-field="name"
                          disabled-field="notEnabled"
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
                          value-field="item"
                          text-field="name"
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
                      <b-progress :value="valueSamedi" show-value class="mb-3"></b-progress>
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
                          value-field="item"
                          text-field="name"
                          disabled-field="notEnabled"
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
                      <b-progress :value="valueDimanche" show-value class="mb-3"></b-progress>
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
                          value-field="item"
                          text-field="name"
                          disabled-field="notEnabled"
                      ></b-form-checkbox-group>
                    </b-card-text>
                  </b-card-body>
                </b-collapse>
              </b-card>
            </div>
          </div>
        </div>
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
        'A','B','C','D',
        'E','F','G','H',
        'I','K','L',
        'M','N','O','P'
      ],

      lundi: [
        { item: 'A', name: 'Laméline x2', notEnabled: true },
        { item: 'B', name: 'Dafalgan x1', notEnabled: true },
        { item: 'C', name: 'Spasfon x1', notEnabled: true },
        { item: 'D', name: 'Doliprane x3', notEnabled: true }
      ],
      mardi: [
        { item: 'E', name: 'Laméline x2', notEnabled: true },
        { item: 'F', name: 'Dafalgan x1', notEnabled: true },
        { item: 'G', name: 'Spasfon x1', notEnabled: true },
        { item: 'H', name: 'Doliprane x3', notEnabled: true }
      ],
      mercredi: [
        { item: 'I', name: 'Laméline x2', notEnabled: true },
        { item: 'J', name: 'Dafalgan x1', notEnabled: true },
        { item: 'K', name: 'Spasfon x1', notEnabled: true },
        { item: 'L', name: 'Doliprane x3', notEnabled: true }
      ],
      jeudi: [
        { item: 'M', name: 'Laméline x2', notEnabled: true },
        { item: 'N', name: 'Dafalgan x1', notEnabled: true },
        { item: 'O', name: 'Spasfon x1', notEnabled: true },
        { item: 'P', name: 'Doliprane x3', notEnabled: true }
      ],
      vendredi: [
        { item: 'Q', name: 'Laméline x2', value: 25 },
        { item: 'R', name: 'Dafalgan x1', value: 25 },
        { item: 'S', name: 'Spasfon x1', value: 25 },
        { item: 'T', name: 'Doliprane x3', value: 25 }
      ],
      samedi: [
        { item: 'U', name: 'Laméline x2', notEnabled: true },
        { item: 'V', name: 'Dafalgan x1', notEnabled: true },
        { item: 'W', name: 'Spasfon x1', notEnabled: true },
        { item: 'X', name: 'Doliprane x3', notEnabled: true }
      ],
      dimanche: [
        { item: 'Y', name: 'Laméline x2', notEnabled: true },
        { item: 'Z', name: 'Dafalgan x1', notEnabled: true },
        { item: '0', name: 'Spasfon x1', notEnabled: true },
        { item: '1', name: 'Doliprane x3', notEnabled: true }
      ]

    }
  },
  methods: {},
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

</style>
