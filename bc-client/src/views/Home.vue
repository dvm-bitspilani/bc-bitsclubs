<template>
  <div class="home">
    <div class="hero-image" />
    <div class="club-grid">
      <ClubItem 
      imgSrc="https://avatars.githubusercontent.com/u/14038814?s=200&v=4"
      name="Department of Visual Media"
      type="department"
      tag1="FRONTEND DEVELOPMENT"
      tag2="UI/UX DESIGN"
      tag3="BACKEND DEVELOPMENT"
      tag4="VIDEO EDITING"
      />

      <ClubItem 
      imgSrc="https://avatars.githubusercontent.com/u/14038814?s=200&v=4"
      name="Department of Visual Media"
      type="department"
      tag1="FRONTEND DEVELOPMENT"
      tag2="UI/UX DESIGN"
      tag3="BACKEND DEVELOPMENT"
      tag4="VIDEO EDITING"
      />

      <ClubItem 
      imgSrc="https://avatars.githubusercontent.com/u/14038814?s=200&v=4"
      name="Department of Visual Media"
      type="department"
      tag1="FRONTEND DEVELOPMENT"
      tag2="UI/UX DESIGN"
      tag3="BACKEND DEVELOPMENT"
      tag4="VIDEO EDITING"
      />

      <ClubItem 
      imgSrc="https://avatars.githubusercontent.com/u/14038814?s=200&v=4"
      name="Department of Visual Media"
      type="department"
      tag1="FRONTEND DEVELOPMENT"
      tag2="UI/UX DESIGN"
      tag3="BACKEND DEVELOPMENT"
      tag4="VIDEO EDITING"
      />

      <ClubItem 
      imgSrc="https://avatars.githubusercontent.com/u/14038814?s=200&v=4"
      name="Department of Visual Media"
      type="department"
      tag1="FRONTEND DEVELOPMENT"
      tag2="UI/UX DESIGN"
      tag3="BACKEND DEVELOPMENT"
      tag4="VIDEO EDITING"
      />

      <ClubItem 
      imgSrc="https://avatars.githubusercontent.com/u/14038814?s=200&v=4"
      name="Department of Visual Media"
      type="department"
      tag1="FRONTEND DEVELOPMENT"
      tag2="UI/UX DESIGN"
      tag3="BACKEND DEVELOPMENT"
      tag4="VIDEO EDITING"
      />

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
  }
}
</script>

<style scoped>
  .home {
    margin: none;
    padding: none;
    display: flex;
    margin: auto;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .hero-image {
    height: 500px;
    width: 90vw;
    background: #2F2F2F;
    margin: 40px;
    border-radius: 20px;
  }

  .club-grid {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-evenly;
    margin: 0 40px 0 40px;
  }


</style>