<script>
import axios from 'axios';

import AppHeader from './components/AppHeader.vue';
import ProjectList from './components/ProjectList.vue';


export default {
  data() {
    return {
      title: "Boolfolio",
      projects: {
        data: [],
        pages: [],
      },
    };
  },
    components: { AppHeader, ProjectList },

    methods: {
      fetchProjects() {
        axios
        .get('http://localhost:5175/api/projects')
        .then((response) => {
            this.projects.data = response.data.data;
            this.projects.pages = response.data.links;
        })

      }
    },

created() {
  this.fetchProjects();
}

  };
  


</script>

<template>
  <AppHeader :title="title" />
  <h1>{{ title }}</h1>
  <ProjectList :projects="projects.data" :pagination="projects.pagination" title="Most recent" class="my-5"/>

</template>

<style lang="scss" scoped></style>