import { ref, computed } from "vue";
import { defineStore } from "pinia";

import primaries_data from "@/assets/primaries.json";
import secondaries_data from "@/assets/secondaries.json";
import throwables_data from "@/assets/throwables.json";
import stratagems_data from "@/assets/stratagems.json";

export type Group = {
  name: string;
  items: Item[];
};

export type Item = {
  name: string;
  image: string;
  unlocked: boolean;
};

export type card = {
  name: string;
  image: string;
};

export const useStore = defineStore("store", {
  state: () => ({
    primaries: [] as Group[],
    secondaries: [] as Group[],
    throwables: [] as Group[],
    stratagems: [] as Group[],
  }),

  // getters: {
  //   getPrimary: (state) =>
  //     state.primaries[Math.floor(Math.random() * state.primaries.length)],

  //   getSecondary: (state) =>
  //     state.secondaries[Math.floor(Math.random() * state.secondaries.length)],

  //   getThrowable: (state) =>
  //     state.throwables[Math.floor(Math.random() * state.throwables.length)],

  //   getStratagems: (state) => {
  //     let list = [];

  //     let temp = state.stratagems;
  //     for (let i = 0; i <= 6; i++) {
  //       list.push();
  //     }
  //   },
  // },

  actions: {
    loadData() {
      this.primaries = primaries_data;
      this.secondaries = secondaries_data;
      this.throwables = throwables_data;
      this.stratagems = stratagems_data;
    },
  },
});
