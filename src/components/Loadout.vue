<script setup>
import { useStore } from '@/stores/store';
import Card from './Card.vue';
import { reactive, ref } from 'vue';

const store = useStore()

const state = reactive(
    {
        loadout: {
            primary: store.primaries[0].items[0],
            secondary: store.secondaries[0].items[0],
            throwable: store.throwables[0].items[0],
            stratagems: [store.stratagems[0].items[0]]
        }
    }
)

function getLoadout() {
    // Primary
    state.loadout.primary = getPrimary()

    //Secondary
    state.loadout.secondary = getSecondary()

    // Throwable
    state.loadout.throwable = getThrowable()

    // Stratagems
    state.loadout.stratagems = []
    for (let i = 0; i < 5; i++) {
        state.loadout.stratagems.push(getStratagem())
    }
}

function getPrimary() {
    let temp = store.primaries[Math.floor(Math.random() * store.primaries.length)]
    return temp.items[Math.floor(Math.random() * temp.items.length)]
}

function getSecondary() {
    let temp = store.secondaries[Math.floor(Math.random() * store.secondaries.length)]
    return temp.items[Math.floor(Math.random() * temp.items.length)]
}

function getThrowable() {
    let temp = store.throwables[Math.floor(Math.random() * store.throwables.length)]
    return temp.items[Math.floor(Math.random() * temp.items.length)]
}

function getStratagem() {
    let temp = store.stratagems[Math.floor(Math.random() * store.stratagems.length)]
    return temp.items[Math.floor(Math.random() * temp.items.length)]
}
</script>

<template>
    <div class="container">
        <div class="equipment">
            <h2>Equipment</h2>
            <ul>
                <li>
                    <h3>Primary</h3>
                    <Card :data="state.loadout.primary" />
                </li>
                <li>
                    <h3>Secondary</h3>
                    <Card :data="state.loadout.secondary" />
                </li>
                <li>
                    <h3>Throwable</h3>
                    <Card :data="state.loadout.throwable" />
                </li>
            </ul>
        </div>

        <hr>

        <div class="stratagems">
            <h2>Stratagems</h2>
            <ul>
                <li v-for="stratagem in state.loadout.stratagems">
                    <Card :data="stratagem" />
                </li>
            </ul>
        </div>

        <hr>

        <div class="controls">
            <checkbox>Single Backpack</checkbox>
            <checkbox>Single Vehicle</checkbox>
            <button @click="getLoadout">Get Assigned Loadout</button>
        </div>
    </div>
</template>

<style scoped>
.container {
    text-align: center;
}

ul {
    display: table;
    width: 100%;
    padding: 0;
    table-layout: fixed;
}

li {
    display: table-cell;
}
</style>