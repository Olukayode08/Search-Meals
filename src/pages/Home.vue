<template>
  <div class="p-8">
    <h2 class="text-center text-[20px] font-bold my-4">Random Meals By Olukayode</h2>
  </div>
  <Meals :meals="meals" />
</template>

<script setup>
import { onMounted, ref } from 'vue'
import store from '../store'
import Meals from '../components/Meals.vue'
import axiosClient from '../axiosClient.js'

const meals = ref([])

onMounted(async () => {
  for (let i = 0; i < 10; i++) {
    const { data } = await axiosClient.get(`/random.php`)
    meals.value.push(data.meals[0])
  }
})
</script>
