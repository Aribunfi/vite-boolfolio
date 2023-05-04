import { createRouter, createWebHistory } from "vue-router";

import HomePage from '../pages/HomePage.vue';
import ContactPage from '../pages/ContactPage.vue';
import PostDetailPage from '../pages/ProjectDetailPage.vue';
import NotFoundPage from '../pages/NotFoundPage.vue';


const router = createRouter({
    history: createWebHistory(),
    LinkActiveClass: 'active', 
    LinkExactActiveClass: '',

    routes: [
        {
            path: '/',
            name: 'home',
            component: HomePage,
        },

        {
            path: '/contacts',
            name: 'contacts',
            component: ContactPage,
        },

        {
            path: '/projects/:slug',
            name: 'project-detail',
            component: ProjectDetailPage,
        },


        {
            path: '/:pathMatch(.*)*',
            name: 'not-found',
            component: NotFoundPage,
        },
    ]
});

export { router };