<template>
  <div class="page">
    <div class="left">
      <FullCalendar
        ref="fullCalendar"
        default-view="dayGridMonth"
        locale="zh-cn"
        :header="{
          center: '',
          right: 'prev,next today',
          left: 'title',
        }"
        editable="true"
        selectable="true"
        select-mirror="true"
        :show-non-current-dates="false"
        :button-text="buttonText"
        :plugins="calendarPlugins"
        :weekends="calendarWeekends"
        :events="getCalendarEvents"
        :event-limit="true"
        event-limit-text="更多"
        style="width: 97%;background-color: white;padding: 20px;"
        @dateClick="handleDateClick"
        @eventClick="handleEventClick"
        @eventMouseEnter="detailView"
        @eventMouseLeave="move"
      />
      <el-dialog title="" :visible.sync="dialogFormVisible">
        <div style="font-size: 2em;margin-left: 20px;color: black;text-align: left">添加咨询师<div style="color: #6a6f77;font-size: 15px">为选中日期添加值班咨询师</div></div>
        <el-form label-position="top" label-width="80px" size="medium " :model="form" inline="true" style="text-align: center;margin: 20px">
          <el-form-item label=""><div style="text-align: left">选择咨询师</div>
            <el-select v-model="form.name" style="width: 620px" placeholder="请选择咨询师">
              <el-option label="区域一" value="shanghai" />
              <el-option label="区域二" value="beijing" />
            </el-select>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
        </div>
      </el-dialog>

    </div>
    <div class="right">
      <div class="time_now">
        {{ this.yearMD }}
      </div>
      <div class="table">table</div>
    </div>
  </div>
</template>
<script>
import FullCalendar from '@fullcalendar/vue'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'

export default {
  name: 'Schedule',
  components: {
    FullCalendar
  },
  data() {
    return {
      form: {
        name: ''
      },
      yearMD: '',
      dialogFormVisible: false,
      devices: [],
      text: '',
      isAdd: null,
      buttonText: {
        today: '今天',
        month: '月',
        week: '周',
        day: '天',
        list: '列表'
      },
      calendarPlugins: [ // plugins must be defined in the JS
        dayGridPlugin,
        timeGridPlugin,
        interactionPlugin // needed for dateClick
      ],
      calendarWeekends: true,
      calendarEvents: [ // initial event data
        {
          title: 'demo',
          start: 1646064000000
        },
        {
          title: 'demo',
          start: 1646064000000
        },
        {
          title: 'demo',
          start: 1646064000000
        },
        {
          title: 'demo',
          start: 1646064000000
        }
      ],
      calendarApi: null
    }
  },
  mounted() {
    const that = this
    // 定时器
    setInterval(() => {
      that.getDateFunc()
    }, 1000)
  },
  methods: {
    handleDateClick(arg) {
      console.log(arg)
      this.dialogFormVisible = true
    },
    // getCalendarEvents(info, successCallback, failureCallback) {
    //   console.log(info.startStr)
    //   console.log(info.start.valueOf())
    //   const events = [
    //     ...this.calendarEvents,
    //     {
    //       title: info.startStr,
    //       start: info.start.valueOf()
    //     }
    //   ]
    //   successCallback(events)
    // }
    getDateFunc() {
      // const year = new Date().getFullYear()
      const month = new Date().getMonth() + 1
      const day = new Date().getDate()
      const week = new Date().getDay()
      const weeks = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']
      console.log(week)
      this.yearMD =
        (month >= 10 ? month : '0' + month) +
        '月' +
        (day >= 10 ? day : '0' + day) +
        '日' +
        weeks[week]
    }
  }

}
</script>

<style lang="scss" scoped>
@import '~@fullcalendar/core/main.css';
@import '~@fullcalendar/daygrid/main.css';
@import '~@fullcalendar/timegrid/main.css';
.page{
  position: relative;
  width: 98%;
  height: 96%;
  text-align: center;
  .left{
    width: 80%;
    position: absolute;
    left: 20px;
    top: 20px;
    height: 97%;
    overflow: auto;
    //background-color: black;
  }
  .right{
    position: absolute;
    background-color: white;
    width: 20%;
    right: 0px;
    top: 20px;
    height: 97%;
    .time_now{
      width: 100%;
      font-size: 1.5em;
      padding: 20px;
      border-bottom: rgba(0,0,0,0.2) 1px solid;
    }
  }
}

</style>
