<template>
  <div class="home">
    <div class="hero-image"></div>
    
    <div class="club-grid">
      <div 
        v-for="clubitem in clubs"
        :key="clubitem.id"
      >
     
        <ClubItem 
          :imgSrc="clubitem.logo.url"
          :name="clubitem.name"
          :type="clubitem.clubType">
     
          </ClubItem>


           <!-- <div class="tags-section">
           
          <div v-for="tag in clubitem.tags" :key="tag.id"> 
          <AllTags :name="tag.TagTitle"/>
          </div>
         </div> -->
          </div>


</div>
    </div>
    
 
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import ClubItem from '@/components/ClubItem.vue'
import axios from 'axios'
import AllTags from '@/components/AllTags.vue'
export default {
  name: 'Home',
  components: {
    Navbar,
    ClubItem,
    AllTags
  }, 
  data() {
		return {
			clubs: [],
   error: null,
    }
  },
  async mounted () {
    try {
      const response = await axios.get('http://localhost:1337/clubs')
      this.clubs = response.data
    } catch (error) {
      this.error = error;
    }
  }
}

</script>

<style scoped>
  .home {
    padding: none;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-bottom: 75px;
    margin: 0 40px 0 40px;
  }

  .hero-image {
    height: 500px;
    width: 90vw;
    background: #2F2F2F;
    margin: 20px 60px 20px 60px;
    border-radius: 20px;
    background-image: url(../assets/bits-image.png);
    background-repeat: no-repeat;
    background-size: 100% 100%;
  }

  .club-grid {
    display: flex;
    flex-direction: row;
    width: 100%;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }

  .media-slider {
    overflow-x: scroll;
  }

 .tags-section {
        display: flex;
        margin: 2px 10px 5px 10px;
        flex-direction: row;
        align-items: flex-start;
        justify-content: flex-start;
        flex-wrap: wrap;
        
    }


@media (max-width: 650px){

  .hero-image{
    width: 85vw;
    height: 250px;  
  }
}




</style>