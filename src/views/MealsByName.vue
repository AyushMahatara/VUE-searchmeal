<template>
  <div class="flex flex-col p-8">
    <h1 class="text-4xl font-bold mb-5">Meals By Name</h1>

    <input
      type="text"
      v-model="keyword"
      placeholder="Search for Meals"
      class="rounded border-2 border-gray-400 w-full focus:ring-orange-500 focus:border-orange-500"
      @change="searchMeals"
    />
  </div>

  <Meals :meals="meals" />
</template>

<script setup>
import { computed, onMounted, ref } from "vue";
import store from "../store";
import { useRoute } from "vue-router";
import MealItem from "../components/MealItem.vue";
import YouTubeButton from "../components/YouTubeButton.vue";
import Meals from "../components/Meals.vue";

const route = useRoute();
const keyword = ref("");
const meals = computed(() => store.state.searchedMeals);
function searchMeals() {
  store.dispatch("searchMeals", keyword.value);
}

onMounted(() => {
  keyword.value = route.params.name;
  if (keyword.value) searchMeals();
});
</script>
