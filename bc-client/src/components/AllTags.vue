<template>


<div class="sometag">
<Tooltip :text="desc">
<h2 class="tag"> {{name}}</h2>
</Tooltip>
</div>



</template>

<script>

import Tooltip from './Tooltip.vue'

export default{
name: "AllTags",
props: ["name","desc"],
components:{Tooltip}
}

</script>




<style scoped>

    .tag {
    
        margin: 5px 3px 5px 3px;
        padding: 3px 18px 3px 18px;
        background: #616161;
        color:white;
        border-radius: 25px;
        font-size: 13px;
        text-transform: uppercase;
        display: inline-block;
        font-weight: 400;
    }
@media (max-width: 650px){

.tag{
    font-size: 10px;
}

}




</style>