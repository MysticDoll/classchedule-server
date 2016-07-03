module.exports = 
`
<section class="schedules">
  <div class="schedule-row">
    <div class="schedule-cell schedule-days">
      <h4>月</h4>
    </div>
    <div class="schedule-cell schedule-days">
      <h4>火</h4>
    </div>
    <div class="schedule-cell schedule-days">
      <h4>水</h4>
    </div>
    <div class="schedule-cell schedule-days">
      <h4>木</h4>
    </div>
    <div class="schedule-cell schedule-days">
      <h4>金</h4>
    </div>
    <div class="schedule-cell schedule-days">
      <h4>土</h4>
    </div>
  </div>
  <div v-for="(index, period) in periods" class="schedule-row">
    <div class="schedule-cell schedule-period">
      <h4>{{index + 1}}</h4>
    </div>
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
  <button id="save" v-on:click="save()">保存</button>
  <button id="export" v-on:click="exportiCal()">ダウンロード</button>
</section> 
`;
