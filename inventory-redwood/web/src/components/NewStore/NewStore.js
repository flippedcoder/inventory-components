import { useMutation, useFlash } from '@redwoodjs/web'
import { navigate, routes } from '@redwoodjs/router'
import StoreForm from 'src/components/StoreForm'

import { QUERY } from 'src/components/StoresCell'

const CREATE_STORE_MUTATION = gql`
  mutation CreateStoreMutation($input: CreateStoreInput!) {
    createStore(input: $input) {
      id
    }
  }
`

const NewStore = () => {
  const { addMessage } = useFlash()
  const [createStore, { loading, error }] = useMutation(CREATE_STORE_MUTATION, {
    onCompleted: () => {
      navigate(routes.stores())
      addMessage('Store created.', { classes: 'rw-flash-success' })
    },
  })

  const onSave = (input) => {
    createStore({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Store</h2>
      </header>
      <div className="rw-segment-main">
        <StoreForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewStore
