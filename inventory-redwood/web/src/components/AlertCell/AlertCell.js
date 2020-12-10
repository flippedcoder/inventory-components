import styled from 'styled-components'

import RowContainer from 'src/components/RowContainer'

export const QUERY = gql`
  query {
    alerts {
      id
      name
      date
      description
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>There are no alerts</div>

export const Failure = ({ error }) => <div>Error: {error.message}</div>

export const Success = ({ alerts }) => {
  return (
    <>
      {alerts.map((alert) => (
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
