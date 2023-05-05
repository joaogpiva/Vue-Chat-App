<template>
    <div class="d-flex flex-column p-2" style="width: 100%;">
        <div class="d-flex flex-row justify-content-between" style="height: 20%;">
            <div class="align-self-start">
                <p>{{ authorName }}</p>
            </div>
            <div class="align-self-end">
                <p>{{ timestamp }}</p>
            </div>
        </div>
        <div class="align-self-start">
            <p>{{ textContent }}</p>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: "ChatMessage",
    props: {
        textContent: String,
        authorName: String,
        timestamp: String
    }
})
</script>