<script setup>
import { useStore } from '@/stores/store';
import Card from './Card.vue';
import { reactive } from 'vue';

const store = useStore()

const state = reactive(
    {
        loadout: {}
    }
)

getLoadout()

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
    <div class="equipment">
        <h2>Equipment</h2>
        <ul>
            <li>
                <div class="card-container">
                    <h3>Primary</h3>
                    <Card :data="state.loadout.primary" />
                </div>
            </li>
            <li>
                <div class="card-container">
                    <h3>Secondary</h3>
                    <Card :data="state.loadout.secondary" />
                </div>
            </li>
            <li>
                <div class="card-container">
                    <h3>Throwable</h3>
                    <Card :data="state.loadout.throwable" />
                </div>
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
        <input type="checkbox">Single Backpack</input>
        <input type="checkbox">Single Vehicle</input>
        <br>
        <button @click="getLoadout">Get Assigned Loadout</button>
    </div>
</template>

<style scoped>
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