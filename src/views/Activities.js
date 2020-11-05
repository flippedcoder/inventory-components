import React from "react"
import styled from "styled-components"

import RowContainer from "../components/RowContainer"
import { activitiesData } from '../dataSource'


function Activities() {
  return (
    <>
      {activitiesData.map((activity) => (
        <SmallPadding key={activity.name}>
          <RowContainer rowData={activity} />
        </SmallPadding>
      ))}
    </>
  )
}

const SmallPadding = styled.div`
  padding-bottom: 24px;
`

export default Activities
