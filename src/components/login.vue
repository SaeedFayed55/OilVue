<template>
<div class="bc">
    <div class="center">
        <div class="lo">
            <!-- not-close prevent-close -->
            <vs-dialog v-model="active" class="loginn" not-close prevent-close>
                <template #header>
                    <h4 class="not-margin">
                        <b> من فضلك سجل دخولك الى المنظومه</b>
                    </h4>
                </template>

                <div class="con-form" style="justify-content: center ; display : block ; ">

                    <vs-input style="" v-model="username" placeholder="" @keypress.enter="signIn">
                        <template #icon>
                            @
                        </template>
                    </vs-input>
                    <br>
                    <vs-input type="password" v-model="password" placeholder="" @keypress.enter="signIn">
                        <template #icon>
                            <i class='bx bxs-lock'></i>
                        </template>
                    </vs-input>
                    <!-- <div class="flex">
                <vs-checkbox v-model="remember">Remember me</vs-checkbox>
                <a href="#">Forgot Password?</a>
            </div> -->
                </div>
                <p class="errorMessage" v-if="getUser !='done'"> {{getUser}} </p>

                <template #footer>
                    <div class="footer-dialog">

                        <vs-button style="background-color:#D4AF37		" type="gradient" gradient block @click="signIn">
                            تسجيـل الدخول
                        </vs-button>

                        <!-- <div class="new">
                    New Here? <a href="#">Create New Account</a>
                </div> -->
                    </div>
                </template>
            </vs-dialog>
        </div>
    </div>
</div>
</template>

<script>
import {
    mapGetters
} from 'vuex'

export default {

    data: () => ({
        active: true,
        username: '',
        password: '',
        remember: false
    }),

    methods: {
        signIn() {
            this.$store.dispatch("getLoginData", {
                username: this.username,
                password: this.password
            }).then(() => {
                if (this.getUser == "done") {
                    this.$router.push("/home")
                }
            })

        },
        // openNotification() {
        //     const notification = this.$vs.notification({
        //         color: 'danger',
        //         position: 'top-left',
        //         title: 'error',
        //         text: this.getUser
        //     })
        //     console.log(notification)

        // }

    },
    computed: {
        ...mapGetters([
            'getUser',
        ])
    }
}
</script>

<style scoped>
.not-margin {
    margin: 0px;
    font-weight: normal;
    padding: 10px;
}

.con-form {
    width: 100%;
}

.con-form .flex {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.con-form .flex a {
    font-size: 0.8rem;
    opacity: 0.7;
}

.con-form .flex a:hover {
    opacity: 1;
}

.con-form .vs-checkbox-label {
    font-size: 0.8rem;
}

.con-form .vs-input-content {
    margin: 10px 0px;
    width: calc(100%);
}

.con-form .vs-input-content .vs-input {
    width: 100%;
}

.footer-dialog {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: calc(100%);
}

.footer-dialog .new {
    margin: 0px;
    margin-top: 20px;
    padding: 0px;
    font-size: 0.7rem;
}

.footer-dialog .new a {
    color: rgba(var(--vs-primary), 1) !important;
    margin-left: 6px;
}

.footer-dialog .new a:hover {
    text-decoration: underline;
}

.footer-dialog .vs-button {
    margin: 0px;
}

.vs-dialog-content {
    background: transparent !important;
    z-index: 0 !important;
}

.vs-dialog {
    box-shadow: none !important;
    background-color: rgba(255, 0, 0, 0.4);

}

.errorMessage {
    color: red;
    text-align: center;
    margin-top: 15px;
    font-weight: bold;
}

.vs-dialog-content {
    background-image: url('../assets/new.png') !important;
    background-size: cover !important;
    background-repeat: no-repeat !important;
}
</style>
