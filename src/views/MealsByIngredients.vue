<template>
  <Meals :meals="meals" />
</template>

<script setup>
import { onMounted, ref } from "vue";
import { computed } from "@vue/reactivity";
import { useRoute } from "vue-router";
import Meals from "../components/Meals.vue";
import MealItem from "../components/MealItem.vue";
import store from "../store";

const route = useRoute();
const meals = computed(() => store.state.mealsByIngredient);

onMounted(() => {
  store.dispatch("searchMealsByIngredient", route.params.ingredient);
});
</script>
