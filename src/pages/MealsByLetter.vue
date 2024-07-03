<template>
  <h2 class="text-center text-[20px] font-bold my-4">Meals By Letter</h2>
  <div class="flex flex-wrap p-3 gap-2 mt-2 items-center justify-center">
    <router-link
      :to="{ name: 'byLetter', params: { letter: letter } }"
      :key="letter"
      v-for="letter of letters"
      class="cursor-pointer"
    >
      {{ letter }}
    </router-link>
  </div>
  <div v-if="!meals.length" class="text-center text-xl font-bold">
    There are no meals available
    <font-awesome-icon :icon="['fas', 'bars']" />
  </div>
  <Meals :meals="meals" />
</template>

<script setup>
import { onMounted, watch } from 'vue'
import { computed } from '@vue/reactivity'
import { useRoute } from 'vue-router'
import store from '../store'
import Meals from '../components/Meals.vue'

const route = useRoute()
const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
const meals = computed(() => store.state.searchByLetter)

watch(route, () => {
  store.dispatch('searchByLetter', route.params.letter)
})
onMounted(() => {
  store.dispatch('searchByLetter', route.params.letter)
})
</script>
