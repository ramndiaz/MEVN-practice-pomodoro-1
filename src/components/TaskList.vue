<template>
    <h1>tasklist</h1>
    <ul>
        <li v-for="(task, index) in tasks" :key="index" @click="$router.push(`/tasks/${task.id}`)">
            {{task.id}}
            {{task.username}}
            {{task.title}}
            {{task.pomodorosCount}}
            {{task.completed}}
        </li>
    </ul>
</template>
<script lang="ts">
import { Task } from '../interfaces/Task';
import { defineComponent } from 'vue';
import { getTasks } from '../services/TaskService';

export default defineComponent({
    data() {
        return {
            tasks: [] as Task[]
        };
    },
    methods: {
        async loadTasks() {
            const res = await getTasks()
            this.tasks = res.data
        }
    },
    mounted(){
        this.loadTasks()
    },
});
</script>