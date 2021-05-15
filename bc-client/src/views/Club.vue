<template>
  <div class="club">

    <div class="club-header">
      <div class="club-info">
        <img 
          class="club-logo"
          :src="response[0].imgSrc" 
          alt=""
        >
        <h1 class="club-title">{{ response[0].name }}</h1>
        <div class="tags-section">
            <h2 class="tag">{{ response[0].tag1 }}</h2>
            <h2 class="tag">{{ response[0].tag2 }}</h2>
            <h2 class="tag">{{ response[0].tag3 }}</h2>
        </div>
      </div>

      <div class="club-status">
        <h1 v-if="response[0].isRecruiting">RECRUITING</h1>
        <h1 v-else>NOT RECRUITING</h1>
      </div>
    </div>

    <div class="club-text">
      <h2 class="club-subh">About Us</h2>
      <p>{{ response[0].about }}</p>
    </div>

    <div class="club-calendar">
      <h2 class="club-subh">Upcoming Events</h2>
    </div>

    <div class="media-slider">
      <h2 class="club-subh">Portfolio and Past Work</h2>
    </div>

    <div class="club-text">
      <h2 class="club-subh">Perks of Applying</h2>
      <p>{{ response[0].perks }}</p>
    </div>

    <div class="recruitment">
      <div class="info-text">
        <h2 class="club-subh">Recruitment Process</h2>
        <p>{{ response[0].recruitment }}</p>
      </div>
      <div class="info-form">{{ response[0].form }}</div>
    </div> 

    <div class="club-text">
      <h2 class="club-subh">Frequently Asked Questions</h2>
      <p>{{ response[0].faq }}</p>
    </div>   

    <div class="club-contact">
      <h2 class="club-subh">Contact Us</h2>
    </div>   

  </div>
</template>

<script>
  export default {
    name: 'Club',
    components: {
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
            form: "Department of Visual Media",
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
              
            ]
          }
        ],
      }
    }
  }
</script>


<style scoped></style>