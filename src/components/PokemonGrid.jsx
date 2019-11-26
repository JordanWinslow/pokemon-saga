import React from "react"
import styled from "styled-components"
import { connect } from "react-redux"

import types from "../redux/types"
const { GET_INITIAL_POKEMON } = types
/* 
Not sure if we will even want to request the pokemon here or not, but just in case
I mapped the redux dispatch to props.
*/
const PokemonGrid = ({ getInitialPokemon, pokemon }) => {
  if (pokemon === undefined) {
    getInitialPokemon()
  }
  return (
    <div align="center">
      <h2>Pokemon Array in State:</h2>
      {/*THIS CAN ALSO BE MAPPED IN A SAGA. Not sure which is preferable right now*/}
      {pokemon.map(pokemon => {
        return pokemon.name
      })}
    </div>
  )
}

const mapStateToProps = ({ pokemon }) => {
  return { pokemon: pokemon }
}
const mapDispatchToProps = dispatch => {
  return {
    getInitialPokemon: () => {
      dispatch({ type: GET_INITIAL_POKEMON })
    }
  }
}

const ConnectedPokemonGrid = connect(
  mapStateToProps,
  mapDispatchToProps
)(PokemonGrid)
export default ConnectedPokemonGrid
