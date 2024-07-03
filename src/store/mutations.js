export function setSearchByName(state, meals) {
  state.searchByName = meals || []
}

export function setSearchByLetter(state, meals) {
  state.searchByLetter = meals || []
}

export function setSearchByIngredient(state, meals) {
  state.searchByIngredient = meals || []
}
