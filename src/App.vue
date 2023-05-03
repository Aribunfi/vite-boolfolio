<script>

import AppHeader from './components/AppHeader.vue';


export default {
  data() {
    return {
      title: "Boolfolio",
   
    };
  },
    components: { AppHeader },

    

   

  };
  


</script>

<template>
  <AppHeader :title="title" />
  <HomePage />
  <ContactPage />

</template>

<style lang="scss" scoped></style>