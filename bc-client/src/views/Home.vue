<template>
  <div class="home">
    <div class="hero-image" />
    
    <div class="club-grid">
      <div 
        v-for="clubitem in response"
        :key="clubitem.id"
      >
        <ClubItem 
          :imgSrc="clubitem.imgSrc"
          :name="clubitem.name"
          :type="clubitem.type"
          :tag1="clubitem.tag1"
          :tag2="clubitem.tag2"
          :tag3="clubitem.tag3"
          :tag4="clubitem.tag4"
        />
      </div>
    </div>
    
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import ClubItem from '@/components/ClubItem.vue'

export default {
  name: 'Home',
  components: {
    Navbar,
    ClubItem,
  }, 
  data() {
		return {
			response: [
        {
          id: 1,
          imgSrc: "https://avatars.githubusercontent.com/u/14038814?s=200&v=4",
          name: "Department of Visual Media",
          type: "Department",
          tag1: "FRONTEND DEVELOPMENT",
          tag2: "UI/UX DESIGN",
          tag3: "BACKEND DEVELOPMENT",
          tag4: "VIDEO EDITING",
        },
        {
          id: 2,
          imgSrc: "https://avatars.githubusercontent.com/u/14038814?s=200&v=4",
          name: "Department of Visual Media",
          type: "Club",
          tag1: "FRONTEND DEVELOPMENT",
          tag2: "UI/UX DESIGN",
          tag3: "BACKEND DEVELOPMENT",
          tag4: "VIDEO EDITING",
        },
        {
          id: 3,
          imgSrc: "https://avatars.githubusercontent.com/u/14038814?s=200&v=4",
          name: "Department of Visual Media",
          type: "Association",
          tag1: "FRONTEND DEVELOPMENT",
          tag2: "UI/UX DESIGN",
          tag3: "BACKEND DEVELOPMENT",
          tag4: "VIDEO EDITING",
        },
        {
          id: 4,
          imgSrc: "https://avatars.githubusercontent.com/u/14038814?s=200&v=4",
          name: "Department of Visual Media",
          type: "Department",
          tag1: "FRONTEND DEVELOPMENT",
          tag2: "UI/UX DESIGN",
          tag3: "BACKEND DEVELOPMENT",
          tag4: "VIDEO EDITING",
        },
        {
          id: 5,
          imgSrc: "https://avatars.githubusercontent.com/u/14038814?s=200&v=4",
          name: "Department of Visual Media",
          type: "Club",
          tag1: "FRONTEND DEVELOPMENT",
          tag2: "UI/UX DESIGN",
          tag3: "BACKEND DEVELOPMENT",
          tag4: "VIDEO EDITING",
        },
        {
          id: 6,
          imgSrc: "https://avatars.githubusercontent.com/u/14038814?s=200&v=4",
          name: "Department of Visual Media",
          type: "Association",
          tag1: "FRONTEND DEVELOPMENT",
          tag2: "UI/UX DESIGN",
          tag3: "BACKEND DEVELOPMENT",
          tag4: "VIDEO EDITING",
        },
      ],
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

</style>