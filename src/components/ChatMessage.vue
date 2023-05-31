<template>
    <div class="d-flex flex-column p-2" style="width: 100%;">
        <div class="d-flex flex-row justify-content-between align-items-end" style="height: 20%;">
            <div class="d-flex flex-direction-row align-items-center justify-content-center align-self-start">
                <div>
                    <i class="fa-solid fa-circle-user fa-2x"></i>
                </div>
                <div>
                    <p>{{ authorName }}</p>
                </div>
            </div>
            <div class="align-self-end">
                <p>{{ formatDateTime(timestamp) }}</p>
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
    },
    methods: {
        formatDateTime(str?: string) : string{
            let arr = str?.split("_");
            if(!arr){ return ""}
            return arr[3] + ":" + arr[4] + ":" + arr[5] + " " + arr[2] + "/" + arr[1] + "/" + arr[0];
        }
    }
})
</script>