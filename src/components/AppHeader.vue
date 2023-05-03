<script>

export default {
    name: 'AppHeader',

    props: {
      title: String,
    }
};
</script>

<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container">
    <span class="navbar-brand" href="#">{{ title }}</span>
    
        <div>
        <router-link :to="{ name: 'home' }" class="nav-link">
        Homepage
        </router-link>
        <router-link :to="{ name: 'contacts' }" class="nav-link">
        Contacts
        </router-link>
      </div>
    </div>
 
</nav>
</template>

    <style lang="scss" scoped></style>