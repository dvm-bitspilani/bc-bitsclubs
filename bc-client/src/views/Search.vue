<template>
  <div class="search">
    <input
      type="text"
      class="search-bar"
      placeholder="Search for any interest, department, or club"
    />
    <div class="club-grid">
      <div v-for="clubitem in clubs" :key="clubitem.id">
        <ClubItem
          :imgSrc="clubitem.logo"
          :name="clubitem.name"
          :type="clubitem.ClubType"
          :tag1="clubitem.tags[0].TagTitle"
          :tag2="clubitem.tags[1].TagTitle"
          :tag3="clubitem.tags[2].TagTitle"
      
        />
      </div>
    </div>
  </div>
</template>

<script>
import ClubItem from "@/components/ClubItem.vue";
import axios from 'axios'

export default {
  name: "Search",
  components: {
    ClubItem,
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
  border: solid 2px #2f2f2f;
  background: none;
  border-radius: 35px;
  font-size: 25px;
  font-weight: 400;
  color: white;
  font-family: Airbnb Cereal App, sans-serif;
  margin: 20px;
}

input:focus,
textarea:focus,
select:focus {
  outline: none;
}

input {
  padding: 0 30px 0 30px;
}

@media (max-width: 650px) {
  .search-bar {
    width: 70vw;
    font-size: 14px;
  }

}
</style>
