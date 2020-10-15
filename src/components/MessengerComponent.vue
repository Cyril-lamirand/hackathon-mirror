<template>
  <div id="MessengerComponent">

    <div class="headermessage">
      <div class="text-center" id="HeaderMessenger">
          <b-avatar class="bavatarleft" variant="primary" text="AL"></b-avatar>
          <b-avatar class="bavatarleft" variant="primary" text="CL"></b-avatar>
          <b-avatar class="bavatarleft" variant="primary" text="AF"></b-avatar>
          <b-avatar class="bavatarleft" variant="primary" text="LJ"></b-avatar>
          <b-avatar class="bavatarleft" variant="primary" text="MD"></b-avatar>
          <b-avatar class="bavatarleft" variant="primary" text="PR"></b-avatar>
          <b-avatar class="bavatarleft" variant="primary" text="RT"></b-avatar>
          <b-avatar class="bavatarleft" variant="primary" text="SB"></b-avatar>
          <p>Groupe de Famille</p>
      </div>
      <div class="d-flex my-3">
        <b-avatar variant="primary" text="BV"></b-avatar>
        <div class="message">
          Cum historia cadunt, omnes abactores vitare velox, placidus resistentiaes.Everything we do is connected with enlightenment: uniqueness, suffering, attitude, fear.
        </div>
      </div>
      <div class="d-flex my-3">
        <b-avatar variant="primary" text="BV"></b-avatar>
        <div class="message">
          Cum historia cadunt, omnes abactores vitare velox, placidus resistentiaes.Everything we do is connected with enlightenment: uniqueness, suffering, attitude, fear.
        </div>
      </div>
      <div class="d-flex my-3">
        <b-avatar variant="primary" text="BV"></b-avatar>
        <div class="message">
          <img src="https://cdn.pixabay.com/photo/2015/01/08/18/24/children-593313_1280.jpg" alt="children">
        </div>
      </div>
    </div>

    <input
        :value="input"
        class="input"
        @input="onInputChange"
        placeholder="Votre Message"
    >
    <SimpleKeyboard class="clavier" @onChange="onChange" @onKeyPress="onKeyPress" :input="input" :theme="theme"/>

    <!-- Navigation Fixe : BAS -->
    <Navbar/>
  </div>
</template>

<script>
import Navbar from "@/views/Navbar";
import SimpleKeyboard from "@/components/SimpleKeyboard";
export default {
  name: "MessengerComponent",
  components: {Navbar, SimpleKeyboard},
  data: () => ({
    input: "",
    theme: "hg-theme-default myTheme1",
  }),
  methods: {
    onChange(input) {
      this.input = input;
    },
    onKeyPress(button) {
      console.log("button", button);
    },
    onInputChange(input) {
      this.input = input.target.value;
    }
  }
}
</script>

<style scoped>

#MessengerComponent{}
input {
  width: 100%;
  height: 50px;
  padding: 20px;
  font-size: 20px;
  border: none;
  box-sizing: border-box;
  border-radius: 10px;
  outline: none;
  position: absolute;
  left: 0;
  bottom: -34em;

}

.simple-keyboard {
  width: 100% !important;

}

.clavier{
  position: absolute !important;
  width: 100% !important;
  left: 0 !important;
  bottom: -58em !important;
}

/*
  Theme: myTheme1
*/
.simple-keyboard.myTheme1 {
  background-color: rgba(0, 0, 0, 0.8);
  border-radius: 0;
  border-bottom-right-radius: 5px;
  border-bottom-left-radius: 5px;
}

.simple-keyboard.myTheme1 .hg-button {
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.5);
  color: white;
}

.simple-keyboard.myTheme1 .hg-button:active {
  background: #1c4995;
  color: white;
}

.headermessage{
  background-color: rgba(12,12,12,0.8);
  border-radius: 16px;
  padding-left: 10px; padding-right: 10px; padding-bottom: 10px;
}

.bavatarleft{
  margin-left: -10px;
}

.message{
  padding: 1% 2.5%;
  background: #42b983;
  font-size: 1.25rem;
  color: white;
  border-radius: 10px;
  max-width: 40%;
  margin-left: 5px;
}

.message img{
  max-width: 100%;
}

#HeaderMessenger{ padding-top: 20px; }

p{ padding-top: 20px; color:#F5F5F5; font-size: 30px; padding-bottom: 20px;}

</style>
