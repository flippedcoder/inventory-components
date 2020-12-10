import { Link, routes } from '@redwoodjs/router'
import styled from 'styled-components'
import MaterialTable from 'material-table'

export const QUERY = gql`
  query {
    items {
      id
      name
      date
      amount
      location
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => <div>Error: {error.message}</div>

export const Success = ({ items }) => {
  const columns = [
    { title: 'Item', field: 'name' },
    { title: 'Amount', field: 'amount', type: 'numeric' },
    { title: 'Get by date', field: 'date' },
    { title: 'Location', field: 'location' },
  ]

  const title = 'Main Table'

  return (
    <FullWidth>
      <MaterialTable columns={columns} data={items} title={title} />
      <footer>
        <Link to={routes.home()}>Home</Link>
      </footer>
    </FullWidth>
  )
}

const FullWidth = styled.div`
  max-width: 100%;
`
