import React from 'react'
import { Link } from "react-router-dom"
import styled from 'styled-components'

function SideNav() {
    return (
        <Nav>
            <H3>Taking Inventory</H3>
            <Link to="/">Home</Link>
            <Link to="/items">Items</Link>
            <Link to="/alerts">Alerts</Link>
            <Link to="/activities">Activities</Link>
            <Link to="/users">Users</Link>
        </Nav>
    )
}

const H3 = styled.h3`
  font-size: 36px;
`

const Nav = styled.nav`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding-left: 12px;
    width: 250px;

    & a {
        color: #2B486A;
        font-size: 22px;
        text-decoration: unset;
    }

    & a:hover {
        color: rgba(43, 72, 106, 0.75);
    }
`

export default SideNav