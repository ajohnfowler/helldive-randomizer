import { defineStore } from "pinia";

import primaries_data from "@/assets/primaries.json";
import secondaries_data from "@/assets/secondaries.json";
import throwables_data from "@/assets/throwables.json";
import stratagems_data from "@/assets/stratagems.json";
import boosters_data from "@/assets/boosters.json";

export const useDataStore = defineStore("helldive-data", {
  state: () => ({
    data: [],
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
      this.data.push(primaries_data);
      this.data.push(secondaries_data);
      this.data.push(throwables_data);
      this.data.push(stratagems_data);
      this.data.push(boosters_data);
    },

    loadLocalData() {
      let result = [];

      if (localStorage.getItem("helldive-data")) {
        try {
          result = JSON.parse(localStorage.getItem("helldive-data"));
        } catch (e) {
          localStorage.removeItem("helldive-data");
        }
      }

      this.data.forEach((section) => {
        section.items.forEach((group) => {
          group.items.forEach((item) => {
            item.locked = result.includes(item.name);
          });
        });
      });
    },

    saveLocalData() {
      let result = [];

      this.data.forEach((section) => {
        section.items.forEach((group) => {
          group.items.forEach((item) => {
            if (item.locked) {
              result.push(item.name);
            }
          });
        });
      });

      localStorage.setItem("helldive-data", JSON.stringify(result));
    },

    getItems(name: String) {
      let result = [];

      let section = this.data.find((section) => {
        return section.name == name;
      });

      section.items.forEach((group) => {
        group.items.forEach((item) => {
          if (!item.locked) {
            result.push(item);
          }
        });
      });

      return result;
    },
  },
});
