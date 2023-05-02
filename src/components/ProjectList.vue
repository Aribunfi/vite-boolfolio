<script>

export default {
    data() {
        return {
            title: "Hello World"
        }
    }
};

</script>

<template>
      <ul>
    <li v-for="project in projects">{{ project.title }}</li>
  </ul>

</template>

<style lang="scss" scoped></style>