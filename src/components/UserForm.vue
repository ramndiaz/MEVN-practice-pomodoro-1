<template>
    <form @submit.prevent="saveUser()">
        <input name="username" type="text" placeholder="write a username" v-model="user.username">
        <input name="email" type="text" placeholder="write a email" v-model="user.email">
        <input name="password" type="text" placeholder="write a password" v-model="user.password">
        <button>Save</button>
    </form>
</template>
<script lang="ts">
    import { defineComponent } from 'vue'
    import { User } from '../interfaces/User'
    import { createUser } from '../services/UserService';
    export default defineComponent({
        data(){
            return {
                user:{} as User
            }
        },
        methods: {
            async saveUser() {
                const res = await createUser(this.user);
                console.log(res);
                this.$router.push({ name: "users"});
            },
        },
    });

</script>