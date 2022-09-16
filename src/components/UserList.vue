<template>
    <h1>Userlist</h1>
    <ul>
        <li v-for="(user, index) in users" :key="index">
            {{user.username}}
            {{user.email}}
        </li>
    </ul>
</template>
<script lang="ts">
import { User } from '../interfaces/User';
import { defineComponent } from 'vue';
import { getUsers } from '../services/UserService';

export default defineComponent({
    data() {
        return {
            users: [] as User[]
        };
    },
    methods: {
        async loadUsers() {
            const res = await getUsers()
            this.users = res.data
        }
    },
    mounted(){
        this.loadUsers()
    },
});
</script>