<template>
    <div class="d-flex flex-column min-vh-100 justify-content-center align-items-center">
      <div class="card d-flex flex-row" style="width: 85vw; height: 80vh;">
        <div style="border-right: 1px solid gray; width: 20%;">
          <ProfileSidebar :email="this.user.email" :name="this.user.displayName"/>
        </div>
        <div>
          chat window here
        </div>
      </div> 
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import authStore from '@/store';
import ProfileSidebar from '@/components/ProfileSidebar.vue';

export default defineComponent({
  name: 'HomeView',
  components: {
    ProfileSidebar
  },
  data(){
    const data: {user: any} = {user: ""}
    return data;
  },
  methods: {
    
  },
  mounted(){
    this.user = authStore.state.user;
    if(!this.user){
      authStore.dispatch('fetchUser');
    }
  }
});
</script>
