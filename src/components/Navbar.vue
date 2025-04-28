<template>
  <header class="bg-white shadow h-16 flex justify-between items-stretch">
    <router-link :to="{ name: 'home' }" class="flex items-center px-5"
      >Home</router-link
    >
    <div class="">
      <router-link
        :to="{ name: 'byName' }"
        class="inline-flex items-center px-2 h-full transition-color hover:bg-purple-200"
        >about</router-link
      >
      <router-link
        :to="{ name: 'byLetter' }"
        class="inline-flex items-center px-2 h-full transition-color hover:bg-purple-200"
        >about</router-link
      >
      <router-link
        :to="{ name: 'byIngredient' }"
        class="inline-flex items-center px-2 h-full transition-color hover:bg-purple-200"
        >about</router-link
      >
    </div>
  </header>
</template>

<script setup></script>
