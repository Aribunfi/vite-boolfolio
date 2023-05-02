<script>

import ProjectCard from "./ProjectCard.vue";

export default {
   props: {
        projects: Array,
    },
    components: {
        ProjectCard
    },
};

</script>

<template>
      <ul>
    <li v-for="project in projects">{{ project.title }}</li>
  </ul>

</template>

<style lang="scss" scoped></style>