<template>
    <div class="club-item">
        <div class="title-section">
            <img 
                class="club-logo" 
                :src="imgSrc" 
            />
            <div class="title-text">
                <h1 class="club-name">{{ name }}</h1>
                <h2 class="club-type">{{ type }}</h2>
            </div>
        </div>
        <div class="tags-section">
            <h2 class="tag">{{ tag1 }}</h2>
            <h2 class="tag">{{ tag2 }}</h2>
            <h2 class="tag">{{ tag3 }}</h2>
            <h2 class="tag">{{ tag4 }}</h2>
        </div>
    </div>

</template>


<script>
    export default {
        name: 'ClubItem',
        props: [
            "imgSrc",
            "name", 
            "type", 
            "tag1", 
            "tag2", 
            "tag3", 
            "tag4", 
            "tag5", 
        ],
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
        padding: 0;
        text-align: left;
        color: white;
        font-weight: 500;
        font-size: 30px;
    }

    .club-type {
        margin: 5px 0px;
        padding: 3px 13px 3px 13px;
        background: white;
        color:#2F2F2F;
        border-radius: 25px;
        font-size: 18px;
        text-transform: uppercase;
        display: inline-block;
    }

    .title-text {
        display: flex;
        margin-left: 15px;
        flex-direction: column;
        align-items: flex-start;
    }

    .tags-section {
        display: flex;
        margin-left: 5px;
        flex-direction: row;
        align-items: flex-start;
        justify-content: flex-start;
        flex-wrap: wrap;
    }


    .tag {
        margin: 5px 3px 5px 3px;
        padding: 3px 13px 3px 13px;
        background: #616161;
        color:white;
        border-radius: 25px;
        font-size: 16px;
        text-transform: uppercase;
        display: inline-block;
        font-weight: 500;
    }

</style>

