<template>
  <div class="cal-main">
    <div class="cal-item" @click.prevent="show">
      <div class="title-section">
        <img class="cal-logo" :src="imgSrc" />
        <div class="title-text">
          <h1 class="cal-name">{{ eventName }}</h1>
          <h2 class="cal-date">{{ date | moment("MMMM Do YYYY") }}</h2>

          <div class="further-details">
            <div class="club-link">
              <a :href="link">
                <svg
                  version="1.0"
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
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
                </svg>
              </a>
            </div>
            <div class="club-details">
              <a @click.prevent="show">
                <h1 id="pill-details" class="pill">Details</h1>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="cal-description">
        <p>{{ shortDescription }}</p>
      </div>
    </div>

    <modal
      :name="modalName"
      :scrollable="true"
      :height="600"
      :focusTrap="false"
      :adaptive="true"
      classes="modal-override"
      class="mainModal"
    >
      <div class="modal-wrapper">
        <div class="event-info">
          <img :src="imgSrc" />
          <div class="event-name">
            <h3>{{ eventName }}</h3>

            <h4>{{ date | moment("MMMM Do YYYY") }}</h4>
            <a :href="link">Register</a>
          </div>
        </div>
        <div class="event-desc">
          <p>{{ description }}</p>
        </div>
      </div>
    </modal>
  </div>
</template>

<script>
export default {
  name: "CalendarItem",
  props: [
    "imgSrc",
    "eventName",
    "date",
    "link",
    "description",
    "modalName",
    "shortDescription",
  ],

  methods: {
    show() {
      this.$modal.show(this.modalName);
    },
  },
};
</script>


<style scoped>
.further-details {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  margin-top: 16px;
}

.further-details div {
  margin: 0 4px;
}
.modal-wrapper img {
  width: 200px;
  height: 200px;
}

#pill-details {
  background: #e28214;
}

.modal-wrapper {
  display: flex;
  flex-direction: column;
  padding: 40px;
}

.modal-wrapper h4 {
  font-size: 20px;
}
.event-desc {
  text-align: left;
  margin-top: 40px;
}

.event-info {
  display: flex;
  flex-direction: row;
  /* justify-content: space-evenly; */
}

.event-name {
  display: flex;
  flex-direction: column;
  margin-left: 40px;
  text-align: left;
}
.event-name a {
  /* text-decoration: none; */
  color: white;
  font-weight: 600;
}

.event-name h3 {
  font-size: 20px;
  text-transform: capitalize;

}

.club-link {
  z-index: 10;
  justify-content: center;
  display: flex;
  align-items: center;
  align-self: baseline;
}
.pill {
  margin: 7px 2px 0px 2px;
  padding: 2px 10px 2px 10px;
  background: #616161;
  color: white;
  border-radius: 25px;
  font-size: 16px;
  display: inline-block;
  font-weight: 500;
  transition: transform 300ms;
  cursor: pointer;
}

#pill-link {
  background: #061499;
}

.cal-item {
  width: 340px;
  height: 100%;
  padding: 10px;
  margin: 15px 10px 15px 0px;
  background: #2f2f2f;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  transition: transform 300ms;
  padding-left: 20px;
  box-shadow: 7px 6px 20px -4px rgb(0 0 0 / 75%);
  cursor: pointer;
}

.cal-item:hover {
  transform: translateY(-5px);
}

.title-section {
  display: flex;
  flex-direction: row;
  margin: 10px 10px 0px 5px;
  height: 50%;
}

.cal-logo {
  height: 106px;
  width: 106px;
  margin-top: 5px;
  border-radius: 10px;
}

.cal-name {
  margin: 0;
  padding-bottom: 10px;
  text-align: left;
  color: white;
  font-weight: 500;
  font-size: 23px;
  letter-spacing: 0.5px;
}

.cal-date,
.cal-link {
  margin: 0;
  padding: 0px;
  text-align: left;
  color: white;
  font-weight: 400;
  font-size: 16px;
}

.cal-link {
  color: #7db7da;
}

.title-text {
  display: flex;
  margin: 0px 15px;
  padding: 0;
  flex-direction: column;
}

.cal-description {
  margin: 5px 5px 0px 5px;
  padding: 0;
  align-content: flex-start;
  justify-content: left;
  text-align: left;
  flex-wrap: wrap;
  color: white;
  line-height: 1.45;
  font-size: 15px;
}


@media (max-width: 650px) {
  .vm--modal {
    width: 200px !important;
  }
  .modal-wrapper img {
    width: 100px;
    height: 100px;
  }
  .cal-item {
    width: 300px;
    text-align: left;
  }

  .cal-name {
    font-size: 16px;
    font-weight: 800;
  }

  .cal-date,
  .cal-link {
    font-size: 13px;
    font-weight: 500;
    padding: 1.8px;
  }

  .cal-description {
    font-size: 12px;
  }
  .event-name h3 {
    font-size: 16px;
  }

  .modal-wrapper h4 {
  font-size: 16px;
}
  .event-desc p{
    font-size: 14px;
  }
}
</style>

