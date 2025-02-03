<script setup>
import Button from 'primevue/button';
import Dialog from 'primevue/dialog';
import InputNumber from 'primevue/inputnumber';
import { useStateStore } from '@/stores/state';

const stateStore = useStateStore();
</script>

<template>
    <Dialog v-model:visible="stateStore.settingsOpen" modal header="Edit Loadout Generation"
        :style="{ width: '25rem' }">
        <div class="flex items-center gap-4 mb-4">
            <label for="max-supports" class="font-semibold w-24">Maximum Support Weapons</label>
            <InputNumber id="max-supports" v-model="stateStore.maxSupports" inputId="horizontal-buttons" showButtons
                buttonLayout="horizontal" :step="1" fluid :min="0" :max="4" />
        </div>
        <div class="flex items-center gap-4 mb-4">
            <label for="max-backpacks" class="font-semibold w-24">Maximum Backpacks</label>
            <InputNumber id="max-backpacks" v-model="stateStore.maxBackpacks" inputId="horizontal-buttons" showButtons
                buttonLayout="horizontal" :step="1" fluid :min="0" :max="4" />
        </div>
        <div class="flex items-center gap-4 mb-4">
            <label for="max-vehicles" class="font-semibold w-24">Maximum Vehicles</label>
            <InputNumber id="max-vehicles" v-model="stateStore.maxVehicles" inputId="horizontal-buttons" showButtons
                buttonLayout="horizontal" :step="1" fluid :min="0" :max="4" />
        </div>

        <div class="flex justify-end gap-2">
            <Button type="button" label="Save" @click="stateStore.settingsOpen = false"></Button>
        </div>
    </Dialog>
</template>