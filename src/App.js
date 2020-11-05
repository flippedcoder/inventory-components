import React from "react"
import { BrowserRouter } from "react-router-dom"

import MainLayout from "./layouts/MainLayout"
import Routes from './Routes'

function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes />
      </MainLayout>
    </BrowserRouter>
  )
}

export default App
