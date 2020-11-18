import React, { useContext, useEffect, useState } from "react"

import { getData } from './Users'
import ItemList from "../components/ItemList"
import { ModalContext } from "../layouts/MainLayout"
import Summary from "../components/Summary"

function Home() {
  const modalFunctions = useContext(ModalContext)
  const [itemsData, setItemsData] = useState([])

  useEffect(() => {
    async function fetchData() {
      const res = await getData("https://fakerapi.it/api/v1/custom?_quantity=7&amount=counter&name=pokemon&date=date&location=word&description=text")
      setItemsData(res.data)
    }
    fetchData()
  }, [])

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
        data={itemsData}
        title="Home List"
        showDetails={(rowData) => {
          modalFunctions.setIsModalOpen(true)
          modalFunctions.setItemData(rowData)
        }}
      />
    </>
  )
}

export default Home
