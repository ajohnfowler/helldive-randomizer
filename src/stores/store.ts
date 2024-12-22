import { ref, computed } from "vue";
import { defineStore } from "pinia";

import primaries_data from "@/assets/primaries.json";
import secondaries_data from "@/assets/secondaries.json";
import throwables_data from "@/assets/throwables.json";

type Throwable = {
  name: string;
};

type Primary = {
  name: string;
};

type Secondary = {
  name: string;
};

export const useStore = defineStore("store", {
  state: () => ({
    primaries: [] as Primary[],
    secondaries: [] as Secondary[],
    throwables: [] as Throwable[],
  }),

  getters: {
    getPrimary: (state) =>
      state.primaries[Math.floor(Math.random() * state.primaries.length)],

    getSecondary: (state) =>
      state.secondaries[Math.floor(Math.random() * state.secondaries.length)],

    getThrowable: (state) =>
      state.throwables[Math.floor(Math.random() * state.throwables.length)],
  },

  actions: {
    loadData() {
      this.primaries = primaries_data;
      this.secondaries = secondaries_data;
      this.throwables = throwables_data;
    },
  },
});
