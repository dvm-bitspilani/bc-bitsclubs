<template>
    <div class="wrapper">
        <div class="contact-card">
            <img :src="imgSrc" class="contact-img" >
            <div class="contact-name">{{ name }}</div>
            <div class="contact-desig">{{ designation }}</div>
            <div class="contact-email">Email: {{ email }}</div>

        </div>
    </div>
</template>

<script>
export default {
    name: "ContactCard",
    props: [
        "imgSrc",
        "name",
        "designation",
        "email"
    ]
}
</script>

<style scoped>
    .wrapper {
        margin-right: 30px;
    }


    .contact-card {
        height: 100%;
        width: 100%;
        background: #2f2f2f;
        border-radius: 15px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-top: 12%;
         box-shadow: 7px 6px 20px -4px rgb(0 0 0 / 75%);
       
    }
 


    .contact-name {
        font-size: 24px;
        color: white;
        font-weight: 500;
    }


    .contact-desig {
        font-size: 20px;
        color: white;
        font-weight: 400;
        padding-bottom: 20px;
    }



    .contact-email{    
        font-size: 15px;
        color: white;
        font-weight: 400;
        padding-bottom: 20px;
    }


    .contact-img {
        height: 200px;
        width: 180px;
        padding: 20px;
        border-radius: 35px;
        object-fit: cover;
    }



@media (max-width: 600px) {   
    
    .wrapper {
        margin-right: 0px;
    }

}


</style>