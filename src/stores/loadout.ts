import { defineStore } from "pinia";
import { useDataStore } from "./data";
import { useStateStore } from "./state";
import router from "@/router";

export const useLoadoutStore = defineStore("helldive-loadout", {
  state: () => ({
    primary: {},
    secondary: {},
    throwable: {},
    statagems: [],
    booster: {},
    code: "",
  }),
  actions: {
    getLoadout() {
      const dataStore = useDataStore();
      const stateStore = useStateStore();

      // Primary
      let primaries = dataStore.getItems("primaries");
      this.shuffleArray(primaries);
      this.primary = primaries.pop();

      //Secondary
      let secondaries = dataStore.getItems("secondaries");
      this.shuffleArray(secondaries);
      this.secondary = secondaries.pop();

      // Throwable
      let throwables = dataStore.getItems("throwables");
      this.shuffleArray(throwables);
      this.throwable = throwables.pop();

      // Stratagems
      let stratagems = dataStore.getItems("stratagems");
      this.shuffleArray(stratagems);

      // Booster
      let boosters = dataStore.getItems("boosters");
      this.shuffleArray(boosters);
      this.booster = boosters.pop();

      this.stratagems = [];

      while (stratagems.length > 0) {
        if (this.stratagems.length >= 4) {
          break;
        }

        let stratagem = stratagems.pop();

        // If already have backpack re-start loop
        if (this.backpacks >= stateStore.maxBackpacks && stratagem.backpack) {
          continue;
        }

        // If already have vehicle re-start loop
        if (this.vehicles >= stateStore.maxVehicles && stratagem.vehicle) {
          continue;
        }

        // If already have support weapon re-start loop
        if (this.supports >= stateStore.maxSupports && stratagem.support) {
          continue;
        }

        this.stratagems.push(stratagem);
        this.setCode();
      }
    },

    /* Randomize array in-place using Durstenfeld shuffle algorithm */
    shuffleArray(array) {
      for (var i = array.length - 1; i >= 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
    },

    setCode() {
      this.code =
        this.primary.id + "-" + this.secondary.id + "-" + this.throwable.id;

      this.stratagems.forEach((stratagem) => {
        this.code += "-" + stratagem.id;
      });

      this.code += "-" + this.booster.id;

      router.replace({ path: "/", query: { loadout: this.code } });
    },

    loadCode(newCode) {
      this.code = newCode;
      const code = newCode.split("-");

      this.setPrimary(code[0]);
      this.setSecondary(code[1]);
      this.setThrowable(code[2]);

      this.stratagems = [];

      for (let index = 3; index < 7; index++) {
        this.setStatagem(code[index]);
      }

      this.setBooster(code[7]);
    },

    setPrimary(id: String) {
      const dataStore = useDataStore();
      this.primary = dataStore.getItems("primaries").find((item) => {
        return item.id == id;
      });
    },

    setSecondary(id: String) {
      const dataStore = useDataStore();
      this.secondary = dataStore.getItems("secondaries").find((item) => {
        return item.id == id;
      });
    },

    setThrowable(id: String) {
      const dataStore = useDataStore();
      this.throwable = dataStore.getItems("throwables").find((item) => {
        return item.id == id;
      });
    },

    setStatagem(id: String) {
      const dataStore = useDataStore();
      const stratagem = dataStore.getItems("stratagems").find((item) => {
        return item.id == id;
      });
      this.stratagems.push(stratagem);
    },

    setBooster(id: String) {
      const dataStore = useDataStore();
      this.booster = dataStore.getItems("boosters").find((item) => {
        return item.id == id;
      });
    },
  },
});
