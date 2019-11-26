import { call, take, put, apply } from "redux-saga/effects"
import API from "../../API"
import types from "../types"
const {
  GET_INITIAL_POKEMON,
  SET_INITIAL_POKEMON,
  GET_MORE_POKEMON,
  SET_MORE_POKEMON,
  GET_SPRITES,
  SET_SPRITES,
  GET_POKEMON_DETAILS,
  SET_POKEMON_DETAILS,
  RETRIEVAL_ERROR
} = types

// WATCHER SAGAS
export default function* getInitialPokemonSaga() {
  yield take(GET_INITIAL_POKEMON, getInitialPokemon)
}
/*
export function* getMorePokemonSaga() {
  yield take(GET_MORE_POKEMON, getMorePokemon)
}
export function* getSpritesSaga() {
  yield take(GET_SPRITES, getSprites)
}
export function* getPokemonDetailsSaga() {
  yield take(GET_POKEMON_DETAILS, getDetails)
}
*/

// WORKER SAGAS
function* getInitialPokemon() {
  const request = yield fetch(API + "/pokemon") // FETCHES 20 POKEMON BY DEFAULT
  const initialPokemon = yield request.json()
  yield put({ type: SET_INITIAL_POKEMON, initialPokemon: initialPokemon })
}

/*
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
*/
