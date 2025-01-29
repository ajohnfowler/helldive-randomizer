<script setup>
import Button from 'primevue/button';
import InputGroup from 'primevue/inputgroup';

import { useStore } from '@/stores/store';
import Card from './Card.vue';
import { reactive } from 'vue';
import { ref } from "vue";

const settings = ref(false);

const store = useStore()

getLoadout()

function getLoadout() {
    // Primary
    let primaries = flattenItems(store.sections[0].items)
    shuffleArray(primaries)
    store.loadout.primary = primaries.pop()

    //Secondary
    let secondaries = flattenItems(store.sections[1].items)
    shuffleArray(secondaries)
    store.loadout.secondary = secondaries.pop()

    // Throwable
    let throwables = flattenItems(store.sections[2].items)
    shuffleArray(throwables)
    store.loadout.throwable = throwables.pop()

    // Stratagems
    let stratagems = flattenItems(store.sections[3].items)
    shuffleArray(stratagems)

    // Booster
    let boosters = flattenItems(store.sections[4].items)
    shuffleArray(boosters)
    store.loadout.booster = boosters.pop()

    store.loadout.stratagems = []
    store.loadout.supports = 0
    store.loadout.vehicles = 0
    store.loadout.backpacks = 0

    while (stratagems.length > 0) {

        if (store.loadout.stratagems.length >= 4) {
            break;
        }

        let stratagem = stratagems.pop()

        // If already have backpack re-start loop
        if (store.loadout.backpacks >= store.maxBackpacks && stratagem.backpack) {
            continue;
        }

        // If already have vehicle re-start loop
        if (store.loadout.vehicles >= store.maxVehicles && stratagem.vehicle) {
            continue;
        }

        // If already have support weapon re-start loop
        if (store.loadout.supports >= store.maxSupports && stratagem.support) {
            continue;
        }

        if (stratagem.backpack) { store.loadout.backpacks++ }
        if (stratagem.vehicle) { store.loadout.vehicles++ }
        if (stratagem.support) { store.loadout.supports++ }

        store.loadout.stratagems.push(stratagem)
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
                <Card :data="store.loadout.primary" :width="379" :height="203" />
            </div>
            <div class="col-sm">
                <h4>Secondary</h4>
                <Card :data="store.loadout.secondary" :width="379" :height="203" />
            </div>
            <div class="col-sm">
                <h4>Throwable</h4>
                <Card :data="store.loadout.throwable" :width="203" :height="203" />
            </div>
        </div>
        <div class="row">
            <div class="col-sm" v-for="(stratagem, index) in store.loadout.stratagems">
                <h4>Stratagem {{ index + 1 }}</h4>
                <Card :data="stratagem" :width="128" :height="128" :isOutlined="true" />
            </div>
            <div class="col-sm">
                <h4>Booster</h4>
                <Card :data="store.loadout.booster" :width="128" :height="128" :isOutlined="true" />
            </div>
        </div>
        <div class="row justify-content-sm-center">
            <div class="col-sm-auto">
                <InputGroup>
                    <Button @click="store.unlocksOpen = true" icon="pi pi-lock" />
                    <Button @click="getLoadout" label="Get Assigned Loadout" />
                    <Button @click="store.settingsOpen = true" icon="pi pi-cog" />
                </InputGroup>
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