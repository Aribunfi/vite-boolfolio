<script>

export default {
    name: "ProjectCard",
   props: {
    project: Object,
    isDetail: Boolean,
   }
};


</script>

<template>
    <div class="card">
        <div class="card-header d-flex justify-content-between align-items-start">
        <h2>{{ project.title }}</h2>
        <span 
        v-if="project.category"
        class="badge"
        :style="{backgroundColor: project.category.color }">
        {{ project.category.label }}
        </span>
        </div>
        <div class="card-body">
            <div v-if="project.tags.length">
                <span
                v-for="tag in project.tags"
                :key="tag.id"
                class="badge rounded-pill me-2"
                :style="{backgroundColor: tag.color }">
                    {{ tag.label }}
            </span> 
                <hr />
            </div>
        {{ isDetail ? project.description : abstract }}
        </div>
        <div class="card-footer d-flex justify-content-between">
        {{ project.year }}
        <router-link
        v-if="!isDetail"
        class="btn btn-primary btn-sm" :to="{
        name: 'project-detail',
        params: {
            slug: project.slug,
        },
    
    }"> Guarda </router-link>

        </div>

    </div>
</template>

<style lang="scss" scoped></style>