import React from "react"
import { BrowserRouter } from "react-router-dom"
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client"

import MainLayout from "./layouts/MainLayout"
import Routes from "./Routes"

const client = new ApolloClient({
  uri: "http://localhost:8005/graphql",
  cache: new InMemoryCache()
})

function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <MainLayout>
          <Routes />
        </MainLayout>
      </BrowserRouter>
    </ApolloProvider>
  )
}

export default App
