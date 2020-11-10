import React, { useEffect, useState } from "react"
import styled from "styled-components"

import RowContainer from "../components/RowContainer"

function Users() {
  const [usersData, setUsersData] = useState([])

  useEffect(() => {
    async function fetchData() {
      const res = await getData("https://fakerapi.it/api/v1/custom?_quantity=9&name=name&date=date&description=word")
      setUsersData(res.data)
    }
    fetchData()
  }, [])

  return (
    <>
      {usersData.map((user) => (
        <SmallPadding key={user.name}>
          <RowContainer rowData={user} type="user" />
        </SmallPadding>
      ))}
    </>
  )
}

export async function getData(url = "") {
  const response = await fetch(url, {
    method: "GET"
  })
  return response.json()
}

const SmallPadding = styled.div`
  padding-bottom: 24px;
`

export default Users
