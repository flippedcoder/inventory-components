import React, { useEffect, useState } from "react"
import styled from "styled-components"

import { getData } from "./Users"
import RowContainer from "../components/RowContainer"

function Activities() {
  const [activitiesData, setActivitiesData] = useState([])

  useEffect(() => {
    async function fetchData() {
      const res = await getData("https://fakerapi.it/api/v1/custom?_quantity=31&name=word&date=date&description=text")
      setActivitiesData(res.data)
    }
    fetchData()
  }, [])

  return (
    <>
      {activitiesData.map((activity) => (
        <SmallPadding key={activity.name}>
          <RowContainer rowData={activity} type="activity" />
        </SmallPadding>
      ))}
    </>
  )
}

const SmallPadding = styled.div`
  padding-bottom: 24px;
`

export default Activities
