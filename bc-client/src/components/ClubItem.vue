<template>
    <div class="club-item" >
        <div class="title-section">
            <img 
                class="club-logo" 
                :src="imgSrc"
            />
            <div class="title-text">
                <h1 class="club-name">{{ name }}</h1>
                <h2 
                    class="club-type"
                    v-if="type === 'department'"
                    id="dep-pill"
                >{{ type }}</h2>
                <h2 
                    class="club-type"
                    v-if="type === 'club'"
                    id="club-pill"
                >{{ type }}</h2>
                <h2 
                    class="club-type"
                    v-if="type === 'tech-team'"
                    id="tech-pill"
                >Tech Team</h2>
                <h2 
                    class="club-type"
                    v-if="type === 'assoc'"
                    id="assoc-pill"
                >{{ type }}</h2>
            </div>
        </div>


   <div class="tags-section">
          <div v-for="tag in tags" :key="tag.tags_id.id"> 
          <AllTags :name="tag.tags_id.tagtitle" :desc="tag.tags_id.tagdesc"/>
          </div>
         </div>
  </div>
    
</template>


<script>
import AllTags from '@/components/AllTags.vue'
import axios from 'axios'
    export default {
        name: 'ClubItem',
        components : {
            AllTags
            },
        props: [
            "imgSrc",
            "name", 
            "type", 
            "tags",  
        ],
    

data() {
    
		return {
			clubs: [],
          error: null,
        
    }
  },
  async mounted () {
    try {
      const response = await axios.get('https://clubs.bits-dvm.org/items/clubs')
      this.clubs = response.data.data
    } catch (error) {
      this.error = error;
    }
  }
 }
</script>


<style scoped>

    .club-item{
        width: 400px;
        height: 100%;
        padding: 10px;
        margin: 15px 10px 15px 10px;
        background: #2F2F2F;
        border-radius: 20px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
        cursor: pointer;
        transition: transform 300ms;
        box-shadow: 7px 6px 20px -4px rgb(0 0 0 / 75%);
    }

    .club-item:hover {
        transform: translateY(-5px);
    }
    .title-section {
        display: flex;
        flex-direction: row;
        margin: 10px;

        height: 50%;
    }
    
    .club-logo {
        height: 120px;
        width: 120px;
        border-radius: 15px;
    }

    .club-name {
        margin: 0;
        padding: 0px;
        text-align: left;
        color: white;
        font-weight: 500;
        font-size: 28px;
        letter-spacing: 0.6px;
    }



    .club-type {
        margin: 10px 0;
        padding: 3px 13px 3px 13px;
        background: #1f1f1f;
        color:#ffffff;
        border-radius: 25px;
        font-size: 15px;
        text-transform: uppercase;
        display: inline-block;
       font-weight:500;
    }

    #dep-pill {
        background: #8F1D14;
    }
    #club-pill {
        background: #F89D13;
    }
    #tech-pill {
        background: rgb(40, 40, 173);
    }
    #assoc-pill {
        background: rgb(9, 120, 9);
    }

    .title-text {
        display: flex;
        margin-left: 15px;
        flex-direction: column;
        align-items: flex-start;
        justify-content:flex-start;
        margin-top: -8px;
        
    }

    .tags-section {
        display: flex;
        margin: 2px 10px 5px 10px;
        flex-direction: row;
        align-items: flex-start;
        justify-content: flex-start;
        flex-wrap: wrap;
        z-index: 10;
        
    }



@media (max-width: 650px){
    
    .club-item{
        width: 80vw;
        }

    .club-name {
    font-size: 5.1vw;
    font-weight: 800;
        }

    .club-type {
      font-size: 14px;
       margin-top: 12px;
     
        }
 
    .tag {
       font-size: 10px;
        }
   


.title-text{
    margin-top: -4px;
}
}




</style>

