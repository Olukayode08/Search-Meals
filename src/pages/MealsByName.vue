<template>
  <div class="p-8">
    <h2 class="text-center text-[20px] font-bold my-4">Search By Name</h2>
    <input
      type="text"
      v-model="keyword"
      class="rounded capitalize p-3 border border-black outline-none  w-full"
      placeholder="Search for Meals"
      @change="searchByName"
    />
  </div>
  <div v-if="!meals.length" class="text-center text-xl font-bold">
    There are no meals available
  </div>
  <Meals :meals="meals" />
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { computed } from '@vue/reactivity'
import store from '../store'
import { useRoute } from 'vue-router'
import Meals from '../components/Meals.vue'

const route = useRoute()
const keyword = ref('')
const meals = computed(() => store.state.searchByName)

function searchByName() {
  if (keyword.value) {
    store.dispatch('searchByName', keyword.value)
  } else {
    store.commit('searchByName', [])
  }
}

// On mount, set the keyword to the route parameter
onMounted(() => {
  keyword.value = route.params.name
  if (keyword.value) {
    searchByName()
  }
})
</script>
