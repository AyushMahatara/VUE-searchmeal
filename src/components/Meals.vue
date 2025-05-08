<template>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-5 p-8">
    <MealItem v-for="meal of meals" :key="meal.idMeal" :meal="meal" />
  </div>
  <div
    v-if="!meals.length"
    class="flex justify-center items-center text-gray-600 p-8"
  >
    <p>No Meals Found</p>
  </div>
</template>

<script setup>
import MealItem from "../components/MealItem.vue";

const { meals } = defineProps({
  meals: {
    required: true,
    type: Object,
  },
});
</script>
