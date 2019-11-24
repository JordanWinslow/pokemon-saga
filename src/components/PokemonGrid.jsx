import React from "react"
import styled from "styled-components"
import { connect } from "react-redux"

import { REQUEST_POKEMON } from "../redux/types"

/* 
Not sure if we will even want to request the pokemon here or not, but just in case
I mapped the redux dispatch to props.
*/
const PokemonGrid = ({ requestPokemon, pokemon }) => {
  return (
    <div align="center">
      <h2>Pokemon Array in State:</h2>
      {/*THIS CAN ALSO BE MAPPED IN A SAGA. Not sure which is preferable right now*/}
      {pokemon.map(pokemon => {
        return pokemon.someValueHere
      })}
      <p>fetch pokemon & display them with this component?</p>
      <button onClick={requestPokemon}>Demonstration Get Pokemon Button</button>
    </div>
  )
}

const mapStateToProps = ({pokemon}) => {
  return { pokemon: pokemon }
}
const mapDispatchToProps = dispatch => {
  return {
    requestPokemon: () => {
      dispatch({ type: REQUEST_POKEMON })
    }
  }
}

const ConnectedPokemonGrid = connect(
  mapStateToProps,
  mapDispatchToProps
)(PokemonGrid)
export default ConnectedPokemonGrid
