import React, { useEffect, useState } from "react"
import styled from "styled-components"

import { getData } from './Users'
import RowContainer from "../components/RowContainer"

function Alerts() {
  const [alertsData, setAlertsData] = useState([])

  useEffect(() => {
    async function fetchData() {
      const res = await getData("https://fakerapi.it/api/v1/custom?_quantity=11&name=upc&date=date&description=text")
      setAlertsData(res.data)
    }
    fetchData()
  }, [])

  return (
    <>
      {alertsData.map((alert) => (
        <SmallPadding key={alert.name}>
          <RowContainer rowData={alert} type="alert" />
        </SmallPadding>
      ))}
    </>
  )
}

const SmallPadding = styled.div`
  padding-bottom: 24px;
`

export default Alerts
