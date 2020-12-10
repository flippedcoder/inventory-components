import StoresLayout from 'src/layouts/StoresLayout'
import StoreCell from 'src/components/StoreCell'

const StorePage = ({ id }) => {
  return (
    <StoresLayout>
      <StoreCell id={id} />
    </StoresLayout>
  )
}

export default StorePage
