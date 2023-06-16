import { createRouter } from "vue-router";

const router = createRouter({
    routes: [
        {
            path: '/',
            name: 'LandingPage',
            components:  () =>  import('../components/LandingPage.vue')
        }
    ]
})

export default router