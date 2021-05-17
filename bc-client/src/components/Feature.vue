<template>
    <img 
        class="feature" 
        :src="imgSrc" 
    />
</template>


<script>
    export default {
        name: 'Feature',
        props: [
            "imgSrc",
        ],
    }
</script>


<style scoped>

    .feature{
        width: 450px;
        height: 250px;
        margin: 10px 40px 10px 0px;
    }


@media (max-width:600px) {
.feature{
    width: 300px;
}

    
}


</style>

