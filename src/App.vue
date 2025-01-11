<script setup>
import { useStore } from '@/stores/store';

import Header from './components/Header.vue';
import Loadout from '@/components/Loadout.vue';
import Footer from './components/Footer.vue';

const store = useStore()
store.loadData()
</script>

<template>
  <Header />

  <main>
    <Loadout />
  </main>

  <Footer />
</template>

<style scoped>
main {
  height: 100%;
}
</style>