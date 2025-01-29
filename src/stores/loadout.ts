import { defineStore } from "pinia";

export const useLoadoutStore = defineStore("helldive-loadout", {
  state: () => ({
    loadout: {},
  }),
});
