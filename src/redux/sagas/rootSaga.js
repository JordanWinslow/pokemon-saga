import { call, takeLatest, put } from "redux-saga/effects"
import API from "../../API" // TODO
import types from "../types"

// WATCHER SAGA
export default function* getPokemonSaga() {
  yield takeLatest(types.REQUEST_POKEMON, requestPokemonSaga)
}
// WORKER SAGA
function* requestPokemonSaga() {
  const pokemon = yield call(requestPokemon)
  yield put({ type: types.POKEMON_RETRIEVED, payload: pokemon })
}

const requestPokemon = async () => {
  // TODO - IMPLEMENT API CLASS WITH requestPokemon ENDPOINT
  const response = await fetch(API.requestPokemon)
  const pokemon = await response.json()
  return pokemon
}
