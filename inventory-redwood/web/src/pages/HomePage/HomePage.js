import React, { useContext } from "react"

import MainLayout, { ModalContext } from "src/layouts/MainLayout/MainLayout"
import Summary from "src/components/Summary"
import ItemList from "src/components/ItemList"

const HomePage = () => {
  const modalFunctions = useContext(ModalContext)

  const data = [
    {
      name: "Rice",
      date: "12/01/2020",
      amount: 3,
      location: "KITCHEN"
    },
    {
      name: "Chicken",
      date: "12/01/2020",
      amount: 5,
      location: "KITCHEN"
    }
  ]

  const columns = [
    {title: "Item", field: "name"},
    {title: "Amount", field: "amount"},
    {title: "Get By Date", field: "date"},
    {title: "Location", field: "location"}
  ]

  return (
    <MainLayout>
      <Summary />
      <ItemList
        columns={columns}
        data={data}
        title="Home List"
        showDetails={(rowData) => {
          modalFunctions.setIsModalOpen(true)
          modalFunctions.setItemData(rowData)
        }}
      />
    </MainLayout>
  )
}

export default HomePage
