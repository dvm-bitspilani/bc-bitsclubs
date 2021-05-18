<template>
  <div class="club">

    <div class="club-header">
      <div class="club-info">
      <div class="clublogo"><img 
          class="club-logo"
          :src="response[0].imgSrc" 
          alt=""
        ></div>  

        <div class="club-info-text">
          <h1 class="club-title">{{ response[0].name }}</h1>
          <div class="tags-section" id="desktop-tags">
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

         <div class="tags-section" id="mobile-tags">
              <h2 class="tag">{{ response[0].tag1 }}</h2>
              <h2 class="tag">{{ response[0].tag2 }}</h2>
              <h2 class="tag">{{ response[0].tag3 }}</h2>
          </div>
        </div>





    <div class="club-text">
      <h2 class="club-subh">About Us</h2>
      <p class="club-p">{{ response[0].about }}</p>
    </div>

    <div class="club-calendar">
      <h2 class="club-subh" id="media">Upcoming Events</h2>
      <div class="cal-grid">
        <div 
          v-for="calItem in response[0].calendar"
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

    <div>
      <h2 class="club-subh" id="media">Portfolio and Past Work</h2>
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
       <!-- <div class="info-form">{{ response[0].form }}</div> -->
    </div> 

    <div>
      <h2 class="club-subh" id="media">Gallery</h2>
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
       <p class="club-p">{{ response[0].perks }}</p>
    </div>   

    <div class="club-contact">
      <h2 class="club-subh" id="media">Contact Us</h2>
       <div class="contact-grid">
        <div 
        v-for="contact in response[0].contact"
        :key="contact.id"
        >
          <ContactCard
            :imgSrc="contact.imgSrc"
            :name="contact.name"
            :designation="contact.designation"
            :email="contact.email"
          />
        </div>
      </div>
    </div>   

  </div>
</template>

<script>
import Feature from '@/components/Feature.vue'
import CalendarItem from '@/components/CalendarItem.vue'
import ContactCard from '@/components/ContactCard.vue'
  export default {
    name: 'Club',
    components: {
      Feature,
      CalendarItem,
      ContactCard,
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
               email:"parthop@gmail.com",

                imgSrc: "https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5f47d4de7637290765bce495%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D1398%26cropX2%3D3908%26cropY1%3D594%26cropY2%3D3102",
              },
              {
                id: 2,
                name: "Parth Sharma",
                designation: "Frontend Developer",
                                email:"parthop@gmail.com",

                imgSrc: "https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5f47d4de7637290765bce495%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D1398%26cropX2%3D3908%26cropY1%3D594%26cropY2%3D3102",
              },
              {
                id: 3,
                name: "Parth Sharma",
                designation: "Frontend Developer",
                                email:"parthop@gmail.com",

                imgSrc: "https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5f47d4de7637290765bce495%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D1398%26cropX2%3D3908%26cropY1%3D594%26cropY2%3D3102",
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
            ],
            calendar: [
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
              {
                id: 4,
                eventName: "DVM Airmeet Orientation",
                imgSrc: "https://avatars.githubusercontent.com/u/14038814?s=200&v=4",
                date: "4.00PM, 11/03/2021",
                link: "bit.ly/dvmorientation",
                description: "Events calendar (on homepage and clubs page): If any club is organizing a event, they can add it and it will show up on that calendar. ",
              },
              {
                id: 5,
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
#mobile-tags{
  display: none;
}

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
  
    justify-content: center;
    display: flex;
    align-items: center;
    
  }
  .status-pill {
    margin: 10px 6px 10px 6px;
    padding: 6px 20px 6px 20px;
    background: #616161;
    color:white;
    border-radius: 25px;
    font-size: 28px;
    text-transform: uppercase;
    display: inline-block;
    font-weight: 500;
    transition: transform 300ms;
    cursor: default;
  }
  

  #recr-true {
    background:#19d00a;
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
    margin-left: -15px;
  }

  .contact-grid {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: center;
  }


@media (max-width:650px) {

    #mobile-tags{
  display: unset;
  margin-top: 2%;
  }


    .club{
  margin:0
   }  

    .club-header{
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;

    }

  

   .club-info-text{
      margin-left: 0px;
   }


   .club-info {
    display: flex;
    flex-direction: row;
    justify-content:center;
    flex-wrap: wrap;
    }

    .club-subh{
    text-align:left;  
    font-size: 28px; 
    }

    .club-title{
    font-size: 23px;
    }

    .status-pill{
    font-size: 15px;
    margin-top: 10%;
    }

    .tags-section {
    margin-top: 4%;
    }

    .tag {
    font-size: 12px;
    }


    .club-text {
    width: 88vw;
    padding-left: 32px;
    }


    .media-slider, #media{padding-right: 20px;
    padding-left: 32px;
    }

 
    .club-p { 
    font-size: 15px;
    padding-right:20px;
  }


    .cal-grid{
    justify-content: flex-start;
    margin-left: 20px;
    }

    .contact-grid {
    justify-content: flex-start;
      margin-left: 20%;
    }

    #desktop-tags{
   display: none;
    }

  }

</style>