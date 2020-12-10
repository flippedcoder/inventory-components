import { useMutation, useFlash } from '@redwoodjs/web'
import { navigate, routes } from '@redwoodjs/router'
import StoreForm from 'src/components/StoreForm'

export const QUERY = gql`
  query FIND_STORE_BY_ID($id: Int!) {
    store: store(id: $id) {
      id
      name
    }
  }
`
const UPDATE_STORE_MUTATION = gql`
  mutation UpdateStoreMutation($id: Int!, $input: UpdateStoreInput!) {
    updateStore(id: $id, input: $input) {
      id
      name
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Success = ({ store }) => {
  const { addMessage } = useFlash()
  const [updateStore, { loading, error }] = useMutation(UPDATE_STORE_MUTATION, {
    onCompleted: () => {
      navigate(routes.stores())
      addMessage('Store updated.', { classes: 'rw-flash-success' })
    },
  })

  const onSave = (input, id) => {
    updateStore({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit Store {store.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <StoreForm
          store={store}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
