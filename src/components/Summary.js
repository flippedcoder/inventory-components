import React from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"

function Summary() {
  return (
    <Container>
      <Flex>
        <p>Number of low items: </p>
        <Link to="/items">
          <p>5</p>
        </Link>
      </Flex>
      <Flex>
        <p>Alerts: </p>
        <Link to="/alerts">
          <p>8</p>
        </Link>
      </Flex>
    </Container>
  )
}

const Container = styled.article`
  display: flex;
  justify-content: space-around;
  padding-bottom: 24px;

  & div:first-of-type {
    border-right: none;
  }
`

const Flex = styled.article`
  align-items: center;
  border: 3px solid #5a7702;
  display: flex;
  font-size: 18px;
  justify-content: center;
  width: 100%;

  & a {
    color: #a39bb0;
    font-weight: bold;
    padding: 12px;
    text-decoration: unset;
  }

  & a:hover {
    color: rgba(43, 72, 106, 0.75);
  }
`

export default Summary
