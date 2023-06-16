import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'LandingPage',
            component:  () =>  import('../components/LandingPage.vue')
        }
    ]
})

export default router