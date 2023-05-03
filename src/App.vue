<script>

import AppHeader from './components/AppHeader.vue';
import HomePage from './pages/HomePage.vue';

export default {
  data() {
    return {
      title: "Boolfolio",
   
    };
  },
    components: { AppHeader, HomePage },

    

   

  };
  


</script>

<template>
  <AppHeader :title="title" />
  <HomePage />

</template>

<style lang="scss" scoped></style>