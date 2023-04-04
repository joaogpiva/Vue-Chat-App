<template>
    Loading...
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import authStore from '@/store/index'

export default defineComponent({
    name: "RedirectorView",
    mounted(){
        authStore.dispatch('fetchUser')
    }
})
</script>