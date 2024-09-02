<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  setup() {
    return {
      test: 'someValue'
    }
  }
})
</script>

<template>
  <div>
    options module {{ test }}
  </div>
</template>

<style module>
</style>
