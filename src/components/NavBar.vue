<template>
    <nav>
        <ul>
            <li>
                <router-link to="/">home</router-link>
            </li>
            <li>
                <router-link to="/tasks">tasks</router-link>
            </li>
            <li>
                <router-link to="/tasks/new">create task</router-link>
            </li>
            <li>
                <router-link to="/users">users</router-link>
            </li>
            <li>
                <router-link to="/users/new">create users</router-link>
            </li>
        </ul>
    </nav>
</template>
<script lang="ts">
    import { defineComponent } from '@vue/runtime-core';
    export default defineComponent({
        name: "NavBar",
    })
</script>