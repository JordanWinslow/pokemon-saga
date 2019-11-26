import types from "../types"
const {
  SET_INITIAL_POKEMON,
  SET_MORE_POKEMON,
  SET_SPRITES,
  SET_POKEMON_DETAILS,
  RETRIEVAL_ERROR
} = types

const INITIAL_STATE = {
  count: undefined, // how many pokemon are in the pokedex
  pokemon: undefined, // every observed & cached pokemon
  next: "" // string to retrieve new pokemon from API: EX: `pokemon?offset=${offset}&limit=${limit}`
}

const rootReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.SET_INITIAL_POKEMON:
      return {
        ...state,
        pokemon: action.pokemon
      }
    default:
      return state
  }
}

export default rootReducer
