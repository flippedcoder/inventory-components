import { Link, routes } from '@redwoodjs/router'
import styled from 'styled-components'
import MaterialTable from 'material-table'

import MainLayout from 'src/layouts/MainLayout/MainLayout'

const ItemsPage = () => {
  const columns = [
    { title: 'Item', field: 'name' },
    { title: 'Amount', field: 'amount', type: 'numeric' },
    { title: 'Get by date', field: 'date' },
    { title: 'Location', field: 'location' },
  ]

  const dummyData = [
    {
      name: 'Oranges',
      date: '12/02/2020',
      amount: 5,
      location: 'KITCHEN',
    },
  ]

  return <ItemList columns={columns} data={dummyData} title="Main List" />
}

function ItemList({ columns, data, title }) {
  return (
    <MainLayout>
      <FullWidth>
        <MaterialTable columns={columns} data={data} title={title} />
        <footer>
          <Link to={routes.home()}>Home</Link>
        </footer>
      </FullWidth>
    </MainLayout>
  )
}

const FullWidth = styled.div`
  max-width: 100%;
`

export default ItemsPage
