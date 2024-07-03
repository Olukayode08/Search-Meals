// import axiosClient from '../axiosClient'

// export function searchMeals({ commit }, keyword) {
//   axiosClient.get(`/search.php?s=${keyword}`).then(({ data }) => {
//     commit('setSearchedMeals', data.meals)
//   })
// }

import axiosClient from '../axiosClient'

export async function searchByName({ commit }, keyword) {
  const { data } = await axiosClient.get(`/search.php?s=${keyword}`)
  commit('setSearchByName', data.meals)
}


export async function searchByLetter({ commit }, letter) {
  const { data } = await axiosClient.get(`/search.php?f=${letter}`)
  commit('setSearchByLetter', data.meals)
}

export async function searchByIngredient({ commit }, ingredient) {
  const { data } = await axiosClient.get(
    `/filter.php?i=${ingredient}`
  )
  commit('setSearchByIngredient', data.meals)
}