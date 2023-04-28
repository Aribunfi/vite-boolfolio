<script>

import AppHeader from './components/AppHeader.vue';

export default {
  data() {
    return {
      title: "Ciao mondo"
    };
  },
  components: { AppHeader },
}


</script>

<template>
  <h1>{{ title }}</h1>
</template>

<style lang="scss" scoped></style>