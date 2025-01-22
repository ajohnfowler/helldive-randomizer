<script setup>
import Button from 'primevue/button';

import { useStore } from '@/stores/store';
import Card from './Card.vue';
import { reactive } from 'vue';

const store = useStore()

const state = reactive(
    {
        loadout: {},

        maxSupports: 1,
        maxBackpacks: 1,
        maxVehicles: 1
    }
)

getLoadout()

function getLoadout() {
    // Primary
    let primaries = flattenItems(store.sections[0].groups)
    shuffleArray(primaries)
    state.loadout.primary = primaries.pop()

    //Secondary
    let secondaries = flattenItems(store.sections[1].groups)
    shuffleArray(secondaries)
    state.loadout.secondary = secondaries.pop()

    // Throwable
    let throwables = flattenItems(store.sections[2].groups)
    shuffleArray(throwables)
    state.loadout.throwable = throwables.pop()

    // Stratagems
    let stratagems = flattenItems(store.sections[3].groups)
    shuffleArray(stratagems)

    state.loadout.stratagems = []
    state.loadout.supports = 0
    state.loadout.vehicles = 0
    state.loadout.backpacks = 0

    while (stratagems.length > 0) {

        if (state.loadout.stratagems.length >= 4) {
            break;
        }

        let stratagem = stratagems.pop()

        // If already have backpack re-start loop
        if (state.loadout.backpacks >= state.maxBackpacks && stratagem.backpack) {
            continue;
        }

        // If already have vehicle re-start loop
        if (state.loadout.vehicles >= state.maxVehicles && stratagem.vehicle) {
            continue;
        }

        // If already have support weapon re-start loop
        if (state.loadout.supports >= state.maxSupports && stratagem.support) {
            continue;
        }

        if (stratagem.backpack) { state.loadout.backpacks++ }
        if (stratagem.vehicle) { state.loadout.vehicles++ }
        if (stratagem.support) { state.loadout.supports++ }

        state.loadout.stratagems.push(stratagem)
    }
}

/* Randomize array in-place using Durstenfeld shuffle algorithm */
function shuffleArray(array) {
    for (var i = array.length - 1; i >= 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

function flattenItems(array) {
    let result = []
    array.forEach(group => {
        group.items.forEach(item => {
            if (!item.locked) {
                result.push(item)
            }
        })
    });
    return result
}
</script>

<template>
    <div class="equipment">
        <h2>Equipment</h2>
        <ul>
            <li>
                <div class="card-container">
                    <h3>Primary</h3>
                    <Card :data="state.loadout.primary" :width="379" :height="203" />
                </div>
            </li>
            <li>
                <div class="card-container">
                    <h3>Secondary</h3>
                    <Card :data="state.loadout.secondary" :width="379" :height="203" />
                </div>
            </li>
            <li>
                <div class="card-container">
                    <h3>Throwable</h3>
                    <Card :data="state.loadout.throwable" :width="203" :height="203" />
                </div>
            </li>
        </ul>
    </div>

    <div class="stratagems">
        <h2>Stratagems</h2>
        <ul>
            <li v-for="stratagem in state.loadout.stratagems">
                <Card :data="stratagem" :width="128" :height="128" :isOutlined="true" />
            </li>
        </ul>
    </div>

    <div class="controls">
        <Button @click="getLoadout" label="Get Assigned Loadout" />
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