<template>
  <div class="flex flex-col p-8">
    <input
      type="text"
      v-model="keyword"
      placeholder="Search for Meals"
      class="rounded border-2 border-gray-400 w-full"
      @change="searchMeals"
    />
  </div>

  <div class="grid grid-cols-1 md:grid-cols-3 gap-5 p-8">
    <!-- <pre>{{ meals }}</pre> -->
    <div
      v-for="meal of meals"
      :key="meal.idMeal"
      class="bg-white shadow rounded-xl"
    >
      <img
        :src="meal.strMealThumb"
        :alt="strMeal"
        class="rounded-t-xl w-full h-64 object-cover"
      />
      <div class="px-3">
        <h3 class="p-3 font-semibold">{{ meal.strMeal }}</h3>
        <div class="p-3">
          <a :href="meal.strYoutube" target="_blank">YouTube</a>
          <router-link to="/">View</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";
import store from "../store";

const keyword = ref("");
const meals = computed(() => store.state.searchedMeals);
function searchMeals() {
  store.dispatch("searchMeals", keyword.value);
}
</script>
