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

    // Booster
    // let boosters = flattenItems(store.sections[4])
    // shuffleArray(boosters)
    // state.loadout.booster = boosters.pop()

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
    <div class="container">
        <div class="row">
            <div class="col-sm">
                <h4>Primary</h4>
                <Card :data="state.loadout.primary" :width="379" :height="203" />
            </div>
            <div class="col-sm">
                <h4>Secondary</h4>
                <Card :data="state.loadout.secondary" :width="379" :height="203" />
            </div>
            <div class="col-sm">
                <h4>Throwable</h4>
                <Card :data="state.loadout.throwable" :width="203" :height="203" />
            </div>
        </div>
        <div class="row">
            <div class="col-sm" v-for="(stratagem, index) in state.loadout.stratagems">
                <h4>Stratagem {{ index + 1 }}</h4>
                <Card :data="stratagem" :width="128" :height="128" :isOutlined="true" />
            </div>
            <!-- <div class="col-sm">
                <h4>Booster</h4>
                <Card :data="state.loadout.booster" :width="128" :height="128" :isOutlined="true" />
            </div> -->
        </div>
        <div class="row">
            <div class="controls">
                <Button @click="getLoadout" label="Get Assigned Loadout" />
            </div>
        </div>
    </div>
</template>

<style scoped>
.container {
    width: 100%;
    margin-top: 100px;
    margin-bottom: 100px;
}
</style>