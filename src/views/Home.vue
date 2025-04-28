<template>
  <div class="flex justify-center gap-2 mt-2">
    <!-- <router-link
      :to="{ name: 'letter', params: { letter } }"
      v-for="letter of letters"
      :key="letter"
      class="p-2 border-2 border-gray-400"
    >
    </router-link> -->
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from "vue";
import store from "../store";
import axiosClient from "../axiosClient.js";

const meals = computed(() => store.state.meals);
const letters = "abcdefghijklmnopqrstuvwxyz".split("");
const ingredients = ref([]);
onMounted(async () => {
  const response = await axiosClient.get("list.php?i=list");
  console.log(response.data);
  ingredients.value = response.data;
});
</script>
