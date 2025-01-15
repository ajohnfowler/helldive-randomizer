<script setup>
import TabView from 'primevue/tabview';
import TabPanel from 'primevue/tabpanel';

import { useStore } from '@/stores/store';

const store = useStore();
</script>

<template>
    <TabView>
        <TabPanel header="Primaries">
            <ul>
                <li v-for="item in store.primaries">
                    {{ item.name }}
                </li>
            </ul>
        </TabPanel>
        <TabPanel header="Secondaries">

        </TabPanel>
        <TabPanel header="Throwables">

        </TabPanel>
        <TabPanel header="Stratagems">

        </TabPanel>
    </TabView>
</template>