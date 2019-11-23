import { call, take, put, apply } from "redux-saga/effects"
import API from "../../API" // TODO
import {REQUEST_POKEMON, POKEMON_RETRIEVED, RETRIEVAL_ERROR} from "../types"

// WATCHER SAGA
export default function* getPokemonSaga() {
  yield take(REQUEST_POKEMON, requestPokemonSaga)
}
// WORKER SAGA
function* requestPokemonSaga() {
  try { // using call and apply isn't technically necessary but supposedly it makes testing easier?
  const response = yield call(fetch, API.requestPokemon) // TODO - IMPLEMENT API CLASS WITH requestPokemon ENDPOINT
  const pokemon = yield apply(response, response.json)
  yield put({ type: POKEMON_RETRIEVED, payload: pokemon })
  } catch (e) {
    yield put({ type: RETRIEVAL_ERROR, payload: e })
  }
}