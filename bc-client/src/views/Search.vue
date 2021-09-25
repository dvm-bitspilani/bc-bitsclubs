<template>
  <div class="search">
    <input
      type="text"
      class="search-bar"
      placeholder="Search for any interest, department, or club"
      v-model="search_param"
      v-on:keyup.enter="callMeMaybe(search_param)"
      v-on:submit="callMeMaybe(search_param)"
  > 


    <br/>
    
    <div class="club-grid">
      <div v-for="clubitem in clubs" :key="clubitem.id">
         <router-link 
          :to="{ path: '/club/'+clubitem.id}"
          class="router-link-style"
          >
        <ClubItem
          :id="clubitem.id"
          :imgSrc="clubitem.logo.name"
          :name="clubitem.name"
          :type="clubitem.clubType"
          :tags="clubitem.tags"
        />
         </router-link>
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
      renderComponent: true,
     	clubs: [],
      error: null,
      search:"",
    }
  }, 
  mounted: function mounted () {
        this.getAllData();
  },
  methods: {
    callMeMaybe(search_param) {
      this.search = search_param;
      this.getAllData();
      console.log(search_param)
    },
    getAllData() {
        return axios.get('https://clubs.bits-dvm.org/items/clubs?search='+this.search).then((response)=> {
          this.clubs = response.data.data
          console.log(this.clubs)
        })
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

.router-link-style {
  color: inherit;
  text-decoration: none; /* no underline */
}
</style>
