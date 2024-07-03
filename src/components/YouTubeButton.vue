<template>
  <div class="flex gap-2 justify-center items-center px-3 py-2">
    <a
      :href="href"
      target="_blank"
      class="bg-red-500 text-[13px] cursor-pointer text-white px-4 py-2 rounded-md transition hover:bg-white hover:text-black hover:rounded hover:border border-black"
    >
      <slot></slot>
    </a>
  </div>
</template>

<script setup>
const props = defineProps({
  href: String,
})
</script>
