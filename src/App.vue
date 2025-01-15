<script setup>
import { useStore } from '@/stores/store';

import Loadout from '@/components/Loadout.vue';
import Selection from './components/Selection.vue';

const store = useStore()
store.loadData()

function expandSidebar(event) {
  document.body.classList.toggle('sb-expanded')
}
</script>

<template>
  <header>
    <h1>Helldive Randomizer</h1>
    <button class="sb-button" @click="expandSidebar">Unlocked Equipment</button>
  </header>

  <aside>
    <div class="sb-content">
      <Selection />
    </div>
  </aside>
  <main>
    <Loadout />
  </main>

  <footer>
    <a href='https://ko-fi.com/W7W83UBQO' target='_blank'><img height='36' style='border:0px;height:36px;'
        src='https://storage.ko-fi.com/cdn/kofi3.png?v=6' border='0' alt='Buy Me a Coffee at ko-fi.com' />
    </a>
    <br>
    <small>&copy; Copyright 2025, Adam Fowler</small>
  </footer>
</template>

<style scoped>
.sb-button {
  position: fixed;
  top: 20px;
  left: 20px;
  height: 40px;
}
</style>