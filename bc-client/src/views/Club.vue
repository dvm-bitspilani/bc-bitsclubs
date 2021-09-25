<template>
  <div class="club">
    <div class="club-header">
      <div class="club-info">
        <div class="clublogo">
          <img
            class="club-logo"
            alt=""
          />
        </div>

        <div class="club-info-text">
          <h1 class="club-title">{{ club.name }}</h1>
          <div class="tags-section" id="desktop-tags">
            <div v-for="tag in club.tags" :key="tag.id">
              <AllTags :name="tag.tagtitle" />
            </div>
          </div>
        </div>
      </div>
      <div class="club-status">
        <a href="https://google.com" v-if="club.isrecruiting"
          ><h1 id="recr-true" class="status-pill">
            RECRUITING
            <svg
              version="1.0"
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="20"
              viewBox="0 0 512.000000 512.000000"
              preserveAspectRatio="xMidYMid meet"
            >
              <g
                transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                fill="#ffffff"
                stroke="none"
              >
                <path
                  d="M3467 5104 c-154 -28 -292 -85 -422 -175 -47 -33 -308 -287 -800
-781 -659 -661 -735 -741 -779 -816 -182 -308 -203 -676 -56 -989 53 -114 102
-185 195 -282 100 -104 174 -157 306 -220 131 -63 237 -91 364 -98 l100 -5
272 274 c217 219 273 280 281 311 28 102 -66 203 -171 183 -19 -4 -62 -29 -98
-58 -78 -63 -150 -95 -235 -107 -296 -42 -552 215 -507 509 23 150 2 124 765
891 734 737 727 731 853 764 307 80 604 -186 555 -498 -21 -134 -51 -180 -265
-397 l-192 -195 97 -95 c102 -100 162 -178 233 -303 l44 -77 224 227 c233 237
304 326 364 457 265 571 -20 1238 -615 1441 -155 53 -354 68 -513 39z"
                />
                <path
                  d="M2498 3133 c-244 -246 -277 -283 -284 -318 -10 -54 12 -111 58 -148
30 -24 46 -29 87 -29 54 0 58 2 153 76 294 228 720 18 720 -354 0 -84 -25
-173 -68 -243 -14 -23 -339 -355 -722 -737 -735 -734 -733 -732 -857 -765
-308 -80 -608 192 -556 502 22 132 53 176 279 405 l204 206 -89 89 c-103 101
-184 205 -242 313 l-40 74 -238 -239 c-249 -250 -316 -333 -378 -469 -185
-400 -105 -872 201 -1181 134 -136 301 -232 489 -282 89 -23 118 -26 260 -26
141 0 172 3 257 26 119 31 243 89 340 156 50 35 300 278 804 783 808 810 790
789 873 1003 63 159 84 282 78 450 -5 159 -30 264 -95 395 -71 145 -228 323
-364 413 -146 96 -329 159 -503 172 l-90 7 -277 -279z"
                />
              </g>
            </svg></h1
        ></a>
        <h1 id="recr-false" class="status-pill" v-else>NOT RECRUITING</h1>
      </div>

      <div class="tags-section" id="mobile-tags">
        <div v-for="tag in club.tags" :key="tag.id">
          <AllTags :name="tag.tagtitle" />
        </div>
      </div>
    </div>

    <div class="club-text">
      <h2 class="club-subh">About Us</h2>
      <p class="club-p">{{ club.about }}</p>
    </div>

    <div class="club-calendar">
      <h2 class="club-subh" id="media">Upcoming Events</h2>
      <div class="cal-grid">
        <div v-for="calItem in club.events" :key="calItem.id">
          <!-- <CalendarItem
            :imgSrc="calItem.featureImage.url"
            :eventName="calItem.eventName"
            :date="calItem.date"
            :link="calItem.link"
            :description="calItem.eventDescription"
            :modalName="calItem.eventName"
          /> -->
        </div>
      </div>
    </div>

    <div>
      <h2 class="club-subh" id="media">Portfolio and Past Work</h2>
      <div class="media-slider">
        <div v-for="item in club.portfolio" :key="item.id">
          <Feature :imgSrc="item.url" />
        </div>
      </div>
    </div>

    <div class="club-text">
      <h2 class="club-subh">Perks of Applying</h2>
      <p class="club-p">{{ club.perks }}</p>
    </div>

    <div class="recruitment">
      <div class="club-text">
        <h2 class="club-subh">Recruitment Process</h2>
        <p class="club-p">{{ club.recruitmentProcess }}</p>
      </div>
    </div>

    <div>
      <h2 class="club-subh" id="media">Gallery</h2>
      <div class="media-slider">
        <div v-for="item in club.portfolio" :key="item.id">
          <Feature :imgSrc="item.url" />
        </div>
      </div>
    </div>

    <div class="club-text">
      <h2 class="club-subh">Frequently Asked Questions</h2>
      <p class="club-p">{{ club.perks }}</p>
    </div>

    <div class="club-contact">
      <h2 class="club-subh" id="media">Contact Us</h2>
      <div class="contact-grid">
        <ContactCard
        v-for="contact in club.contacts" :key="contact.id"
            :imgSrc="contact.photo"  
            :name="contact.name"
            :email="contact.email"
          />
      </div>
    </div>
  </div>
</template>

<script>
import Feature from "@/components/Feature.vue";
import CalendarItem from "@/components/CalendarItem.vue";
import ContactCard from "@/components/ContactCard.vue";
import axios from "axios";
import AllTags from "@/components/AllTags.vue";
export default {
  name: "Club",
  components: {
    Feature,
    CalendarItem,
    ContactCard,
    AllTags,
  },
  data() {
    return {
      id: this.$route.params.id,
      club: {},
      error: null,
    };
  },
  async mounted() {
    try {
      const response = await axios.get(
        "https://clubs.bits-dvm.org/items/clubs/" + this.id
      );
      this.club = response.data.data;
      console.log(this.club);
    } catch (error) {
      this.error = error;
    }
  },
};
</script>

<style scoped>
#mobile-tags {
  display: none;
}

.club {
  margin: 40px 60px 40px 70px;
}

.club-header,
.club-info {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.club-logo {
  height: 120px;
  width: 120px;
  border-radius: 15px;
  box-shadow: -8px 11px 45px 1px rgba(0, 0, 0, 0.52);
  -webkit-box-shadow: -8px 11px 45px 1px rgba(0, 0, 0, 0.52);
  -moz-box-shadow: -8px 11px 45px 1px rgba(0, 0, 0, 0.52);
}

.club-info-text {
  margin-left: 30px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin-top: -8px;
}
#media {
  margin-left: 150px;
}

.tags-section {
  display: flex;
  margin-left: -5px;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  flex-wrap: wrap;
}

.tag {
  margin: 5px 3px 5px 3px;
  padding: 3px 13px 3px 13px;
  background: #616161;
  color: white;
  border-radius: 25px;
  font-size: 16px;
  text-transform: uppercase;
  display: inline-block;
  font-weight: 500;
}

.club-title {
  font-size: 46px;
  margin: 0;
  padding: 0;
  color: white;
  letter-spacing: 1.3px;
}

.club-status {
  justify-content: center;
  display: flex;
  align-items: center;
}
.status-pill {
  margin: 0px 6px 0px 6px;
  padding: 6px 20px 6px 20px;
  background: #616161;
  color: white;
  border-radius: 25px;
  font-size: 23px;
  text-transform: uppercase;
  display: inline-block;
  font-weight: 500;
  transition: transform 300ms;
  cursor: default;
}

#recr-true {
  background: #19d00a;
  box-shadow: rgba(104, 255, 70, 0.15) 0px 8px 24px;
  cursor: pointer;
}

#recr-false {
  background: rgb(255, 0, 0);
  box-shadow: rgba(255, 101, 101, 0.2) 0px 8px 24px;
}

.club-text {
  width: 60vw;
  display: flex;
  flex-direction: column;
  margin-left: 150px;
}

.club-subh {
  margin: 50px 0 10px 0;
  padding: 0;
  color: white;
  text-align: left;
  font-size: 30px;
  letter-spacing: 0.8px;
}

.club-p {
  margin: 0px 0 10px 11px;
  padding: 0;
  color: white;
  text-align: left;
  font-size: 19px;
  font-weight: 400;
  letter-spacing: 0.4px;
}

.media-slider {
  display: flex;
  flex-direction: row;
  overflow-x: scroll;
  margin-left: 162px;
}

*::-webkit-scrollbar {
  height: 8px;
}

*::-webkit-scrollbar-track {
  background-color: rgba(248, 248, 248, 0.35);
  border-radius: 10px;
}

*::-webkit-scrollbar-thumb {
  background-color: rgba(248, 248, 248, 0.77);
  border-radius: 10px;
}

.cal-grid {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  margin-left: 153px;
}

.contact-grid {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  margin-left: 162px;
}

@media (max-width: 650px) {
  #mobile-tags {
    display: unset;
  }

  .club {
    margin: 0px;
  }

  .club-header {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .club-info-text {
    align-items: center;
    padding: 10px 0;
    margin-left: 0px;
  }

  .club-info {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .club-subh {
    text-align: left;
    font-size: 28px;
  }

  .club-title {
    font-size: 5.5vw;
    text-align: center;
  }

  .status-pill {
    font-size: 15px;
    text-align: center;
  }

  .tags-section {
    padding-top: 14px;
  }

  .tag {
    font-size: 12px;
  }

  .club-text {
    width: 88vw;
    margin-left: 0px;
    padding-left: 32px;
  }

  .media-slider,
  #media {
    padding-right: 20px;
    padding-left: 32px;
    margin-left: 0;
  }

  .club-p {
    font-size: 15px;
    padding-right: 20px;
    margin-left: 0;
    letter-spacing: 0;
  }

  .cal-grid {
    justify-content: flex-start;
    margin-left: 22px;
  }

  .contact-grid {
    justify-content: flex-start;
    margin-left: 20%;
  }

  #desktop-tags {
    display: none;
  }
}
</style>
