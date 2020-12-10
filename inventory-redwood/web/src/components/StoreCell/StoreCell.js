import Store from 'src/components/Store'

export const QUERY = gql`
  query FIND_STORE_BY_ID($id: Int!) {
    store: store(id: $id) {
      id
      name
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Store not found</div>

export const Success = ({ store }) => {
  return <Store store={store} />
}
