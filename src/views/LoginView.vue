<template>
    <div class="d-flex flex-column min-vh-100 justify-content-center align-items-center">
        <LoginRegisterCard>
            <div class="d-flex flex-column align-items-center justify-content-center h-50">
                <div class="p-2">
                    <input class="form-control login-input" v-model="email" placeholder="Your e-mail">
                </div>
                <div class="p-2">
                    <input class="form-control login-input" type="password" v-model="password" placeholder="Your password">
                </div>
            </div>
            <div class="d-flex flex-column align-items-center justify-content-center" style="height: 30%;">
                <div class="p-2">
                    <button class="btn btn-primary submit-button" v-if="!isLoading" @click="login()">Log in</button>
                    <button class="btn btn-outline-primary loading-button" v-else disabled>Loading...</button>
                </div>
            </div>
            <div class="flex-column justify-content-center">
                <div class="p-2">
                    <button class="btn btn-link register-button" @click="goToRegister()">Don't have an account?</button>
                </div>
            </div>
        </LoginRegisterCard>
    </div>  
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import authStore from '@/store/index'
import LoginRegisterCard from '@/components/LoginRegisterCard.vue';

export default defineComponent({
    name: "LoginView",
    components: {
        LoginRegisterCard
    },
    data(){
        const data: { email: string, password: string, isLoading: boolean } = { email: "", password: "", isLoading: false}
        return data;
    },
    methods: {
        async login(){
            this.isLoading = true;
            await authStore.dispatch('login', {
                email: this.email,
                password: this.password
            });
            this.isLoading = false;
        },
        goToRegister(){
            this.$router.push('register');
        }
    }
})
</script>

<style scoped>
.login-input{
    color: rgb(190, 190, 190);
    background-color: rgb(60, 60, 60, 0.7);
    border-color: rgb(60, 60, 60);
    text-decoration-color: rgb(0, 0, 0);
}

::placeholder{
    color: rgb(140, 140, 140);
    opacity: 1;
}

.submit-button{
    color: rgb(190, 190, 190);
    background-color: rgba(0, 140, 0, 0.7);
    border-color: rgb(0, 140, 0);
}

.submit-button:hover, .submit-button:active{
    background-color: rgba(0, 110, 0, 0.7);
    border-color: rgb(0, 110, 0);
}

.loading-button{
    border-color: rgb(0, 140, 0);
    color: rgb(0, 140, 0);
}

.register-button{
    color: rgb(205, 205, 205);
}

.register-button:hover{
    color: rgb(255, 255, 255);
}
</style>