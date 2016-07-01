module.exports = 
`
<section class="schedules">
  <div v-for="period in periods" class="schedule-row">
    <div v-for="schedule in period" class="schedule-cell">
      <div class="schedule-title">
        <h4>講義名</h4>
        <input class="schedule title" type="text" id="title" v-model="schedule.title">
      </div>
      <div class="schedule-location">
        <h4>教室</h4>
        <input class="schedule location" type="text" id="title" v-model="schedule.location">
      </div>
    </div>
  </div>
  <button id="save" v-on:click="save()">Save</button>
  <button id="export" v-on:click="exportiCal()">export</button>
</section> 
`;
