import React from 'react'
import { Link, routes } from "@redwoodjs/router"
import styled from 'styled-components'

function SideNav() {
    return (
        <Nav>
            <H3>Taking Inventory</H3>
            <Link to={routes.home()}>Home</Link>
            <Link to={routes.items()}>Items</Link>
            <Link to={routes.alerts()}>Alerts</Link>
            <Link to={routes.activities()}>Activities</Link>
            <Link to={routes.users()}>Users</Link>
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
