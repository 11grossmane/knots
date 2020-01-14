import React from 'react'

import {Navbar} from './components'
import Home from './components/home'
import Routes from './routes'

const App = () => {
  return (
    <React.Fragment>
      <Home />

      <Routes />
    </React.Fragment>
  )
}

export default App
