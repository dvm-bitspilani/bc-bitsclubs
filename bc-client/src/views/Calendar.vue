<template>
      <div class="calendar">
            <div class="cal-header">Upcoming Events — Calendar</div>

            <div
                  class="calWeekC"
                  v-for="(value, key, index) in random"
                  :key="index"
            >
                  <div class="calendar-block">
                        <h2 class="cal-subh">{{ key }}</h2>
                        <div class="cal-grid">
                              <CalendarItem
                                    v-for="calItem in value"
                                    :key="calItem.id"
                                    :imgSrc="'https://clubs.bits-dvm.org/assets/'+ calItem.eventfeatureimage"
                                    :eventName="calItem.eventname"
                                    :date="calItem.eventdatetime"
                                    :link="calItem.eventlink"
                                    :description="calItem.eventdesc"
                                    :modalName="calItem.eventname"
                                    :shortDescription="calItem.eventshortdesc"
                              />
                        </div>
                  </div>
            </div>
      </div>
</template>

<script>
import CalendarItem from "@/components/CalendarItem.vue";
import axios from "axios";

export default {
      name: "Calendar",
      components: {
            CalendarItem,
      },

      data() {
            return { random: {}, events: [], error: null, random_new: {} };
      },

      async mounted() {
            try {
                  const response = await axios.get(
                        "https://clubs.bits-dvm.org/items/events"
                  );
                  this.events = response.data.data;
                  console.log(this.events);

                  this.events.forEach((event) => {
                        console.log(event);
                        let eventDate = new Date(event.eventdatetime);
                        console.log(eventDate);
                        let currentDate = new Date().getDate();
                        // let eventMonth = eventDate.getMonth();
                        let month = eventDate.toLocaleString("default", {
                              month: "short",
                        });
                        let year = eventDate.getFullYear();
                        let identifier = `${month} ${year}`;

                        if (eventDate >= currentDate) {
                              try {
                                    this.random_new[identifier].push(event);
                                    this.random = Object.assign(
                                          {},
                                          this.random,
                                          this.random_new
                                    );
                              } catch (error) {
                                    this.random_new[identifier] = [];
                                    this.random_new[identifier].push(event);

                                    this.random = Object.assign(
                                          {},
                                          this.random,
                                          this.random_new
                                    );
                              }
                        }
                  });
            } catch (error) {
                  this.error = error;
                  console.log(error);
            }
            console.log(this.random);
      },
};
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
.cal-header {
      font-size: 34px;
      color: white;
      font-weight: 500;
      padding: 30px 0 30px 0;
      letter-spacing: 0.8px;
}

@media (max-width: 650px) {
      .cal-header {
            font-size: 7vw;
      }

      .cal-grid {
            margin-left: 0px;
            justify-content: space-around;
      }
}
</style>
