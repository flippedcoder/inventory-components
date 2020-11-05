import React, { useState, createContext } from "react"
import styled from "styled-components"

import Header from "../components/Header"
import QuickView from "../components/QuickView"
import SideNav from "../components/SideNav"

export const ModalContext = createContext()

function MainLayout({ children }) {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [itemData, setItemData] = useState()

  const contextFunctions = {
    setIsModalOpen,
    setItemData
  }

  return (
    <ModalContext.Provider value={contextFunctions}>
      <MainContainer>
        <SideNav />
        <Container>
          <Header />
          {children}
        </Container>
        {isModalOpen && (
          <QuickView
            itemData={itemData}
            onClose={() => setIsModalOpen(false)}
          />
        )}
      </MainContainer>
    </ModalContext.Provider>
  )
}

const MainContainer = styled.main`
  display: flex;
  color: #444444;
  font-family: sans-serif;
  height: 90vh;
`

const Container = styled.div`
  border-left: 2px solid #2b486a;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding: 0 24px;
  width: 80%;
`

export default MainLayout
