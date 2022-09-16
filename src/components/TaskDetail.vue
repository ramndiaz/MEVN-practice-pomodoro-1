<template>
    <h1>taskdetail</h1>
    <form>
        <input type="text" v-model="currentTask.title"/>
        <input type="text" v-model="currentTask.pomodorosCount"/>
        <input type="text" v-model="currentTask.completed"/>
    </form>
</template>
<script lang="ts">
import { Task } from "../interfaces/Task";
import { getTask } from "../services/TaskService";
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
    data() {
        return{
            currentTask:{} as Task
        }
    },
    methods: {
        async loadTask(id: string) {
            const res = await getTask(id);
            this.currentTask = res.data
        }
    },
    mounted() {
        //const varid = this.$route.params.id as string
        //this.loadTask(varid)
        if (typeof this.$route.params.id == "string") {
            this.loadTask(this.$route.params.id)
        }
    }
});
</script>