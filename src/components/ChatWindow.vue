<template>
    <div class="d-flex flex-column align-items-center justify-content-center" style="height: 100%;">
        <div class="flex-grow-1 overflow-auto" style="width: 100%;">
            <li v-for="(m, index) in messages" :key="index">
                <ChatMessage :text-content="m.content" :author-name="m.authorName" :timestamp="m.timestamp" />
            </li>
        </div>
        <div class="d-flex flex-row" style="height: 10%; width: 100%;">
            <div class="p-2 flex-grow-1">
                <input class="form-control" placeholder="Type here..." v-model="currentMessage">
            </div>
            <div class="p-2" @click="sendMessage()">
                <button class="btn btn-primary">Send</button>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ChatMessage from './ChatMessage.vue';
import authStore from '@/store';
import { database } from '@/firebase';
import { ref, set, onValue } from "firebase/database";

export default defineComponent({
    name: 'ChatWindow',
    components: {
        ChatMessage
    },
    data(){
        type messageObj = { authorId: string, authorName: string, timestamp: string, content: string };
        const data : { messages: messageObj[], currentMessage: string, currentUser: any } = 
                     { messages: [], currentMessage: "", currentUser: authStore.state.user! };
        return data;
    },
    created(){
        onValue(ref(database, '/messages'), (snapshot) => {
            const data = snapshot.val();
            this.messages = Object.values(data);
        });
    },
    methods: {
        sendMessage() : void{
            const currentDate = new Date();
            const dateString: string = currentDate.getFullYear() + '_' + 
                (currentDate.getMonth() + 1).toString().padStart(2, '0') + '_' + 
                currentDate.getDate() + '_' +
                currentDate.getHours().toString().padStart(2, '0') + '_' + 
                currentDate.getMinutes().toString().padStart(2, '0') + '_' + 
                currentDate.getSeconds().toString().padStart(2, '0');
            
            const messageToSend = {
                authorId: this.currentUser['uid'],
                authorName: this.currentUser['displayName'],
                timestamp: dateString,
                content: this.currentMessage
            }

            set(ref(database, "messages/" + dateString), messageToSend);

            this.currentMessage = "";
        }
    }
});
</script>