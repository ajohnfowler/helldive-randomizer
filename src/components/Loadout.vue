<script setup>
import Button from 'primevue/button';
import InputGroup from 'primevue/inputgroup';

import Card from './Card.vue';
import { useLoadoutStore } from '@/stores/loadout';
import { useStateStore } from '@/stores/state';

const loadoutStore = useLoadoutStore()
const stateStore = useStateStore()

let params = new URLSearchParams(document.location.search);
const code = params.get("loadout");
if (code) {
    console.log(code)
    loadoutStore.loadCode(code)
} else {
    loadoutStore.getLoadout()
}
</script>

<template>
    <div class="container">
        <div class="row">
            <div class="col-sm">
                <h4>Primary</h4>
                <Card :data="loadoutStore.primary" :width="379" :height="203" />
            </div>
            <div class="col-sm">
                <h4>Secondary</h4>
                <Card :data="loadoutStore.secondary" :width="379" :height="203" />
            </div>
            <div class="col-sm">
                <h4>Throwable</h4>
                <Card :data="loadoutStore.throwable" :width="203" :height="203" />
            </div>
        </div>
        <div class="row">
            <div class="col-sm" v-for="(stratagem, index) in loadoutStore.stratagems">
                <h4>Stratagem {{ index + 1 }}</h4>
                <Card :data="stratagem" :width="128" :height="128" :isOutlined="true" />
            </div>
            <div class="col-sm">
                <h4>Booster</h4>
                <Card :data="loadoutStore.booster" :width="128" :height="128" :isOutlined="true" />
            </div>
        </div>
        <div class="row justify-content-sm-center">
            <div class="col-sm-auto">
                <InputGroup>
                    <Button @click="stateStore.unlocksOpen = true" icon="pi pi-lock" />
                    <Button @click="loadoutStore.getLoadout" label="Get Assigned Loadout" />
                    <Button @click="stateStore.settingsOpen = true" icon="pi pi-cog" />
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