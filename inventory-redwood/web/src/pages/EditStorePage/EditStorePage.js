import StoresLayout from 'src/layouts/StoresLayout'
import EditStoreCell from 'src/components/EditStoreCell'

const EditStorePage = ({ id }) => {
  return (
    <StoresLayout>
      <EditStoreCell id={id} />
    </StoresLayout>
  )
}

export default EditStorePage
