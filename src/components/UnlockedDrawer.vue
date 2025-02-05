<script setup>
import Drawer from 'primevue/drawer';
import Accordion from 'primevue/accordion';
import AccordionPanel from 'primevue/accordionpanel';
import AccordionHeader from 'primevue/accordionheader';
import AccordionContent from 'primevue/accordioncontent';

import { useStateStore } from '@/stores/state';
import { useDataStore } from '@/stores/data';

const stateStore = useStateStore();
const dataStore = useDataStore();
</script>

<template>
    <Drawer v-model:visible="stateStore.unlocksOpen" header="Unlocked">
        <Accordion class="selection" value="0">
            <AccordionPanel v-for="(section, index) in dataStore.data" :value="index" class="group">
                <AccordionHeader>{{ section.name }}</AccordionHeader>
                <AccordionContent>
                    <ul v-for="group in section.items">
                        <h3 :class="{ locked: group.items.every((x) => x.locked) }"
                            @click="dataStore.toggleGroup(group)">
                            <span>{{ group.name }}</span>
                        </h3>
                        <li v-for="item in group.items" :class="{ locked: item.locked }"
                            @click="dataStore.toggleItem(item)">
                            <span>{{ item.name }}</span>
                        </li>
                    </ul>
                </AccordionContent>
            </AccordionPanel>
        </Accordion>
    </Drawer>
</template>

<style scoped>
.group {
    border: 1px solid gray;
    margin-top: 10px;
}

h3 {
    border: 1px solid gray;
}

ul {
    padding: 0;
    list-style-type: none;
}

li:nth-child(odd) {
    background-color: rgba(100, 100, 100, 100);
}

.locked {
    text-decoration: line-through;
}

li:hover {
    background-color: rgba(50, 50, 50, 50);
}

span {
    cursor: pointer;
}
</style>