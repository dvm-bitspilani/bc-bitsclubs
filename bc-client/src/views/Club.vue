<template>
  <div class="club">

    <div class="club-header">
      <div class="club-info">
      <div class="clublogo"><img 
          class="club-logo"
          :src="club.logo" 
          alt=""
        ></div>  

        <div class="club-info-text">
          <h1 class="club-title">{{ club.name }}</h1>
          <div class="tags-section" id="desktop-tags">
                <div v-for="tag in club.tags" :key="tag.id"> 
          <AllTags :name="tag.TagTitle"/>
            </div>
          </div>

        </div>
        
      </div>
       <div class="club-status">
        <h1 id="recr-true" class="status-pill" v-if="club.isRecruiting">RECRUITING</h1>
        <h1 id="recr-false" class="status-pill" v-else>NOT RECRUITING</h1>
      </div>

         <div class="tags-section" id="mobile-tags">
           <div v-for="tag in club.tags" :key="tag.id"> 
          <AllTags :name="tag.TagTitle"/>
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
        <div 
          v-for="calItem in club.events"
          :key="calItem.id"
        >
          <CalendarItem 
            :imgSrc="calItem.featureImage.url"
            :eventName="calItem.eventName"
            :date="calItem.date"
            :link="calItem.link"
            :description="calItem.eventDescription"
          />
        </div>
      </div>
      
    </div>

    <div>
      <h2 class="club-subh" id="media">Portfolio and Past Work</h2>
      <div class="media-slider">
        <div 
        v-for="item in club.portfolio"
        :key="item.id"
        >
          <Feature
            :imgSrc="item.url" />
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
        <div 
        v-for="item in club.portfolio"
        :key="item.id"
        >
          <Feature
            :imgSrc="item.url" />
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
        <div >
          <ContactCard
            :imgSrc="club.contact1.profilePicture[0].url"
            :name="club.contact1.name"
            :designation="club.contact1.designation"
            :email="club.contactEmail"
          />
</div>
   <div >
          <ContactCard
            :imgSrc="club.contact2.profilePicture[0].url"
            :name="club.contact2.name"
            :designation="club.contact2.designation"
            :email="club.contactEmail"
          />
</div>
   <div >
          <ContactCard
            :imgSrc="club.contact3.profilePicture[0].url"
            :name="club.contact3.name"
            :designation="club.contact3.designation"
            :email="club.contactEmail"
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
import axios from 'axios'
import AllTags from '@/components/AllTags.vue'
  export default {
    name: 'Club',
    components: {
      Feature,
      CalendarItem,
      ContactCard,
      AllTags
    }, 
    data() {
      return {
        id: this.$route.params.id,
        club: [],
        error: null,
    }
  },
  async mounted () {
    try {
      const response = await axios.get('http://localhost:1337/clubs/'+this.id)
      this.club = response.data
    } catch (error) {
      this.error = error;
      }
    }
  }
</script>


<style scoped>
#mobile-tags{
  display: none;
}

 .club {
    margin: 40px 60px 40px 70px;
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
box-shadow: -8px 11px 45px 1px rgba(0,0,0,0.52);
-webkit-box-shadow: -8px 11px 45px 1px rgba(0,0,0,0.52);
-moz-box-shadow: -8px 11px 45px 1px rgba(0,0,0,0.52);
    }
  

  .club-info-text {
    margin-left: 30px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    margin-top: -8px;

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
    background:rgb(255, 0, 0);
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
    font-size: 30px;
    letter-spacing: 0.8px;
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
    margin-left: -10px;
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
  
  }


    .club{
  margin: 0px;
   }  

    .club-header{
    display: flex;
    flex-direction: column;
    justify-content: center;
   }

  

   .club-info-text{
   align-items: center;
      padding: 10px 0;
     margin-left: 0px;
   }


   .club-info {
    display: flex;
    flex-direction: column;
    justify-content:center;
  
   
     }

    .club-subh{
    text-align:left;  
    font-size: 28px; 
    }

    .club-title{
    font-size: 5.5vw;
    text-align: center;
    }

    .status-pill{
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