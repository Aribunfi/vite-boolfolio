<script>

export default {
    name: "ProjectCard",
   props: {
    project: Object,
   }
};


</script>

<template>
    <div class="card">
        <div class="card-header">
        <h2>{{ project.title }}</h2>
        </div>
        <div class="card-body">
        {{ project.description }}
        </div>
        <div class="card-footer d-flex justify-content-between">
        {{ project.year }}
        <router-link class="btn btn-primary btn-sm" to="/"> Guarda </router-link>

        </div>

    </div>
</template>

<style lang="scss" scoped></style>