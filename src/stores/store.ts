import { ref, computed } from "vue";
import { defineStore } from "pinia";

import primaries_data from "@/assets/primaries.json";
import secondaries_data from "@/assets/secondaries.json";
import throwables_data from "@/assets/throwables.json";

import { Weapon } from "@/models/weapon";
import { Stratagem } from "@/models/stratagem";

export const useStore = defineStore("store", {
  state: () => ({
    primaries: [] as Weapon[],
    secondaries: [] as Weapon[],
    throwables: [] as Weapon[],
    stratagems: [] as Stratagem[],
  }),

  getters: {
    getPrimary: (state) =>
      state.primaries[Math.floor(Math.random() * state.primaries.length)],

    getSecondary: (state) =>
      state.secondaries[Math.floor(Math.random() * state.secondaries.length)],

    getThrowable: (state) =>
      state.throwables[Math.floor(Math.random() * state.throwables.length)],

    getStratagems: (state) => {
      let list = []

      let temp = state.stratagems;
      for (let i = 0; i <= 6; i++) {
        list.push()
      }
    }
  },

  actions: {
    loadData() {
      this.primaries = primaries_data;
      this.secondaries = secondaries_data;
      this.throwables = throwables_data;
    },
  },
});
