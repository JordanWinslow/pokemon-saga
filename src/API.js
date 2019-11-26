// TODO
// implement requestPokemon endpoint to retrieve every pokemon?

const API = "https://pokeapi.co/api/v2/"
export default API
/*
const pokeAPI = {
  baseURL: "https://pokeapi.co/api/v2/",
  getInitialPokemon: "https://pokeapi.co/api/v2/pokemon",
  getMorePokemon: "https://pokeapi.co/api/v2/pokemon?",
  getSprites: ""
}
*/
/*
REQUEST PATTERN:
1. Get names & id's of pokemon from /pokemon
2. Fetch images for currently visible pokemon from pokemon/${id}
3. When a pokemon is clicked, use it's ID to grab relevant info for details page.
*/
