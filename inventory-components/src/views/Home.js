import React, { useContext, useState } from "react"
import { gql, useMutation, useQuery } from "@apollo/client"

import ItemList from "../components/ItemList"
import { ModalContext } from "../layouts/MainLayout"
import Summary from "../components/Summary"

function Home() {
  const modalFunctions = useContext(ModalContext)
  const { loading, error, data } = useQuery(ITEMS_LIST)
  const [createItem] = useMutation(CREATE_ITEM)
  const [updateItem] = useMutation(UPDATE_ITEM)
  const [deleteItem] = useMutation(DELETE_ITEM)

  const editableData = data?.getItems.map(item => ({ ...item }))

  const columns = [
    {title: "Item", field: "name"},
    {title: "Amount", field: "amount"},
    {title: "Get By Date", field: "date"},
    {title: "Location", field: "location"}
  ]

  return (
    <>
      <Summary />
      <ItemList
        columns={columns}
        data={editableData}
        title="Home List"
        showDetails={(rowData) => {
          modalFunctions.setIsModalOpen(true)
          modalFunctions.setItemData(rowData)
        }}
      />
    </>
  )
}

const ITEMS_LIST = gql`
  query {
    getItems {
      id
      name
      date
      amount
      location
    }
  }
`

const CREATE_ITEM = gql`
  mutation createItem($name: String, $date: String, $amount: Int, $location: String) {
    createItem(input: { name: $name, date: $date, amount: $amount, location: $location }) {
      id
      name
      date
      amount
      location
    }
  }
`

const UPDATE_ITEM = gql`
  mutation updateItem(
    $id: ID
    $name: String
    $date: String
    $amount: Int
    $location: String
  ) {
    updateItem(
      input: { id: $id, name: $name, date: $date, amount: $amount, location: $location }
    ) {
      id
      name
      date
      amount
      location
    }
  }
`

const DELETE_ITEM = gql`
  mutation deleteItem($id: ID) {
    deleteItem(id: $id)
  }
`

export default Home
