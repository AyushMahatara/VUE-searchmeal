<template>
  <div class="p-8">
    <h1 class="text-4xl font-bold mb-5">Meals By Letter</h1>
    <div class="mt-8">
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
  </div>
</template>

<script setup>
import { computed } from "@vue/reactivity";
import store from "../store";
import { onMounted, watch } from "vue";
import { useRoute } from "vue-router";
import Meals from "../components/Meals.vue";

const route = useRoute();
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const meals = computed(() => store.state.mealsByLetter);

onMounted(() => {
  if (route.params.letter) {
    store.dispatch("searchMealsByLetter", route.params.letter);
  }
});

watch(
  () => route.params.letter,
  (newLetter) => {
    if (newLetter) {
      store.dispatch("searchMealsByLetter", newLetter);
    }
  }
);
</script>
