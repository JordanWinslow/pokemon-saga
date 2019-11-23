import types from "../types"

const INITIAL_STATE = {
  // PLACEHOLDER
  pokemon: []
}

const rootReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    // PLACEHOLDER
    case types.POKEMON_RETRIEVED:
      return {
        ...state,
        pokemon: action.payload
      }
    default:
      return state
  }
}

export default rootReducer
