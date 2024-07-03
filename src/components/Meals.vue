<template>
  <div class="flex flex-wrap justify-center items-center text-center gap-5 p-8">
    <div
      v-for="meal in meals"
      :key="meal.idMeal"
      class="w-[270px] bg-white rounded-xl shadow p-3"
    >
      <router-link :to="{ name: 'mealDetails', params: { id: meal.idMeal } }">
        <img
          :src="meal.strMealThumb"
          :alt="meal.strMeal"
          class="w-[230px] h-[200px] m-auto rounded-xl"
        />
      </router-link>
      <h3 class="px-3 py-2 text-[14px] font-bold">{{ meal.strMeal }}</h3>
      <YouTubeButton :href="meal.strYoutube">YouTube</YouTubeButton>
    </div>
  </div>
</template>

<script>
import YouTubeButton from './YouTubeButton.vue';
// const { meals } = defineProps({
//   meals: {
//     type: Array,
//   },
// })

export default {
  name: 'Meals',
  components: {
    YouTubeButton,
  },
  props: {
    meals: Array,
  },
}
</script>
