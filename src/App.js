import React from 'react'
import { Router } from 'react-static'
import styled, { injectGlobal } from 'styled-components'
import { hot } from 'react-hot-loader'
import Routes from 'react-static-routes'

injectGlobal`
  * {
    box-sizing: border-box;
  }

  html {
    font-size: 1px;
  }

  body {
    display: flex;
    font-family: Montserrat, arial, sans-serif;
    font-size: 15rem;
    margin: 0;
    min-height: 100vh;
  }

  #root {
    align-items: center;
    display: flex;
    flex: 1;
    flex-flow: column nowrap;
  }
`

const App = () => (
  <Router>
    <Routes />
  </Router>
)

export default hot(module)(App)
