import { defineStore } from "pinia";

import primaries_data from "@/assets/primaries.json";
import secondaries_data from "@/assets/secondaries.json";
import throwables_data from "@/assets/throwables.json";
import stratagems_data from "@/assets/stratagems.json";
import boosters_data from "@/assets/boosters.json";

export type Section = {
  name: string;
  groups: Group[];
};

export type Group = {
  name: string;
  items: Item[];
};

export type Item = {
  name: string;
  image: string;
  locked: boolean;
  backpack: boolean;
  vehicle: boolean;
};

export const useStore = defineStore("helldive-data", {
  state: () => ({
    sections: [] as Section[],
    loadout: {},
    maxSupports: 1,
    maxBackpacks: 1,
    maxVehicles: 1,
    settingsOpen: false,
    unlocksOpen: false,
  }),

  actions: {
    init() {
      this.loadFileData();
      this.loadLocalData();
    },

    toggleGroup(group) {
      let locked = !group.items.every((x) => x.locked);

      group.items.forEach((item) => {
        item.locked = locked;
      });

      this.saveLocalData();
    },

    toggleItem(item) {
      item.locked = !item.locked;

      this.saveLocalData();
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

      this.sections.push({
        name: "boosters",
        groups: boosters_data,
      });
    },

    loadLocalData() {
      let data = [];

      if (localStorage.getItem("helldive-data")) {
        try {
          data = JSON.parse(localStorage.getItem("helldive-data"));
        } catch (e) {
          localStorage.removeItem("helldive-data");
        }
      }

      this.sections.forEach((section) => {
        section.groups.forEach((group) => {
          group.items.forEach((item) => {
            item.locked = data.includes(item.name);
          });
        });
      });
    },

    saveLocalData() {
      let data = [];

      this.sections.forEach((section) => {
        section.groups.forEach((group) => {
          group.items.forEach((item) => {
            if (item.locked) {
              data.push(item.name);
            }
          });
        });
      });

      localStorage.setItem("helldive-data", JSON.stringify(data));
    },
  },
});
