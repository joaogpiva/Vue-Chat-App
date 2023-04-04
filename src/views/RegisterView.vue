<template>
    <div class="d-flex flex-column min-vh-100 justify-content-center align-items-center">
        <LoginRegisterCard>
            <div class="p-2">
                <input class="form-control" v-model="name" placeholder="Your name">
            </div>
            <div class="p-2">
                <input class="form-control" v-model="email" placeholder="Your e-mail">
            </div>
            <div class="p-2">
                <input class="form-control" type="password" v-model="password" placeholder="Your password">
            </div>
            <div class="p-2">
                <button class="btn btn-primary" v-if="!isLoading" @click="register()">Create account</button>
                <button class="btn btn-outline-primary" v-else disabled>Loading...</button>
            </div>
        </LoginRegisterCard>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import authStore from '@/store/index';
import LoginRegisterCard from '@/components/LoginRegisterCard.vue';

export default defineComponent({
    name: "RegisterView",
    components: {
        LoginRegisterCard
    },
    data(){
        const data: { name: string, email: string, password: string, isLoading: boolean } = { name: "", email: "", password: "", isLoading: false };
        return data;
    },
    methods: {
        async register(){
            this.isLoading = true;
            await authStore.dispatch('register', {
                email: this.email,
                password: this.password,
                name: this.name
            });
            this.isLoading = false;
        }
    }
})
</script>