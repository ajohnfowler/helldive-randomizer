<script setup>
import { useStore } from '@/stores/store';
import { ref } from "vue";

const store = useStore()
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

                </TabPanel>

                <TabPanel class="panel" value="1">

                </TabPanel>

                <TabPanel class="panel" value="2">

                </TabPanel>

                <TabPanel class="panel" value="3">

                </TabPanel>
            </TabPanels>
        </Tabs>
    </div>
</template>