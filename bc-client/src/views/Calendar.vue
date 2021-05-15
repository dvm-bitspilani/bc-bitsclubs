<template>
    <div class="calendar">

        <div class="cal-header">Upcoming Events — Calendar</div>

         <div 
            class="calWeekC"
            v-for="calWeek in response"
            :key="calWeek.id"
        >
            <div class="calendar-block">
                <h2 class="cal-subh">{{ calWeek.label }}</h2>
                <div class="cal-grid">
                    <div 
                        v-for="calItem in calWeek.events"
                        :key="calItem.id"
                    >
                    <CalendarItem 
                        :imgSrc="calItem.imgSrc"
                        :eventName="calItem.eventName"
                        :date="calItem.date"
                        :link="calItem.link"
                        :description="calItem.description"
                    />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import CalendarItem from '@/components/CalendarItem.vue'
  export default {
    name: 'Calendar',
    components: {
      CalendarItem,
    }, 
    data() {
      return {
        response: [
          {
              id: 1,
              label: "11th May, 2021",
              events: [
              {
                id: 1,
                eventName: "DVM Airmeet Orientation",
                imgSrc: "https://avatars.githubusercontent.com/u/14038814?s=200&v=4",
                date: "4.00PM, 11/03/2021",
                link: "bit.ly/dvmorientation",
                description: "Events calendar (on homepage and clubs page): If any club is organizing a event, they can add it and it will show up on that calendar. ",
              },
              {
                id: 2,
                eventName: "DVM Airmeet Orientation",
                imgSrc: "https://avatars.githubusercontent.com/u/14038814?s=200&v=4",
                date: "4.00PM, 11/03/2021",
                link: "bit.ly/dvmorientation",
                description: "Events calendar (on homepage and clubs page): If any club is organizing a event, they can add it and it will show up on that calendar. ",
              },
              {
                id: 3,
                eventName: "DVM Airmeet Orientation",
                imgSrc: "https://avatars.githubusercontent.com/u/14038814?s=200&v=4",
                date: "4.00PM, 11/03/2021",
                link: "bit.ly/dvmorientation",
                description: "Events calendar (on homepage and clubs page): If any club is organizing a event, they can add it and it will show up on that calendar. ",
              },
            ]
          },
          {
              id: 2,
              label: "13th May, 2021",
              events: [
              {
                id: 1,
                eventName: "DVM Airmeet Orientation",
                imgSrc: "https://avatars.githubusercontent.com/u/14038814?s=200&v=4",
                date: "4.00PM, 11/03/2021",
                link: "bit.ly/dvmorientation",
                description: "Events calendar (on homepage and clubs page): If any club is organizing a event, they can add it and it will show up on that calendar. ",
              },
              {
                id: 2,
                eventName: "DVM Airmeet Orientation",
                imgSrc: "https://avatars.githubusercontent.com/u/14038814?s=200&v=4",
                date: "4.00PM, 11/03/2021",
                link: "bit.ly/dvmorientation",
                description: "Events calendar (on homepage and clubs page): If any club is organizing a event, they can add it and it will show up on that calendar. ",
              },
            ]
          }
        ],
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
    }
    .cal-header{
        font-size: 32px;
        color: white;
        font-weight: 500;
        padding: 30px 0 30px 0;
    }
</style> 