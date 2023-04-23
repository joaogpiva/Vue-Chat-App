<template>
    <div class="card d-flex flex-column card-glass">
        <div class="card-body align-items-center">
            <div class="p-2" style="height: 40%;">
                <img src="@/assets/logo.png" style="width: 50%"/>
                <hr />
            </div>
            <div class="p-2" style="height: 60%;">
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: "LoginRegisterCard"
})
</script>

<style scoped>
.card-glass{
    width: 25vw; 
    height: 80vh;
    background-color: rgba(60, 60, 60, 0.6);
    backdrop-filter: blur(8px);
}
</style>