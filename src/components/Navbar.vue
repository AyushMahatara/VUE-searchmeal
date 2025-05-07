<template>
  <header class="bg-white shadow h-16 flex justify-between items-stretch p-8">
    <router-link :to="{ name: 'home' }" class="flex items-center px-5"
      >Home</router-link
    >
    <div class="">
      <router-link
        :to="{ name: 'byName' }"
        class="inline-flex items-center px-2 h-full transition-color hover:bg-purple-200"
        >Search Meals</router-link
      >
      <router-link
        :to="{ name: 'byLetter' }"
        class="inline-flex items-center px-2 h-full transition-color hover:bg-purple-200"
        >Meals By Letter</router-link
      >
      <router-link
        :to="{ name: 'ingredients' }"
        class="inline-flex items-center px-2 h-full transition-color hover:bg-purple-200"
        >Meals By Ingredients</router-link
      >
    </div>
  </header>
</template>

<script setup></script>
