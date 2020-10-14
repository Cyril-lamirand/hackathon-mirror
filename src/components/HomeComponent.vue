<template>
  <div id="">
    <div class="col-12">
      <router-link to="/Weather">
        <WeatherWidget/>
      </router-link>
    </div>
    <div class="container-fluid">
      <div class="col-12">
        <div class="text-center">
          <Time/>
        </div>
      </div>
      <div class="row" id="WidgetContainer">
        <div class="col-6">
          <div class="widget_home">
            <div class="container">
              <router-link to="/Medical">
                <div class="row">
                  <div class="col-4">
                    <div class="text-center">
                      <h2><i class="fas fa-heartbeat"></i></h2>
                    </div>
                  </div>
                  <div class="col-8">
                    <h3>Suivi<br>Médical</h3>
                  </div>
                </div>
              </router-link>
            </div>
          </div>
        </div>
        <div class="col-6">
          <div class="widget_home">
            <div class="container">
              <router-link to="/Calendar">
                <div class="row">
                    <div class="col-8">
                      <div>
                        <h3>Votre<br>Agenda</h3>
                      </div>
                    </div>
                    <div class="col-4">
                      <div class="text-center">
                        <h2><i class="fas fa-calendar-alt"></i></h2>
                      </div>
                    </div>
                </div>
              </router-link>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-6">
          <div class="widget_home">
            <div class="container">
              <router-link to="/Notes">
                <div class="row">
                  <div class="col-4">
                    <div class="justify-content-center">
                      <h2><i class="fas fa-sticky-note"></i></h2>
                    </div>
                  </div>
                  <div class="col-8">
                    <h3>Notes<br>Personnelles</h3>
                  </div>
                </div>
              </router-link>
            </div>
          </div>
        </div>
        <div class="col-6">
          <div class="widget_home">
            <div class="container">
              <router-link to="/Settings">
                <div class="row">
                  <div class="col-8">
                    <div>
                      <h3>Les<br>Paramètres</h3>
                    </div>
                  </div>
                  <div class="col-4">
                    <div class="text-center">
                      <h2><i class="fas fa-cog"></i></h2>
                    </div>
                  </div>
                </div>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Barre de Navigation : BAS -->
    <Navbar/>
  </div>

</template>

<script>
import Navbar from "@/views/Navbar";
import Time from "@/views/Time";
import WeatherWidget from "@/views/WeatherWidget";

export default {
  name: 'HomeComponent',
  components: {Navbar, Time, WeatherWidget }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

h2, h3, h6{ color: #f5f5f5; text-shadow: 0px 0px 2px rgba(0, 0, 0, 1); }

h2{ font-size: 100px;}

h2, h3{
  display: flex;
  align-items: center;
  height: 300px;
}

h3{ font-size: 45px;}

h6{ font-size: 96px;}

#WidgetContainer{ padding-top: 50px;}

.widget_home{ width:100%; height: 300px; background-color: rgba(12,12,12,0.8); border-radius: 16px; margin-top: 25px; }
</style>
