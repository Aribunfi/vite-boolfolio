<script>

import ProjectCard from "./ProjectCard.vue";

export default {
   props: {
        projects: Array,
        pages: Array,
        title: String,
    },
    components: {
        ProjectCard
    },
};

</script>

<template>
     <section class="container">
        <h1>{{ title }}</h1>
        <div v-if="projects.length" class="row g-4">
            <ProjectCard v-for="project in projects" :key="project.id" :project="project" class="col-md-3"/>
        </div> 
        <h2 v-else class="text-muted">Non ci sono progetti</h2>
    
        <nav aria-label="Page navigation example">
  <ul v-if="projects.length" class="pagination">
    <li v-for="page in pages" class="page-item"><a class="page-link" href="#" v-html="page.label"></a></li>
  </ul>
</nav>
    
    
    
    </section>
    
    
</template>

<style lang="scss" scoped></style>