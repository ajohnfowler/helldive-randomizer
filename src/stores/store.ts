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
            console.log(data.includes(item.name));
            item.locked = data.includes(item.name);
          });
        });
      });

      console.log(data);
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
