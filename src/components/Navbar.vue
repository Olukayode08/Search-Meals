<template>
  <header class="bg-white shadow h-16 flex justify-between items-center">
    <router-link
      :to="{ name: 'home' }"
      class="p-2 rounded-lg transition-colors hover:bg-orange-100"
    >
      Home
    </router-link>
    <div class="flex items-center gap-2">
      <router-link
        :to="{ name: 'byName' }"
        class="p-2 h-full rounded-lg transition-colors hover:bg-orange-100"
      >
        Search Meals
      </router-link>
      <router-link
        :to="{ name: 'byLetter' }"
        class="p-2 h-full rounded-lg transition-colors hover:bg-orange-100"
      >
        Search By Letter
      </router-link>
      <router-link
        :to="{ name: 'byIngredient' }"
        class="p-2 h-full rounded-lg transition-colors hover:bg-orange-100"
      >
        Search By Ingredients
      </router-link>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Navbar',
}
</script>
