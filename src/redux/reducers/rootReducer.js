import types from "../types"
const {
  SET_INITIAL_POKEMON,
  SET_MORE_POKEMON,
  SET_SPRITES,
  SET_POKEMON_DETAILS,
  RETRIEVAL_ERROR
} = types

const INITIAL_STATE = {
  count: 0, // how many pokemon are in the pokedex
  pokemon: [], // every observed & cached pokemon
  next: "" // string to retrieve new pokemon from API: EX: `pokemon?offset=${offset}&limit=${limit}`
}

const rootReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.SET_INITIAL_POKEMON:
      const { count, next, results } = action.initialPokemon
      console.log("count:", count)
      console.log("next:", next)
      console.log("results:", results)
      return {
        ...state,
        count: count,
        pokemon: results,
        next: next
      }
    default:
      return state
  }
}

export default rootReducer
