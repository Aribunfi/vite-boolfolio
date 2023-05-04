<script>
import axios from 'axios';

import ProjectCard from "./ProjectCard.vue";
import AppPagination from "./AppPagination.vue";

export default {
    data () {

    return {
        error: false,
        projects: {
            list: [],
            pages: [],
        },

    };
},

   props: {
        projects: Array,
        pages: Array,
        title: String,
    },

    components: {
        ProjectCard, AppPagination },
    emits: ['changePage'],

    methods: {
        fetchProjects(endpoint=null) {
            if (!endpoint) endpoint = 'http://127.0.0.1:8000/api/projects';

            axios
            .get(endpoint)
            .then(response) => {
                this.projects.list = response.data.data;
                this.projects.pages = response.data.links;
            })
            .catch((err) => {
                this.error = err.message;
            });    
        },
    },

    created() {
        this.fetchProjects();
    },
};
   
</script>

<template>
     <section>
        <h1>{{ title }}</h1>
        <div v-if="error" class="alert alert-danger" role="alert">
            {{ error }}
        </div>
        <div v-else-if="projects.length" class="row g-4">
            <ProjectCard
            v-for="project in projects.list"
            :key="project.id"
            :project="project"
            :isDetail="false"
            class="col-md-3"/>
        </div> 
        <h2 v-else class="text-muted">Non ci sono progetti</h2>

        <AppPagination :pages="projects.pages" @changePage="fetchProjects" />
    
        <nav aria-label="Page navigation example">
  <ul v-if="projects.length" class="pagination">
    <li v-for="page in pages" class="page-item"><a class="page-link" href="#" v-html="page.label"></a></li>
  </ul>
</nav>
    
    
    
    </section>
    
    
</template>

<style lang="scss" scoped></style>