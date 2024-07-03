<template>
  <div class="flex flex-col justify-center items-center text-center gap-5 p-8">
    <div class="w-[270px] bg-white rounded-xl shadow p-3">
      <h3 class="px-3 py-2 text-[20px] font-bold">{{ meal.strMeal }}</h3>
      <img
        :src="meal.strMealThumb"
        :alt="meal.strMeal"
        class="w-[230px] m-auto rounded-xl"
      />

      <YouTubeButton :href="meal.strYoutube">YouTube </YouTubeButton>
    </div>
    <div class="flex gap-3">
      <h1>
        <span class="font-medium text-[17px]">Category:</span>
        {{ meal.strCategory }}
      </h1>
      <h1>
        <span class="font-medium text-[17px]">Location:</span>
        {{ meal.strArea }}
      </h1>
    </div>
    <p>
      <span class="font-medium text-[17px]">Instructions:</span>
      {{ meal.strInstructions }}
    </p>
    <div class="flex flex-col gap-2">
      <h1 class="font-medium text-[20px] text-center">Ingredients/Quantity</h1>
      <div
        v-for="(eachMeal, index) of Array(20)"
        :key="index"
        class="flex gap-2 items-center justify-left"
      >
        <p v-if="meal[`strIngredient${index + 1}`]" class="capitalize">
          <span class="font-medium capitalize text-[14px]"
            >{{ index + 1 }}.</span
          >
          {{ meal[`strIngredient${index + 1}`] }} /
        </p>
        <p v-if="meal[`strMeasure${index + 1}`]" class="capitalize">
          {{ meal[`strMeasure${index + 1}`] }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import YouTubeButton from '../components/YouTubeButton.vue'
import { onMounted, ref } from 'vue'
import axiosClient from '../axiosClient'
import { useRoute } from 'vue-router'

const route = useRoute()
const meal = ref({})

onMounted(async () => {
  const { data } = await axiosClient.get(`/lookup.php?i=${route.params.id}`)
  meal.value = data.meals[0] || {}
})

</script>
