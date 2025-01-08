<script setup>
import { useStore } from '@/stores/store';
import Card from './Card.vue';
import Button from 'primevue/button';

const store = useStore()
</script>

<template>
    <div class="container">
        <div class="equipment">
            <ul>
                <li>
                    <Card :card-data="primary" />
                </li>
                <li>
                    <Card :card-data="secondary" />
                </li>
                <li>
                    <Card :card-data="throwable" />
                </li>
            </ul>
        </div>

        <div class="stratagems">
            <ul>
                <li v-for="index in 5" :key="index">
                    Strat {{ index }}
                </li>
            </ul>
        </div>

        <div class="controls">
            <Button @click="" label="Get Assigned Loadout" />
        </div>
    </div>
</template>

<style scoped>
ul {
    display: flex;
    align-items: stretch;
    /* Default */
    justify-content: space-between;
    width: 100%;
    background: #cacaca;
    margin: 0;
    padding: 25;
}

li {
    display: block;
    flex: 0 1 auto;
    /* Default */
    list-style-type: none;
    background: #fafafa;
}
</style>