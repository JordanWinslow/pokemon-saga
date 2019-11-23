import { call, take, put, apply } from "redux-saga/effects"
import API from "../../API" // TODO
import types from "../types"

// WATCHER SAGA
export default function* getPokemonSaga() {
  yield take(types.REQUEST_POKEMON, requestPokemonSaga)
}
// WORKER SAGA
function* requestPokemonSaga() {
  const response = yield call(fetch, API.requestPokemon) // TODO - IMPLEMENT API CLASS WITH requestPokemon ENDPOINT
  const pokemon = yield apply(response, response.json)
  yield put({ type: types.POKEMON_RETRIEVED, payload: pokemon })
}

