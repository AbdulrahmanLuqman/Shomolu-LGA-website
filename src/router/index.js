import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'Pages',
            component: () => import('../components/Pages.vue'),
            children: [
                {
                    path: '/',
                    name: 'LandingPage',
                    component:  () =>  import('../components/LandingPage.vue')
                },
                {
                    path: '/about',
                    name: 'AboutPage',
                    component:  () =>  import('../components/About.vue')
                },
                {
                    path: '/administratives',
                    name: 'AdministrativesPage',
                    component:  () =>  import('../components/Administratives.vue')
                },
                {
                    path: '/events',
                    name: 'EventsPage',
                    component:  () =>  import('../components/Events.vue')
                },
                {
                    path: '/faq',
                    name: 'FAQPage',
                    component:  () =>  import('../components/FAQ.vue')
                },
                {
                    path: '/projects',
                    name: 'ProjectsPage',
                    component:  () =>  import('../components/Projects.vue')
                }
                ,
                {
                    path: '/department',
                    name: 'DepartmentPage',
                    component:  () =>  import('../components/Department.vue')
                },
                {
                    path: '/services',
                    name: 'ServicesPage',
                    component:  () =>  import('../components/Services.vue')
                },
                {
                    path: '/media',
                    name: 'MediaPage',
                    component:  () =>  import('../components/MediaRoom.vue')
                },
                {
                    path: '/contact',
                    name: 'ContactPage',
                    component:  () =>  import('../components/Contact.vue')
                },
            ]
        },
        {
            path: '/:catchAll(.*)',
            name: 'NotFoundPage',
            component:  () =>  import('../components/NotFoundPage.vue')
        }
    ]
})

export default router