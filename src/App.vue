<script>
import axios from 'axios';

import AppHeader from './components/AppHeader.vue';
import ProjectList from './components/ProjectList.vue';


export default {
  data() {
    return {
      title: "Boolfolio",
      projects: [],
    };
  },
    components: { AppHeader, ProjectList },

    methods: {
      fetchProjects() {
        axios
        .get('http://127.0.0.1:8000/api/projects')
        .then((response) => {
            this.projects = response.data;
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
  <ProjectList :projects="projects" title="Project List" class="my-5"/>

</template>

<style lang="scss" scoped></style>