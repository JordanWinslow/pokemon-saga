import React from "react"
import { BrowserRouter as Router } from "react-router-dom"
import { Provider } from "react-redux"

import store from "./redux/store"
import PokemonGrid from "./components/PokemonGrid"

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <p align="center">
            TODO: check react-redux provider and react router to ensure proper
            declaration. I did it from memory.
          </p>
          <PokemonGrid />
        </div>
      </Router>
    </Provider>
  )
}

export default App
