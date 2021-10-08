<template>
  <div class="home">
   <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel" data-bs-interval="5000">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="../assets/bits-image.png" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="../assets/bits-image.png" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="../assets/bits-image.png" class="d-block w-100" alt="...">
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    
    <div class="club-grid">
      <div 
        v-for="clubitem in clubs"
        :key="clubitem.id">
        <router-link 
          :to="{ path: '/club/'+clubitem.id}"
          class="router-link-style"
          >
          <ClubItem
            :id="clubitem.id"
            :name="clubitem.name"
            :type="clubitem.clubtype"
            :tags="clubitem.tags"
            :imgSrc="'https://clubs.bits-dvm.org/assets/'+clubitem.logo.id"
          />
        </router-link>

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
      const response = await axios.get('https://clubs.bits-dvm.org/items/clubs?fields[]=*.*.*')
      this.clubs = response.data.data
      console.log(this.clubs)
    } catch (error) {
      this.error = error;
    }
  }
}

</script>

<style scoped>
  .home {
    padding: none;
    padding-bottom: 75px;
    margin: 0 40px 0 40px;
  }
  

  #carouselExampleIndicators{
    text-align: center;
    display: flex;
    justify-content: center;
    padding: 40px 0;
  }
  .carousel-inner{
    width: 90%;
  }

  .carousel-inner img{
    border-radius: 8px;
  }
  .carousel-indicators button {
    width: 10px;
    height: 10px;
    border-radius: 100%;
    margin:-15px 8px
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
    justify-content: flex-start;
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

.router-link-style {
  color: inherit;
  text-decoration: none; /* no underline */
}


.club-grid{
  justify-content: center;
}

</style>