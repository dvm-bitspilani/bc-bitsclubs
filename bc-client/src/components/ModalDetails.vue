<template>

<div>

<a @click.prevent="show"> <h1 id="pill-details" class="pill" > Details </h1> </a> 
     <modal :name="modalName" :scrollable="true" :height="600" :focusTrap="false" :adaptive="true">
         <div class="modal-wrapper">
<div class="event-info">
<img :src="image" >
<div class="event-name">
<h3>{{name}} </h3>
 
 <h4> {{date}} </h4>
<a :href="link">Register</a>

</div>

</div>
<div class="event-desc">
   <p>{{text}}</p> 
 dsfdsfsadsadfasdsffds
Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat rem necessitatibus consectetur unde quasi tenetur saepe sed sequi voluptate consequatur provident ex, ea voluptas quod beatae est minima alias pariatur.

</div>
</div>

    </modal>
</div>
   

</template>

<script>
export default {
    name: 'ModalDetails',
    methods: {
        show () {
            this.$modal.show(modalName);
        },
        hide () {
            this.$modal.hide('modal-details');
        }
    },
    props: ["text", "date", "image","link", "name", "modalName"],

    mount () {
        this.show()
    }
}



</script>

<style scoped>

img{
    width: 200px;
    height: 200px;
}

 .pill {
    margin: 7px 2px 0px 2px;
    padding: 2px 10px 2px 10px;
    background: #616161;
    color:white;
    border-radius: 25px;
    font-size: 14px;
    display: inline-block;
    font-weight: 500;
    transition: transform 300ms;
      cursor: pointer;
    
  }
    #pill-details {
    background:#e28214;
    box-shadow: rgba(104, 255, 70, 0.15) 0px 8px 24px;
  }


.modal-wrapper{
    display: flex;
    flex-direction: column;
}

.event-info{
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
}

.event-name{
      display: flex;
    flex-direction: column;
}



</style>