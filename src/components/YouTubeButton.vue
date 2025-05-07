<template>
  <a
    :href="href"
    target="_blank"
    class="px-3 py-2 bg-red-500 text-white rounded border-2 border-red-500 hover:bg-white hover:text-red-500 transition-colors"
  >
    <slot></slot>
    Youtube
  </a>
</template>

<script setup>
const props = defineProps({
  href: String,
});
</script>
