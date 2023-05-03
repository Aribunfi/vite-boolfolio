<script>

import AppHeader from './components/AppHeader.vue';
import HomePage from './pages/HomePage.vue';
import ContactPage from './pages/ContactPage.vue';

export default {
  data() {
    return {
      title: "Boolfolio",
   
    };
  },
    components: { AppHeader, HomePage, ContactPage },

    

   

  };
  


</script>

<template>
  <AppHeader :title="title" />
  <HomePage />
  <ContactPage />

</template>

<style lang="scss" scoped></style>