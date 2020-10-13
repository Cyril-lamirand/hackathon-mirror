<template>
  <div id="NavbarComponent">
    <div class="row">
      <div class="col-4 navbar-item">
        <div class="col-12">
          <h2>Bonjour, Gertrude</h2>
          <h4>{{ moment().format('LL') }}</h4>
          <h3>22°&nbsp;&nbsp;<i class="fas fa-house-user"></i></h3>
        </div>
      </div>
      <div class="col-4 navbar-item">
        <div class="text-center">
          <router-link to="/">
            <span id="home-button">
              <i class="fas fa-home"></i>
            </span>
          </router-link>
        </div>
      </div>
      <div class="col-4 navbar-item">
        <div id="ClockNavbar">
          <digital-clock
              :blink="true"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DigitalClock from "vue-digital-clock";

export default {
name: "NavbarComponent",
  components: {
    DigitalClock
  }
}
</script>

<style scoped>

#NavbarComponent{ position: fixed; width: 100%; bottom: 0; left:0; z-index: 999; color: #F5F5F5 }

.navbar-item{ height: 150px; background-color: rgba(12,12,12,0.8);padding-top: 10px;}

h3{ font-size: 35px;}

#home-button{ font-size: 95px; color: white!important;}

h6{ font-size: 25px;}

#ClockNavbar{ font-family: 'Digital'; text-align: right; padding-right: 20px; font-size: 90px; }

</style>
