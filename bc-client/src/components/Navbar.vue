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
            >Bits Clubs</router-link>

      <div class="hamburger">

<div class="container">
           
            <ul class="toggle">
                <li></li>
                <li></li>
                <li></li>
            </ul>
            <div class="sidebar">
                 <ul class="menu">
                     <li> <router-link 
                    active-class="nav-active"
                    class="logo-text"
                    to="/club" exact
                >Club</router-link></li>
                     <li>   <router-link 
                    active-class="nav-active"
                    class="logo-text"
                    to="/search" exact
                >Search</router-link></li>

                     <li> <router-link 
                    active-class="nav-active"
                    class="logo-text"
                    to="/calendar" exact
                >Calendar</router-link></li>
                     <li><router-link 
                    active-class="nav-active"
                    class="logo-text"
                    to="/about" exact
                >About</router-link></li>
                  
                 </ul>
         
            </div>
        </div>

        </div>
    
</div>

        <div class="nav-menu">
<div class="nav-item">
                <router-link 
                    active-class="nav-active"
                    class="logo-text"
                    to="/club" exact
                >Club</router-link>
               </div>


            <div class="nav-item">
                <router-link 
                    active-class="nav-active"
                    class="logo-text"
                    to="/search" exact
                >Search</router-link>
            </div>
            <div class="nav-item">
                <router-link 
                    active-class="nav-active"
                    class="logo-text"
                    to="/calendar" exact
                >Calendar</router-link>
            </div>
            <div class="nav-item">
                <router-link 
                    active-class="nav-active"
                    class="logo-text"
                    to="/about" exact
                >About</router-link>
            </div>
        </div>





    </div>
</template>



// scripts and imports --> lite for now @sarthak
<script>
    export default {
        name: 'Navbar'
    }

 $(document).ready(function(){
                $('.container ul.toggle').click(function(){
                    $(this).toggleClass('active');
                    $('.container .sidebar').toggleClass('active');
                     $('body').toggleClass('hide'); 
                })



                $(".sidebar li").click(function(){
     $('.container ul.toggle').toggleClass('active');
      $('.container .sidebar').toggleClass('active');
     $('body').toggleClass('hide'); 

   
      })
     
           })




</script>



// styling and CSS --> edit here @sarthak
<style scoped>


    .invisible {
        display: none;
    }

    .navbar-toggle {
        position: absolute;
        top: 10px;
        right: 20px;
        cursor: pointer; 
        color: rgba(255,255,255,0.8);
        font-size: 24px;
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
        margin: auto;
        
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
       margin-left: 10%;
        }


.container{
  width: 80%;
}


.container ul.toggle{
    position: relative;
    z-index: 5;
    top: 5%;  
    width: 20px;   height: 35px;
    cursor: pointer;
}
.container ul.toggle li{
    position: absolute;
    transform: translateY(-50%);
    height: 3px;  width: 70%;
    list-style: none;
    background: #fff;
    transition: 0.9s;
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


.container .sidebar{
    position: absolute;
    top: 0;  left: -350px;
    background: #262626;
    width: 350px;   height: 100vh;
    box-sizing: border-box;
    padding: 50px 40px;
    text-align: center;
    transition: .9s;
    z-index: 4;
}


.container .sidebar.active{
    left: 0;
    overflow: hidden;

}



.container .sidebar ul.menu{
    position: relative;
    text-align: center;
    width: 100%;
    margin-top: 20px;
}
.container .sidebar ul.menu li{
    list-style: none;
}
.container .sidebar ul.menu li a{
    display: inline-block;
    position: relative;
    color: #fff;
    width: 100%;  padding: 10px 0;
    box-sizing: border-box;
    font-size: 20px;
}








    @media screen and (max-width: 650px){
       

 .navbar-root {
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: flex-start;
            margin: 30px 40px 0 40px;
        }

        .nav-menu {
            margin: 10px 0px 10px -10px;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: flex-start;
        }

     .hamburger{
    display: unset;
}
.nav-menu{
    display: none;
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

