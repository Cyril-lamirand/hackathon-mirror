<template>
  <div id="app">
    <div id="ParticlesContainer">
      <ParticlesComponent></ParticlesComponent>
    </div>
    <div id="ApplicationContent">
      <router-view/>
    </div>
    <!--
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    -->
  </div>
</template>

<style>

@font-face {
  font-family: "Digital";
  src: local("Digital"),
  url(./fonts/digital-7.ttf) format("truetype");
}
body, h1, h2, h3, h4, h5, h6, p, ul, li{ margin:0; }

a{ text-decoration: none !important;}

a:hover{ text-decoration: none !important;}

#ParticlesContainer{ position: fixed; width: 100vw; z-index: 100; background:#2A2A2A; }

#ApplicationContent{ position: absolute; width: 100%; z-index: 999; padding-top: 20px; padding-left: 20px; padding-right: 20px; }

.particles-js-canvas-el{ height: 100vh !important; }

.style-1{ width: 90%; border:2px solid #F5F5F5; border-radius: 4px; }

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
<script>
import ParticlesComponent from "@/components/ParticlesComponent";

export default {
  components: { ParticlesComponent }
}

</script>
