import React from "react"
import styled from "styled-components"

import RowContainer from "../components/RowContainer"
import { usersData } from "../dataSource"

function Users() {
  return (
    <>
      {usersData.map((user) => (
        <SmallPadding key={user.name}>
          <RowContainer rowData={user} />
        </SmallPadding>
      ))}
    </>
  )
}

const SmallPadding = styled.div`
  padding-bottom: 24px;
`

export default Users
