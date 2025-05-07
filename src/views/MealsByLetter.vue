<template>
  <h1>Meal By Letter</h1>

  <div class="mt-4">
    <router-link
      :to="{ name: 'byLetter', params: { letter } }"
      v-for="letter of letters"
      :key="letter"
      class="p-2 border-2 border-gray-400"
    >
      {{ letter }}
    </router-link>

    <Meals :meals="meals" />
  </div>
</template>

<script setup>
import { computed } from "@vue/reactivity";
import store from "../store";
import { onMounted, watch } from "vue";
import { useRoute } from "vue-router";
import Meals from "../components/Meals.vue";

const route = useRoute();
const letters = "ABCCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const meals = computed(() => store.state.mealsByLetter);

watch(route, () => {
  store.dispatch("searchMealsByLetter", route.params.letter);
});
onMounted(() => {
  store.dispatch("searchMealsByLetter", route.params.letter);
});
</script>
