import { ref, computed } from "vue";
import { defineStore } from "pinia";

import primaries_data from "@/assets/primaries.json";
import secondaries_data from "@/assets/secondaries.json";
import throwables_data from "@/assets/throwables.json";
import stratagems_data from "@/assets/stratagems.json";

export type Section = {
  name: string;
  locked: boolean;
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
    loadData() {
      this.sections.push({
        name: "primaries",
        locked: false,
        groups: primaries_data,
      });

      this.sections.push({
        name: "secondaries",
        locked: false,
        groups: secondaries_data,
      });

      this.sections.push({
        name: "throwables",
        locked: false,
        groups: throwables_data,
      });

      this.sections.push({
        name: "stratagems",
        locked: false,
        groups: stratagems_data,
      });
    },

    toggleGroup(group) {
      group.locked = !group.locked;

      group.items.forEach((item) => {
        item.locked = group.locked;
      });
    },

    toggleItem(group, item) {
      item.locked = !item.locked;

      group.locked = true;
      group.items.forEach((x) => {
        if (!x.locked) {
          group.locked = false;
          console.log(x.locked);
        }
      });
    },
  },
});
