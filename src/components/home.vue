<template>
<div class="home">

    <div class="headerr">

        <div>

        </div>

        <div style="display : flex ; justify-content:center ; ">
            <h2 style="margin-top : 100px">مرحبا بكم فى منظومه الوقود</h2>
        </div>
        <div style="display : flex ; justify-content:center">
            <vs-button>تسجيـــل الدخول الى المنظومه</vs-button>
        </div>

    </div>

    <div class="container" style="margin-top:20px">
        <div class="d-flex bd-highlight">
            <div class="p-2 flex-shrink-1 bd-highlight">
                <img style="height : 350px" src="../assets/service-single3.jpg">
            </div>
            <div class="p-2 w-100 bd-highlight">
                <p>Sam: Irure dolor in reprehenderit in voluptate velit esse cillum. Ullamco laboris nisi ut aliquip ex ea commodo. Ut enim ad minim veniam, quis nostrud exercitation.

                    George: Dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident. Sunt in culpa qui.Officia deserunt.

                    Sam: Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
            </div>

        </div>
    </div>

    <div class="container" style="margin-top:20px">
        <div class="d-flex bd-highlight">

            <div class="p-2 w-100 bd-highlight">
                <p>Sam: Irure dolor in reprehenderit in voluptate velit esse cillum. Ullamco laboris nisi ut aliquip ex ea commodo. Ut enim ad minim veniam, quis nostrud exercitation.

                    George: Dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident. Sunt in culpa qui.Officia deserunt.

                    Sam: Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
            </div>
            <div class="p-2 flex-shrink-1 bd-highlight">
                <img style="height : 350px" src="../assets/service-single6.jpg">
            </div>
        </div>
    </div>
    <div class="container" style="margin-top:20px">
        <div class="d-flex bd-highlight">
            <div class="p-2 flex-shrink-1 bd-highlight">
                <img style="height : 350px" src="">
            </div>
            <div class="p-2 w-100 bd-highlight">
                <p>Sam: Irure dolor in reprehenderit in voluptate velit esse cillum. Ullamco laboris nisi ut aliquip ex ea commodo. Ut enim ad minim veniam, quis nostrud exercitation.

                    George: Dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident. Sunt in culpa qui.Officia deserunt.

                    Sam: Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
            </div>

        </div>
    </div>

    <vtable />

</div>
</template>

<script>
export default {
    data() {
        return {
            slide: 0,
            sliding: null
        }
    },

}
</script>

<style>
.home {
    width: 100% !important
}

.headerr {
    height: 300px;
    width: 100%;
    background-color: gray;
    color: white;
    background-image: url('../assets/service-single7.jpg');
    background-size: cover;
    background-repeat: no-repeat;
}

body {
    overflow-x: hidden;
    overflow-y: scroll;
}
</style>
