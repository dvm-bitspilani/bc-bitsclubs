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
        </div>

        <div class="nav-menu">
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

