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



// scripts and imports --> lite for now @sarthak
<script>
    export default {
        name: 'Navbar'
    }
</script>



// styling and CSS --> edit here @sarthak
<style scoped>

    #bitsclubs-logo {
        height: 50px;
        width: 50px;
    }

    .navbar-root {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin: 20px 40px 0 40px;
    }

    .nav-logo {
        width: 30%;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        margin: auto;
        
    }

    .nav-menu {
        width: 70%;
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
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

</style>

