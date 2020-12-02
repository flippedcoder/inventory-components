import React, { useContext, useState } from "react"
import styled from "styled-components"
import { gql, useMutation, useQuery } from "@apollo/client"

import ItemList from "../components/ItemList"
import { ModalContext } from "../layouts/MainLayout"

function Items() {
  const modalFunctions = useContext(ModalContext)
  const { loading, error, data } = useQuery(ITEMS_LIST)
  const [createItem] = useMutation(CREATE_ITEM)
  const [updateItem] = useMutation(UPDATE_ITEM)
  const [deleteItem] = useMutation(DELETE_ITEM)

  const editableData = data?.getItems.map(item => ({ ...item }))

  const columns = [
    { title: "Item", field: "name" },
    { title: "Amount", field: "amount", type: "numeric" },
    { title: "Get by date", field: "date" },
    { title: "Location", field: "location" }
  ]

  return (
    <ListContainer>
      <ItemList
        columns={columns}
        data={editableData}
        title="Main List"
        showDetails={(rowData) => {
          modalFunctions.setIsModalOpen(true)
          modalFunctions.setItemData(rowData)
        }}
      />
    </ListContainer>
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

const ListContainer = styled.div`
  padding-bottom: 48px;
`

export default Items
