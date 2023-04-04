<template>
    <div class="card d-flex flex-column" style="width: 25vw; height: 70vh;">
        <div class="card-body align-items-center">
            <div class="p-2">
                <img src="@/assets/logo.png" style="width: 60%"/>
                <hr />
            </div>
            <slot></slot>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: "LoginRegisterCard"
})
</script>