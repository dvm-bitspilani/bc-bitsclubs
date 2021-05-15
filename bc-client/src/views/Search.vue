<template>
  <div class="search">    

    <input 
      type="text" 
      class="search-bar"
      placeholder="Search for any interest, department, or club" 
    >
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
import ClubItem from '@/components/ClubItem.vue'

export default {
  name: 'Search',
  components: {
    ClubItem,
  }, 
  data() {
		return {
			response: [
        {
          id: 1,
          imgSrc: "https://avatars.githubusercontent.com/u/14038814?s=200&v=4",
          name: "Department of Visual Media",
          type: "department",
          tag1: "FRONTEND DEVELOPMENT",
          tag2: "UI/UX DESIGN",
          tag3: "BACKEND DEVELOPMENT",
          tag4: "VIDEO EDITING",
        },
        {
          id: 2,
          imgSrc: "https://avatars.githubusercontent.com/u/14038814?s=200&v=4",
          name: "Department of Visual Media",
          type: "department",
          tag1: "FRONTEND DEVELOPMENT",
          tag2: "UI/UX DESIGN",
          tag3: "BACKEND DEVELOPMENT",
          tag4: "VIDEO EDITING",
        },
        {
          id: 3,
          imgSrc: "https://avatars.githubusercontent.com/u/14038814?s=200&v=4",
          name: "Department of Visual Media",
          type: "department",
          tag1: "FRONTEND DEVELOPMENT",
          tag2: "UI/UX DESIGN",
          tag3: "BACKEND DEVELOPMENT",
          tag4: "VIDEO EDITING",
        },
        {
          id: 4,
          imgSrc: "https://avatars.githubusercontent.com/u/14038814?s=200&v=4",
          name: "Department of Visual Media",
          type: "department",
          tag1: "FRONTEND DEVELOPMENT",
          tag2: "UI/UX DESIGN",
          tag3: "BACKEND DEVELOPMENT",
          tag4: "VIDEO EDITING",
        },
        {
          id: 5,
          imgSrc: "https://avatars.githubusercontent.com/u/14038814?s=200&v=4",
          name: "Department of Visual Media",
          type: "department",
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
  .search {
    margin: none;
    padding: none;
    display: flex;
    margin: auto;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding-bottom: 75px;
  }

  .club-grid {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: flex-start;
    margin: 0 40px 0 40px;
  }

  .search-bar {
    width: 45vw;
    height: 65px;
    border: solid 2px #2F2F2F;
    background: none;
    border-radius: 35px;
    font-size: 25px;
    font-weight: 400;
    color: white;
    font-family: Airbnb Cereal App, sans-serif;
    margin: 20px;
  }

  input:focus, textarea:focus, select:focus{
    outline: none;
  }

  input {
    padding:0 30px 0 30px;
  }





@media (max-width:650px) {
  .search-bar{
    width: 70vw;
    font-size: 15px;
    

  }
   


  
}

</style>