import React from "react"
import styled from "styled-components"

import RowContainer from "../components/RowContainer"
import { alertsData } from "../dataSource"

function Alerts() {
  return (
    <>
      {alertsData.map((alert) => (
        <SmallPadding key={alert.name}>
          <RowContainer rowData={alert} />
        </SmallPadding>
      ))}
    </>
  )
}

const SmallPadding = styled.div`
  padding-bottom: 24px;
`

export default Alerts
