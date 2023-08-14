<template>
  <div class="main-page">
    <h2>Repo</h2>
    <a href="https://github.com/ultonic/praktikum" target="_blank">Go to GitHub</a>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'RepoPage',
  computed: {
    ...mapGetters(['isAuthenticated']),
  },
};
</script>

<style scoped>
.main-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;  
}
</style>
