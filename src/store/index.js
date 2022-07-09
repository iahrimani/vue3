import { defineStore } from "pinia";

export const useCounterStore = defineStore("counter", {
  state: () => ({
    count: 0,
    test: "Test",
  }),
  getters: {
    double() {
      console.log(this.$state);
    },
  },
  actions: {
    increment() {
      this.count++;
    },
  },
});
