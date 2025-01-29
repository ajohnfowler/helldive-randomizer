import { defineStore } from "pinia";

export const useStateStore = defineStore("helldive-state", {
  state: () => ({
    minSupports: 0,
    maxSupports: 1,
    minBackpacks: 0,
    maxBackpacks: 1,
    minVehicles: 0,
    maxVehicles: 1,

    settingsOpen: false,
    unlocksOpen: false,
  }),
  actions: {},
});
