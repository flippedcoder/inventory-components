import styled from 'styled-components'

import RowContainer from "src/components/RowContainer"

export const QUERY = gql`
  query {
    activities {
      id
      name
      date
      description
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => <div>Error: {error.message}</div>

export const Success = ({ activities }) => {
  return (
    <>
      {activities.map((activity) => (
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
