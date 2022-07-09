<template>
  <!--  <h1>{{ count }}</h1>-->
  <!--  <p>{{ double }}</p>-->
  <!--  <button @click="increment">Plus</button>-->
  <!--  <p class="privet">Привет, как дела !</p>-->
  <section class="section">
    <div class="div">Раз</div>
    <div class="div">Два</div>
    <div class="div">Три</div>
  </section>
</template>

<script>
import { useCounterStore } from "@/store";
import { storeToRefs } from "pinia/dist/pinia";
import { ref } from "vue";

export default {
  name: "App",
  setup() {
    const counterStore = useCounterStore();
    const { increment } = counterStore;
    const { double, count } = storeToRefs(counterStore);
    const test = ref("qwerty");
    console.log(test);

    return {
      count,
      double,
      increment,
    };
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap");

html,
body {
  font-family: "Roboto", sans-serif;
}

#app {
  font-family: "Roboto", sans-serif;
}

.section {
  display: flex;
  justify-content: space-between;
  font-size: 40px;
  font-weight: 700;
}

.div {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  width: 200px;
  margin: 10px;
  color: green;
  border: 5px solid #000000;
  transition: border 0.5s ease;
}

.div:hover {
  border: 5px solid #45f;
  cursor: pointer;
}
</style>
