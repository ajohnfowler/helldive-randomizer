<script setup>
import { useStore } from '@/stores/store';

import Loadout from '@/components/Loadout.vue';
import Selection from './components/Selection.vue';

import Toolbar from 'primevue/toolbar';
import Splitter from 'primevue/splitter';
import SplitterPanel from 'primevue/splitterpanel';

const store = useStore()
store.loadData()
</script>

<template>
  <div class="container">

    <div class="header">
      <h1>Helldive Randomizer</h1>
    </div>

    <div class="body">
      <Splitter style="height: 100%">
        <SplitterPanel class="flex items-center justify-center" :size="75" :minSize="10">
          <Loadout />
        </SplitterPanel>
        <SplitterPanel class="flex items-center justify-center" :size="25">
          <Selection />
        </SplitterPanel>
      </Splitter>
    </div>

    <div class="footer">
      <a href='https://ko-fi.com/W7W83UBQO' target='_blank'><img height='36' style='border:0px;height:36px;'
          src='https://storage.ko-fi.com/cdn/kofi3.png?v=6' border='0' alt='Buy Me a Coffee at ko-fi.com' /></a>
      <small>&copy; Copyright 2025, Adam Fowler</small>
    </div>
  </div>
</template>

<style scoped>
.container {
  min-height: 100%;
  position: relative;
}

.header {
  background: #ff0;
  padding: 10px;
}

.body {
  padding: 10px;
  padding-bottom: 70px;
  /* Height of the footer */
}

.footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 60px;
  /* Height of the footer */
  background: #6cf;
}
</style>