import React from "react"

import Header from '../components/Header'
import SideNav from '../components/SideNav'

function MainLayout({ children }) {
  return (
    <main>
      <SideNav />
      <div>
        <Header />
        {children}
      </div>
    </main>
  )
}

export default MainLayout
