import React, { useState } from "react"

import MainLayout from "src/layouts/MainLayout/MainLayout"
import AlertCell from "src/components/AlertCell/AlertCell"

function Alerts() {
  const [name, setName] = useState("")
  const [date, setDate] = useState("")
  const [description, setDescription] = useState("")
  const [showCreateForm, setShowCreateForm] = useState(false)

  return (
    <MainLayout>
      <button onClick={() => setShowCreateForm(true)}>
        Create new alert
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
      <AlertCell />
    </MainLayout>
  )
}

export default Alerts
