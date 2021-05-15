<template>
    <div class="cal-item">
        <div class="title-section">
            <img 
                class="cal-logo" 
                :src="imgSrc" 
            />
            <div class="title-text">
                <h1 class="cal-name">{{ eventName }}</h1>
                <h2 class="cal-date">{{ date }}</h2>
                <h2 class="cal-link">{{ link }}</h2>
            </div>
        </div>
        <div class="cal-description">
            <p>{{ description }}</p>
        </div>
    </div>

</template>

<script>
    export default {
        name: 'CalendarItem',
        props: [
            "imgSrc",
            "eventName", 
            "date", 
            "link", 
            "description",
        ],
    }
</script>


<style scoped>

    .cal-item{
        width: 340px;
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
        padding-left: 20px;
    }


    .cal-item:hover {
        transform: translateY(-5px);
    }
    .title-section {
        display: flex;
        flex-direction: row;
        margin: 10px 10px 0px 10px;
        height: 50%;
    }
    
    .cal-logo {
        height: 100px;
        width: 100px;
        margin-top: 5px;
        border-radius: 10px;
    }

    .cal-name {
        margin: 0;
        padding-bottom: 10px;
        text-align: left;
        color: white;
        font-weight: 500;
        font-size: 22px;
    }

    .cal-date, .cal-link {
        margin: 0px 0px;
        padding: 0;
        text-align: left;
        color: white;
        font-weight: 500;
        font-size: 18px;
    }
    
    .cal-link {
        color: blue;
    }

    .title-text {
        display: flex;
        margin: 0px 15px;
        padding: 0;
        flex-direction: column;
        align-items: flex-start;
    }

    .cal-description {
        margin: 0px 5px 0px 5px;
        padding: 0;
        align-content: flex-start;
        justify-content: left;
        text-align: left;
        flex-wrap: wrap;
        color: white;
    }


@media (max-width: 650px)
{
 
 .cal-item{
        width: 300px;
        padding-right:16px ;
       
    }



 .cal-name {
        font-size: 18px;
    }

    .cal-date, .cal-link {
     
        font-size: 14px;
    }
    

    .cal-description {
      
        font-size: 14px;
    }







}



</style>

