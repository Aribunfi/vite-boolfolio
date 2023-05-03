import { createRouter, createWebHistory } from "vue-router";

import HomePage from '../pages/HomePage.vue';
import ContactPage from '../pages/ContactPage.vue';
import PostDetailPage from '../pages/ProjectDetailPage.vue';


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
            path: '/projects/:id',
            name: 'project-detail',
            component: ProjectDetailPage,
        },
    ]
});

export { router };