<script setup>
import { RouterView } from 'vue-router'

import { useStore } from '@/stores/store';

const store = useStore()
store.init()
</script>

<template>
  <header>
    <h1>Helldive Randomizer</h1>
  </header>

  <RouterView />

  <footer>
    <a href='https://ko-fi.com/W7W83UBQO' target='_blank'><img height='36' style='border:0px;height:36px;'
        src='https://storage.ko-fi.com/cdn/kofi3.png?v=6' border='0' alt='Buy Me a Coffee at ko-fi.com' />
    </a>
    <br>
    <small>&copy; Copyright 2025, Adam Fowler</small>
  </footer>
</template>