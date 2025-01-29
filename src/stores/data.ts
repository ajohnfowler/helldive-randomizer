import { defineStore } from "pinia";

import primaries_data from "@/assets/primaries.json";
import secondaries_data from "@/assets/secondaries.json";
import throwables_data from "@/assets/throwables.json";
import stratagems_data from "@/assets/stratagems.json";
import boosters_data from "@/assets/boosters.json";

export const useDataStore = defineStore("helldive-data", {
  state: () => ({
    data: {},
  }),

  actions: {
    init() {
      this.loadFileData();
      this.loadLocalData();
    },

    loadFileData() {
      this.sections.push(primaries_data);
      this.sections.push(secondaries_data);
      this.sections.push(throwables_data);
      this.sections.push(stratagems_data);
      this.sections.push(boosters_data);
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
        section.items.forEach((group) => {
          group.items.forEach((item) => {
            item.locked = data.includes(item.name);
          });
        });
      });
    },

    saveLocalData() {
      let data = [];

      this.sections.forEach((section) => {
        section.items.forEach((group) => {
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
