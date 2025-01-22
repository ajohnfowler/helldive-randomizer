import { defineStore } from "pinia";

import primaries_data from "@/assets/primaries.json";
import secondaries_data from "@/assets/secondaries.json";
import throwables_data from "@/assets/throwables.json";
import stratagems_data from "@/assets/stratagems.json";

export type Section = {
  name: string;
  groups: Group[];
};

export type Group = {
  name: string;
  locked: boolean;
  items: Item[];
};

export type Item = {
  name: string;
  image: string;
  locked: boolean;
  backpack: boolean;
  vehicle: boolean;
};

export const useStore = defineStore("store", {
  state: () => ({
    sections: [] as Section[],
  }),

  actions: {
    init() {
      this.loadFileData();
    },

    toggleGroup(group) {
      group.locked = !group.locked;

      group.items.forEach((item) => {
        item.locked = group.locked;
      });
    },

    loadLocalData() {
      if (localStorage.getItem("helldive-data")) {
        try {
          this.sections = JSON.parse(localStorage.getItem("helldive-data"));
        } catch (e) {
          localStorage.removeItem("helldive-data");
        }
      }
    },

    loadFileData() {
      this.sections.push({
        name: "primaries",
        groups: primaries_data,
      });

      this.sections.push({
        name: "secondaries",
        groups: secondaries_data,
      });

      this.sections.push({
        name: "throwables",
        groups: throwables_data,
      });

      this.sections.push({
        name: "stratagems",
        groups: stratagems_data,
      });
    },

    loadGroupData() {},

    saveLocalData() {},
  },
});
