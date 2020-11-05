import React from "react"
import styled from "styled-components"

function RowContainer({ rowData }) {
  return (
    <>
      <Container>
        <p>Name: {rowData.name}</p>
        <p>Date: {rowData.date}</p>
        <p>Description: {rowData.description}</p>
      </Container>
    </>
  )
}

const Container = styled.div`
  border: 2px solid #5a7702;
  display: flex;
  font-size: 18px;
  padding: 12px;

  & p {
    flex: 1 1 0px;
  }
`

export default RowContainer
