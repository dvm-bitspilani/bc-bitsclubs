<template>
    <div class="calendar">

        <div class="cal-header">Upcoming Events — Calendar</div>

         <div 
            class="calWeekC"
            v-for=" calItem in events"
            :key="calItem.date"
        >
            <div class="calendar-block">
                <h2 class="cal-subh">{{ calItem.date }}</h2>
                <div class="cal-grid">
                   
                    <CalendarItem 
                        :imgSrc="calItem.featureImage"
                        :eventName="calItem.eventName"
                        :date="calItem.date"
                        :link="calItem.link"
                        :description="calItem.eventDescription"
                    />

                    
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import CalendarItem from '@/components/CalendarItem.vue'
import axios from 'axios'
  export default {
    name: 'Calendar',
    components: {
      CalendarItem,
    }, 
    data() {
      return {
    	events: [],
   error: null,
          } },

  async mounted () {
    try {
      const response = await axios.get('http://localhost:1337/events')
      this.events = response.data
    } catch (error) {
      this.error = error;
    }
  }
  }
</script>


<style scoped>
    .calendar {
        display: flex;
        flex-direction: column;
        margin: 0px 60px 0 60px;
    }
    .cal-grid {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: flex-start;
        align-items: center;
        margin-left: -15px;
     
    }
    .cal-subh {
        font-size: 24px;
        color: white;
        text-align: left;
        letter-spacing: 0.4px;
    }
    .cal-header{
        font-size: 34px;
        color: white;
        font-weight: 500;
        padding: 30px 0 30px 0;
        letter-spacing: 0.8px;
    }





    @media (max-width:650px) {

  
    .cal-header{
    font-size: 7vw;
     }

    .cal-grid{
    margin-left: 0px;
    justify-content:space-around
     }

    }
</style> 