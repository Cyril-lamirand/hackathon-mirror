<template>
  <div id="CalendarComponent">
    <div class="col-12" id="HeaderCalendar">
      <H2>Calendrier - Octobre</H2>
    </div>
    <div class="container-fluid">
      <calendar-view
          :show-date="showDate"
          class="theme-default holiday-us-traditional holiday-us-official">
        <calendar-view-header
            slot="header"
            slot-scope="t"
            :header-props="t.headerProps"
            startingDayOfWeek="1"
            @input="setShowDate" />
            @click-date([date, calendarItems, windowEvent])
      </calendar-view>


    </div>
    <!-- Navigation Fixe : BAS -->
    <Navbar/>
  </div>
</template>

<script>
import Navbar from "@/views/Navbar";
import { CalendarView, CalendarViewHeader } from "vue-simple-calendar"
// The next two lines are processed by webpack. If you're using the component without webpack compilation,
// you should just create <link> elements for these. Both are optional, you can create your own theme if you prefer.
require("vue-simple-calendar/static/css/default.css")
require("vue-simple-calendar/static/css/holidays-us.css")

export default {
name: "CalendarComponent",
  data: function() {
    return { showDate: new Date() }
  },
  components: {
    CalendarView,
    CalendarViewHeader,
    Navbar
  },
  methods: {
    setShowDate(d) {
      this.showDate = d;
    },
  }
}
</script>

<style scoped>

#CalendarComponent{}

#HeaderCalendar{
  width: 100%;
  height: 80px;
  background-color: rgba(12,12,12,0.8);
  display: flex;
  justify-content: center;
  color: #F5F5F5;
  padding-top:20px;
  text-transform: uppercase;
}

.div-14{ width: 14.28%; height: 250px; padding: 5px; margin-top:20px; }

.contentCalendar{ background-color: rgba(12,12,12,0.8);; height: 100%; padding-top: 15px; padding-left: 10px; padding-right: 10px; border-radius: 8px; }

h3{ color: #F5F5F5; font-size: 22px; }

hr{ border:1px solid white; }

.c-grey{ background-color: #4e555b !important; }

.c-end{ background-color: #2c3e50 !important; }

.c-now{ background-color: #0f6674 !important; }

ul, li, p{ color: #F5F5F5; }


</style>
