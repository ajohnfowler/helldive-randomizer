<script setup>
import Accordion from 'primevue/accordion';
import AccordionPanel from 'primevue/accordionpanel';
import AccordionHeader from 'primevue/accordionheader';
import AccordionContent from 'primevue/accordioncontent';

import { useStore } from '@/stores/store';

const store = useStore();
</script>

<template>
    <Accordion class="selection" value="0">
        <AccordionPanel v-for="(section, index) in store.sections" :value="index" class="group">
            <AccordionHeader>{{ section.name }}</AccordionHeader>
            <AccordionContent>
                <ul v-for="group in section.groups">
                    <h3 :class="{ locked: group.items.every((x) => x.locked) }" @click="store.toggleGroup(group)">
                        {{ group.name }}
                    </h3>
                    <li v-for="item in group.items" :class="{ locked: item.locked }" @click="store.toggleItem(item)">
                        {{ item.name }}
                    </li>
                </ul>
            </AccordionContent>
        </AccordionPanel>
    </Accordion>
</template>

<style scoped>
.selection {
    overflow: auto;
    height: 100%;
}

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
</style>