import { createRouter } from "vue-router";

const router = createRouter({
    routes: [
        {
            path: '/',
            name: 'LandingPage',
            components:  () =>  import('')
        }
    ]
})

export default router