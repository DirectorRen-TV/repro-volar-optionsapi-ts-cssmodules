<script setup lang="ts">
import { RouterView,RouterLink } from 'vue-router';

</script>

<template>
  <div style="display: flex; flex-direction: column; gap: 4ch; align-items: center;">
    <header>
      <RouterLink to="/options-module">options module</RouterLink> |
      <RouterLink to="/options-scoped">options scoped</RouterLink> |
      <RouterLink to="/composition-module">composition module</RouterLink> |
      <RouterLink to="/composition-scoped">composition scoped</RouterLink>
    </header>
    <RouterView>
    
    </RouterView>
  </div>
</template>

<style module>
.header {
  line-height: 1.5;
  max-height: 100vh;
}
</style>
