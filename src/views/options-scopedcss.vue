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
    options scoped {{ test }}
  </div>
</template>

<style scoped>
</style>
