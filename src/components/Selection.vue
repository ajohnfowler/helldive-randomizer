<script setup>
import { useStore } from '@/stores/store';
import { ref } from "vue";

import Tabs from 'primevue/tabs';
import TabList from 'primevue/tablist';
import Tab from 'primevue/tab';
import TabPanels from 'primevue/tabpanels';
import TabPanel from 'primevue/tabpanel';

import Listbox from 'primevue/listbox';

const store = useStore()

const ownedPrimaries = ref();
const ownedSecondaries = ref();
const ownedThrowables = ref();
const ownedStratagems = ref();
</script>

<template>
    <div class="container">
        <Tabs value="0">
            <TabList>
                <Tab value="0">Primaries</Tab>
                <Tab value="1">Secondaries</Tab>
                <Tab value="2">Throwables</Tab>
                <Tab value="3">Stratagems</Tab>
            </TabList>
            <TabPanels>
                <TabPanel class="panel" value="0">
                    <Listbox v-model="ownedPrimaries" :options="store.primaries" multiple optionLabel="name"
                        optionGroupLabel="name" optionGroupChildren="items">
                        <template #optiongroup="slotProps">
                            <div class="flex items-center">
                                <div>{{ slotProps.option.name }}</div>
                            </div>
                        </template>
                    </Listbox>
                </TabPanel>

                <TabPanel value="1">
                    <Listbox v-model="ownedSecondaries" :options="store.secondaries" multiple optionLabel="name"
                        optionGroupLabel="name" optionGroupChildren="items">
                        <template #optiongroup="slotProps">
                            <div class="flex items-center">
                                <div>{{ slotProps.option.name }}</div>
                            </div>
                        </template>
                    </Listbox>
                </TabPanel>

                <TabPanel value="2">
                    <Listbox v-model="ownedThrowables" :options="store.throwables" multiple optionLabel="name"
                        optionGroupLabel="name" optionGroupChildren="items">
                        <template #optiongroup="slotProps">
                            <div class="flex items-center">
                                <div>{{ slotProps.option.name }}</div>
                            </div>
                        </template>
                    </Listbox>
                </TabPanel>

                <TabPanel value="3">
                    <Listbox v-model="ownedStratagems" :options="store.stratagems" multiple optionLabel="name"
                        optionGroupLabel="name" optionGroupChildren="items">
                        <template #optiongroup="slotProps">
                            <div class="flex items-center">
                                <div>{{ slotProps.option.name }}</div>
                            </div>
                        </template>
                    </Listbox>
                </TabPanel>
            </TabPanels>
        </Tabs>
    </div>
</template>