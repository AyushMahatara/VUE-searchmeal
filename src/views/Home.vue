<template>
  <div class="p-8 pb-0 text-orange-500">
    <h1 class="text-4xl font-bold mb-4">Random Meals</h1>
  </div>
  <Meals :meals="meals" />
</template>

<script setup>
import { computed, onMounted, ref } from "vue";
import store from "../store";
import axiosClient from "../axiosClient.js";
import Meals from "../components/Meals.vue";

// const meals = computed(() => store.state.meals);
const meals = ref([]);
onMounted(async () => {
  for (let i = 0; i < 10; i++) {
    axiosClient.get("random.php").then(({ data }) => {
      meals.value.push(data.meals[0]);
    });
  }
  // const response = await axiosClient.get("list.php?i=list");
  // console.log(response.data);
  // ingredients.value = response.data;
});
</script>
