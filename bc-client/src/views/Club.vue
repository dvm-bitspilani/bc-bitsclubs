<template>
  <div class="club">

    <div class="club-header">
      <div class="club-info">
        <img 
          class="club-logo"
          :src="response[0].imgSrc" 
          alt=""
        >

        <div class="club-info-text">
          <h1 class="club-title">{{ response[0].name }}</h1>
          <div class="tags-section">
              <h2 class="tag">{{ response[0].tag1 }}</h2>
              <h2 class="tag">{{ response[0].tag2 }}</h2>
              <h2 class="tag">{{ response[0].tag3 }}</h2>
          </div>

        </div>
        
      </div>

      <div class="club-status">
        <h1 id="recr-true" class="status-pill" v-if="response[0].isRecruiting">RECRUITING</h1>
        <h1 id="recr-false" class="status-pill" v-else>NOT RECRUITING</h1>
      </div>
    </div>

    <div class="club-text">
      <h2 class="club-subh">About Us</h2>
      <p class="club-p">{{ response[0].about }}</p>
    </div>

    <div class="club-calendar">
      <h2 class="club-subh">Upcoming Events</h2>
    </div>

    <div>
      <h2 class="club-subh">Portfolio and Past Work</h2>
      <div class="media-slider">
        <div 
        v-for="item in response[0].portfolio"
        :key="item.id"
        >
          <Feature
            :imgSrc="item.imgSrc" />
        </div>
      </div>
    </div>

    <div class="club-text">
      <h2 class="club-subh">Perks of Applying</h2>
      <p class="club-p">{{ response[0].perks }}</p>
    </div>

    <div class="recruitment">
      <div class="club-text">
        <h2 class="club-subh">Recruitment Process</h2>
        <p class="club-p">{{ response[0].recruitment }}</p>
      </div>
      <div class="info-form">{{ response[0].form }}</div>
    </div> 

    <div>
      <h2 class="club-subh">Gallery</h2>
      <div class="media-slider">
        <div 
        v-for="item in response[0].portfolio"
        :key="item.id"
        >
          <Feature
            :imgSrc="item.imgSrc" />
        </div>
      </div>
    </div>

    <div class="club-text">
      <h2 class="club-subh">Frequently Asked Questions</h2>
      <p class="club-p">{{ response[0].faq }}</p>
    </div>   

    <div class="club-contact">
      <h2 class="club-subh">Contact Us</h2>
    </div>   

  </div>
</template>

<script>
import Feature from '@/components/Feature.vue'

  export default {
    name: 'Club',
    components: {
      Feature
    }, 
    data() {
      return {
        response: [
          {
            id: 1,
            imgSrc: "https://avatars.githubusercontent.com/u/14038814?s=200&v=4",
            name: "Department of Visual Media",
            type: "department",
            about: "DVM is BITS Pilani’s department in-charge of all technical, website, design, animation, and video related for the Oasis and Apogee fests. We are responsible for the official app and websites. DVM is BITS Pilani’s department in-charge of all technical, website, design, animation, and video related for the Oasis and Apogee fests. We are responsible for the official app and websites.  DVM is BITS Pilani’s department in-charge of all technical, website, design, animation, and video related for the Oasis and Apogee fests.",
            isRecruiting: true,
            tag1: "FRONTEND DEVELOPMENT",
            tag2: "UI/UX DESIGN",
            tag3: "BACKEND DEVELOPMENT",
            tag4: "VIDEO EDITING",
            perks: "DVM is BITS Pilani’s department in-charge of all technical, website, design, animation, and video related for the Oasis and Apogee fests. We are responsible for the official app and websites. DVM is BITS Pilani’s department in-charge of all technical, website, design, animation, and video related for the Oasis and Apogee fests. We are responsible for the official app and websites.  DVM is BITS Pilani’s department in-charge of all technical, website, design, animation, and video related for the Oasis and Apogee fests. ",
            recruitment: "DVM is BITS Pilani’s department in-charge of all technical, website, design, animation, and video related for the Oasis and Apogee fests. We are responsible for the official app and websites. DVM is BITS Pilani’s department in-charge of all technical, website, design, animation, and video related for the Oasis and Apogee fests. BITS Pilani’s department in-charge of all technical, website, design, animation, and video related for the Oasis and Apogee fests. ",
            form: "https://forms.google.com/",
            faq: "",
            contact: [
              {
                id: 1,
                name: "Parth Sharma",
                designation: "Frontend Developer",
                imgSrc: "https://avatars.githubusercontent.com/u/14038814?s=200&v=4",
              },
              {
                id: 2,
                name: "Parth Sharma",
                designation: "Frontend Developer",
                imgSrc: "https://avatars.githubusercontent.com/u/14038814?s=200&v=4",
              },
              {
                id: 3,
                name: "Parth Sharma",
                designation: "Frontend Developer",
                imgSrc: "https://avatars.githubusercontent.com/u/14038814?s=200&v=4",
              },
            ],
            portfolio: [
              {
                id: 1,
                imgSrc: "https://images.unsplash.com/photo-1575405070791-081b3a960ce8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
              },
              {
                id: 2,
                imgSrc: "https://images.unsplash.com/photo-1575405070791-081b3a960ce8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
              },
              {
                id: 3,
                imgSrc: "https://images.unsplash.com/photo-1575405070791-081b3a960ce8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
              },
              {
                id: 4,
                imgSrc: "https://images.unsplash.com/photo-1575405070791-081b3a960ce8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
              },
              {
                id: 5,
                imgSrc: "https://images.unsplash.com/photo-1575405070791-081b3a960ce8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
              },
              {
                id: 6,
                imgSrc: "https://images.unsplash.com/photo-1575405070791-081b3a960ce8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
              },
            ]
          }
        ],
      }
    }
  }
</script>


<style scoped>

  .club {
    margin: 40px 60px 40px 60px;
  }

  .club-header, .club-info {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .club-logo {
    height: 120px;
    width: 120px;
    border-radius: 15px;
  }
  
  .club-info-text {
    margin-left: 30px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
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
    color:white;
    border-radius: 25px;
    font-size: 16px;
    text-transform: uppercase;
    display: inline-block;
    font-weight: 500;
  }

  .club-title {
    font-size: 48px;
    margin: 0;
    padding: 0;
    color: white;
  }

  .club-status {
    margin-right: 0px;
    justify-content: center;
    display: flex;
    align-items: center;
  }

  .status-pill {
    margin: 10px 56px 10px 6px;
    padding: 6px 20px 6px 20px;
    background: #616161;
    color:white;
    border-radius: 25px;
    font-size: 28px;
    text-transform: uppercase;
    display: inline-block;
    font-weight: 500;
    transition: transform 300ms;
    cursor: pointer;
  }

  .status-pill:hover {
    transform: translateY(-5px);
  }

  #recr-true {
    background:rgb(0, 255, 13);
    box-shadow: rgba(104, 255, 70, 0.15) 0px 8px 24px;
  }
  
  #recr-false {
    color:rgb(255, 0, 0);
    box-shadow: rgba(255, 101, 101, 0.2) 0px 8px 24px;
  }

  .club-text {
    width: 60vw;
    display: flex;
    flex-direction: column;
  }

  .club-subh {
    margin: 50px 0 10px 0;
    padding: 0;
    color: white;
    text-align: left;
    font-size: 28px;
  }

  .club-p {
    margin: 0px 0 10px 0;
    padding: 0;
    color: white;
    text-align: left;
    font-size: 19px;
    font-weight: 400;
  }

  .media-slider {
    display: flex;
    flex-direction: row;
    overflow-x: scroll;
  }

  * {
    scrollbar-width: thin;
    scrollbar-color: blue orange;
  }

  /* Works on Chrome, Edge, and Safari */
  *::-webkit-scrollbar {
    width: 10px;
    height: 20px;
  }

  *::-webkit-scrollbar-track {
    background:#1f1f1f;
    border-radius: 10px;
  }

  *::-webkit-scrollbar-thumb {
    background-color: #2f2f2f;
    border-radius: 10px;
  }
</style>