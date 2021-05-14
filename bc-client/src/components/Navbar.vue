<template>
    <div class="navbar-root">

        <div class="nav-logo">
            <img 
                id="bitsclubs-logo"
                src="../assets/bc-logo.png" 
                alt="bc-logo"
            >
            <a href="#" class="logo-text">bits clubs</a>
        </div>

        <div class="nav-menu">
            <div class="nav-item">
                <h1 class="logo-text">search</h1>
            </div>
            <div class="nav-item">
                <h1 class="logo-text">calendar</h1>
            </div>
            <div class="nav-item">
                <h1 class="logo-text">about</h1>
            </div>
        </div>

    </div>
</template>


<script>
    export default {
        name: 'Navbar'
    }
</script>

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


</style>

