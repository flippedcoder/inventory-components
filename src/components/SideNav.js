import React from 'react'

function SideNav() {
    return (
        <nav>
            <h3>Taking Inventory</h3>
            <a href="/">Home</a>
            <a href="/items">Items</a>
            <a href="/alerts">Alerts</a>
            <a href="/activities">Activities</a>
            <a href="/users">Users</a>
        </nav>
    )
}

export default SideNav