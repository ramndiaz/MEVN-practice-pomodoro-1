<template>
    <form @submit.prevent="saveTask()">
        <input name="id" type="text" placeholder="write a id" v-model="task.id">
        <input name="username" type="text" placeholder="write a username" v-model="task.username">
        <input name="title" type="text" placeholder="write a title" v-model="task.title">
        <input name="pomodorosCount" type="text" placeholder="write a pomodoros count" v-model="task.pomodorosCount">
        <input name="completed" type="checkbox" v-model="task.completed">
        <button>Save</button>
    </form>
</template>
<script lang="ts">
    import { defineComponent } from 'vue';
    import { Task } from '../interfaces/Task';
    import { createTask } from '../services/TaskService';
    export default defineComponent({
        data(){
            return {
                task:{} as Task
            }
        },
        methods: {
            async saveTask() {
                const res = await createTask(this.task);
                console.log(res);
                this.$router.push({ name: "tasks"});
            },
        },
    });

</script>