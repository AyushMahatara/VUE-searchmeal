<template>
  <div class="max-w-[800px] mx-auto p-8">
    <h1 class="text-5xl font-bold mb-5">{{ meal.strMeal }}</h1>
    <img :src="meal.strMealThumb" alt="meal.steMeal" />
    <div class="grid grid-cols-1 sm:grid-cols-3 text-lg py-2">
      <div class="font-bold">Category: {{ meal.strCategory }}</div>
      <div class="font-bold">Area: {{ meal.strArea }}</div>
      <div class="font-bold">Tags: {{ meal.strTags }}</div>
    </div>

    <div class="my-4">
      {{ meal.strInstructions }}
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2">
      <div>
        <h2 class="text-2xl font-semibold mb-3">Ingredients</h2>
        <ul>
          <template v-for="(el, ind) of new Array(20)" :key="ind">
            <li v-if="meal[`strIngredient${ind + 1}`]">
              {{ ind + 1 }}. {{ meal[`strIngredient${ind + 1}`] }}
            </li>
          </template>
        </ul>
      </div>
      <div>
        <h2 class="text-2xl font-semibold mb-3">Measures</h2>
        <ul>
          <template v-for="(el, ind) of new Array(20)" :key="ind">
            <li v-if="meal[`strMeasure${ind + 1}`]">
              {{ ind + 1 }}. {{ meal[`strMeasure${ind + 1}`] }}
            </li>
          </template>
        </ul>
      </div>
    </div>
    <div class="mt-4">
      <YouTubeButton :href="meal.strYoutube">Go to Youtube</YouTubeButton>
      <a
        :href="meal.strSource"
        target="_blank"
        class="ml-3 px-3 py-2 rounded border-2 border-indigo-600 text-white bg-indigo-600 hover:bg-white hover:text-indigo-600 transition-colors"
        >View Original Source</a
      >
    </div>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";
import { onMounted, ref } from "vue";
import axiosClient from "../axiosClient";
import YouTubeButton from "../components/YouTubeButton.vue";
const route = useRoute();
const meal = ref({});

onMounted(() => {
  axiosClient.get(`lookup.php?i=${route.params.id}`).then(({ data }) => {
    meal.value = data.meals[0];
  });
});
</script>
