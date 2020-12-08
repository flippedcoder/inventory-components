import React, { useState } from "react"
import styled from "styled-components"

import RowContainer from "src/components/RowContainer"
import MainLayout from "src/layouts/MainLayout/MainLayout"

function Users() {
  const [name, setName] = useState("")
  const [date, setDate] = useState("")
  const [description, setDescription] = useState("")
  const [showCreateForm, setShowCreateForm] = useState(false)

  const data = [
    {
      name: "Get mustard",
      date: "11/23/2020",
      description: "Spicy brown mustard"
    },
    {
      name: "Find hand soap dispensers",
      date: "11/30/2020",
      description: "Replace plastic ones"
    }
  ]

  return (
    <MainLayout>
      <button onClick={() => setShowCreateForm(true)}>
        Create new user
      </button>
      {showCreateForm && (
        <form
          onSubmit={() => {
            setName("")
            setDate("")
            setDescription("")
          }}
        >
          <label>Name: </label>
          <input
            value={name}
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
          />
          <label>Date: </label>
          <input
            value={date}
            placeholder="Date"
            onChange={(e) => setDate(e.target.value)}
          />
          <label>Description: </label>
          <input
            value={description}
            placeholder="Description"
            onChange={(e) => setDescription(e.target.value)}
          />
          <button type="submit">Save</button>
        </form>
      )}
      {data.map((user) => (
        <SmallPadding key={user.name}>
          <RowContainer rowData={user} type="user" />
        </SmallPadding>
      ))}
    </MainLayout>
  )
}

const SmallPadding = styled.div`
  padding-bottom: 24px;
`

export default Users
