<script setup lang="ts">
import { useStore } from '@/stores/store';

const store = useStore()

store.loadData()

console.log(store.getPrimary)
console.log(store.getSecondary)
console.log(store.getThrowable)
</script>

<template>
  <main>
  </main>
</template>
