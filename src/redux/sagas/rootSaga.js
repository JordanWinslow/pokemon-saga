import { call, takeEvery, put, all, apply } from "redux-saga/effects"
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
function* getInitialPokemonSaga() {
  yield takeEvery(GET_INITIAL_POKEMON, getInitialPokemon)
}
/*
function* getMorePokemonSaga() {
  yield take(GET_MORE_POKEMON, getMorePokemon)
}
function* getSpritesSaga() {
  yield take(GET_SPRITES, getSprites)
}
*/
function* getPokemonDetailsSaga() {
  console.log("WATCHING FOR POKEMON DETAILS")
  yield takeEvery(GET_POKEMON_DETAILS, processPokemonDetails)
}

// WORKER SAGAS
function* getInitialPokemon() {
  console.log("GETTING INITIAL POKEMON")

  const request = yield fetch(API + "pokemon") // FETCHES 20 POKEMON BY DEFAULT
  const initialPokemonData = yield request.json()

  console.log(
    "Initial Pokemon Object:",
    initialPokemonData
  ) /* THIS SHOULD LOG ONLY THE INITIAL FETCH REQUEST
  BUT INSTEAD IT CONTAINS THE RESULTS OF ALL OF MY BELOW OPERATIONS - WHY? - HOW? */
  yield put({
    type: GET_POKEMON_DETAILS, // THIS CALLS processPokemonDetails AND SENDS THE ARRAY OF POKEMON TO IT
    pokemon: initialPokemonData.results
  })

  yield put({ type: SET_INITIAL_POKEMON, initialPokemon: initialPokemonData }) // THIS ADDS THE POKEMON TO STATE
}

function* processPokemonDetails(action) {
  console.log("PROCESSING POKEMON DETAILS")
  const pokemonArray = action.pokemon

  yield pokemonArray.forEach(async (pokemon, id) => {
    const pokemonNumber = id + 1
    const request = await fetch(API + "pokemon/" + pokemonNumber) // FETCHES DETAILED INFO & IMAGES FOR EACH POKEMON
    const pokemonDetails = await request.json()
    const updatedPokemon = { ...pokemon, ...pokemonDetails } // ADD THE NEW DETAILS TO EACH POKEMON OBJECT
    pokemonArray[id] = updatedPokemon // MAGICALLY UPDATES THE initialPokemonData OBJECT BEFORE IT EVER ENTERS STATE!
  })
}

/*************DATABASE*************
const cachePokemon = pokemon => {
  const requestDatabase = indexedDB.open("PokemonSaga", 1)
  requestDatabase.onerror = event => {
    alert(event)
  }
  requestDatabase.onupgradeneeded = event => {
    const database = event.target.result
    const pokemonStore = database.createObjectStore("pokemon", { keyPath: })
  }
}
*/
export default function* rootSaga() {
  yield all([getInitialPokemonSaga(), getPokemonDetailsSaga()])
}
/*
// WATCHER SAGA
default function* getPokemonSaga() {
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
