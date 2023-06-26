import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'Pages',
            component: () => import('../views/AllPages.vue'),
            children: [
                {
                    path: '/',
                    name: 'LandingPage',
                    component:  () =>  import('../views/LandingPage.vue')
                },
                {
                    path: '/about',
                    name: 'AboutPage',
                    component:  () =>  import('../views/About.vue')
                },
                {
                    path: '/administratives',
                    name: 'AdministrativesPage',
                    component:  () =>  import('../views/Administratives.vue')
                },
                {
                    path: '/events',
                    name: 'EventsPage',
                    component:  () =>  import('../views/Events.vue')
                },
                {
                    path: '/faq',
                    name: 'FAQPage',
                    component:  () =>  import('../views/FAQ.vue')
                },
                {
                    path: '/projects',
                    name: 'ProjectsPage',
                    component:  () =>  import('../views/Projects.vue')
                }
                ,
                {
                    path: '/department',
                    name: 'DepartmentPage',
                    component:  () =>  import('../views/Department.vue')
                },
                {
                    path: '/services',
                    name: 'ServicesPage',
                    component:  () =>  import('../views/Services.vue')
                },
                {
                    path: '/media',
                    name: 'MediaPage',
                    component:  () =>  import('../views/MediaRoom.vue')
                },
                {
                    path: '/contact',
                    name: 'ContactPage',
                    component:  () =>  import('../views/Contact.vue')
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