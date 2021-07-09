// template --> add any HTML here @sarthak
<template>
    <div class="navbar-root">
        <div class="nav-logo">
            <img 
                id="bitsclubs-logo"
                src="../assets/bc-logo.png" 
                alt="bc-logo"
            >
            <router-link 
                    active-class="nav-active"
                    class="logo-text"
                    to="/" exact
            >bits clubs</router-link>

     <div class="hamburger">

<div class="container">
           
            <ul class="toggle">
                <li></li>
                <li></li>
                <li></li>
            </ul>
            
            </div>
        </div>


        </div>
    
 
        <div class="nav-menu">
            <div class="nav-item">
                <router-link 
                    active-class="nav-active"
                    class="logo-text"
                    to="/search" exact
                >search</router-link>
            </div>

            <div class="nav-item">
                <router-link 
                    active-class="nav-active"
                    class="logo-text"
                    to="/calendar" exact
                >calendar</router-link>
            </div>
            <div class="nav-item">
                <router-link 
                    active-class="nav-active"
                    class="logo-text"
                    to="/about" exact
                >about</router-link>
            </div>
        </div>

    </div>
</template>


<script>
    export default {
        name: 'Navbar'
    }

 $(document).ready(function(){
                $('.container ul.toggle').click(function(){
                    $(this).toggleClass('active');
                    $('.nav-menu').toggleClass('active');
                     $('body').toggleClass('hide'); 
                })

                $(".nav-item").click(function(){
     $('.container ul.toggle').toggleClass('active');
      $('.nav-menu').toggleClass('active');
     $('body').toggleClass('hide'); 

   
      })
     
           })




</script>

<style scoped>


    .invisible {
        display: none;
    }


    #bitsclubs-logo {
        height: 50px;
        width: 50px;
    }


    .nav-logo {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        margin-left: 5px;
        
    }

    .logo-text {
        font-size: 26px;
        font-weight: 500;
        color: white;
        text-decoration: none;
        margin: 10px;
    }

    .logo-text:hover {
        opacity: 0.8;
    }

    .nav-active:hover {
        opacity: 1;
    }

    .nav-active {
        text-decoration: underline;
    }

   .hamburger{
       display: none;
    margin-left: 29%;

        }


.container{
  width: 80%;

}


.container ul.toggle{
    position: relative;
    z-index: 5;
    top: 5%;  
    width: 12px;  
     height: 26px;
    cursor: pointer;
    
}

.container ul.toggle li{
    position: absolute;
    transform: translateY(-50%);
    height: 3px;  width: 70%;
    list-style: none;
    background: #fff;
    transition: 0.9s;
    margin-left: -32px;
}
.container ul.toggle li:nth-of-type(1){
    top: 20%;
}
.container ul.toggle li:nth-of-type(2){
    top: 50%;
    transition: 0.6s;
}
.container ul.toggle li:nth-of-type(3){
    top: 80%;
}
.container ul.toggle.active li:nth-of-type(1){
    top: 50%;
    transform: translateY(-50%) rotate(45deg);
}
.container ul.toggle.active li:nth-of-type(2){

    opacity: 0;
    
}
.container ul.toggle.active li:nth-of-type(3){
    top: 50%;
    transform: translateY(-50%) rotate(-45deg);
}


    @media screen and (max-width: 650px){
       

 .navbar-root {
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: flex-start;
            margin: 30px 20px 0px 23px;
        }

   .hamburger{
    display: unset;
}


.nav-menu{

   flex-direction: column;
   position: absolute;
   left: 600px;
   top: 0;  
    background: #262626;
    width: 0;  
     height: 110vh;
    box-sizing: border-box;
    padding: 50px 0px;
    text-align: center;
    z-index: 4;
    transition: 0.7s ease-out;
    overflow-x: hidden ;


}

.nav-menu.active{ 
   width: 95vw;
    overflow: hidden;
    left: 25px;
    
}





.nav-item{
padding: 20px;

 }


.logo-text{
    font-size: 6.1vw;
    margin: 10px 6px 10px 15px; 
    font-weight: 800;  
}

        
    }




     @media screen and (min-width: 650px){

        .navbar-root {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            margin: 30px 60px 0 60px;
        }

        
        .nav-menu {
            width: 100%;
            display: flex;
            flex-direction: row;
            justify-content: flex-end;
            align-items: center;
            margin: auto;
        }
     }







</style>

