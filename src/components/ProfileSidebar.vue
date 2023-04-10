<template>
    <div class="d-flex flex-column" style="padding: 1rem;">
        <div>
            <div class="p-2">
                <i class="fas fa-user fa-4x" style=""></i>
            </div>
            <div class="p-2">
                {{ name }}
            </div>
        </div>
        <div>
            <div class="p-2">
                <button class="btn btn-primary" @click="logout()">Log out</button>
            </div>
        </div>  
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import authStore from '@/store';

export default defineComponent({
    name: "ProfileSidebar",
    props: {
        email: String,
        name: String
    },
    methods: {
        logout(){
            authStore.dispatch('logout');
        }
    }
})
</script>