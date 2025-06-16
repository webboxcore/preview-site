import { createWebHashHistory, createRouter } from 'vue-router';

import HomeView from '@/views/HomeView.vue';
import GoalsView from '@/views/GoalsView.vue';
import MilestonesView from '@/views/MilestonesView.vue';

const routes = [
    { path: '/', component: HomeView },
    { path: '/goals', component: GoalsView },
    { path: '/milestones', component: MilestonesView },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;