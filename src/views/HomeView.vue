<script setup lang="ts">
import Toast from 'primevue/toast';

import Loadout from '@/components/Loadout.vue';
import SettingDialog from '@/components/SettingDialog.vue';
import UnlockedDrawer from '@/components/UnlockedDrawer.vue';
</script>

<template>
    <main>
        <Loadout />
        <SettingDialog />
        <UnlockedDrawer />
        <Toast />
    </main>
</template>