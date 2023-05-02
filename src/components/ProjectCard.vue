<script>

export default {
    name: "ProjectCard",
   props: {
    project: Object,
   }
};


</script>

<template>
    {{ project.title }}
</template>

<style lang="scss" scoped></style>