<template>
    <div class="d-flex flex-column min-vh-100 justify-content-center align-items-center">
      Home screen!
      You are logged in as {{ user.email }}
      <button @click="logout()">Log out</button>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import authStore from '@/store'

export default defineComponent({
  name: 'HomeView',
  data(){
    const data: {user: any} = {user: ""}
    return data;
  },
  methods: {
    logout(){
      authStore.dispatch('logout');
    }
  },
  mounted(){
    this.user = authStore.state.user;
    if(!this.user){
      authStore.dispatch('fetchUser');
    }
  }
});
</script>
