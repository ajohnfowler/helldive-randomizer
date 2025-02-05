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
    loadoutStore.loadCode(code)
} else {
    loadoutStore.getLoadout()
}
</script>

<template>
    <div class="container">
        <div class="row">
            <div class="col-sm">
                <Card :section="'primaries'" :title="'Primary'" :data="loadoutStore.primary" :width="379"
                    :height="203" />
            </div>
            <div class="col-sm">
                <Card :section="'secondaries'" :title="'Secondary'" :data="loadoutStore.secondary" :width="379"
                    :height="203" />
            </div>
            <div class="col-sm">
                <Card :section="'throwables'" :title="'Throwable'" :data="loadoutStore.throwable" :width="203"
                    :height="203" />
            </div>
        </div>
        <div class="row">
            <div class="col-sm" v-for="(stratagem, index) in loadoutStore.stratagems">
                <Card :section="'stratagems'" :title="'Stratagem ' + (index + 1)" :data="stratagem" :width="128"
                    :height="128" :isOutlined="true" />
            </div>
            <div class="col-sm">
                <Card :section="'boosters'" :title="'Booster'" :data="loadoutStore.booster" :width="128" :height="128"
                    :isOutlined="true" />
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