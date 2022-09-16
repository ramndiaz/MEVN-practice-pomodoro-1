import { RouteRecordRaw, createRouter, createWebHistory } from 'vue-router';

const routes: RouteRecordRaw[] = [

    {
        path: '/',
        name: 'homepage',
        component: () => import('../components/HomePage.vue'),
    },
    {
        path: '/tasks',
        name: 'tasks',
        component: () => import('../components/TaskList.vue'),
    },
    {
        path: '/tasks/new',
        name: 'tasks-new',
        component: () => import('../components/TaskForm.vue'),
    },
    {
        path: '/tasks/:id',
        name: 'tasks-detail',
        component: () => import('../components/TaskDetail.vue'),
    },
    {
        path: '/users',
        name: 'users',
        component: () => import('../components/UserList.vue'),
    },
    {
        path: '/users/new',
        name: 'users-new',
        component: () => import('../components/UserForm.vue'),
    },
    {
        path: '/users/:id',
        name: 'users-detail',
        component: () => import('../components/UserDetail.vue'),
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;

