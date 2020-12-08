import React from "react"
import styled from "styled-components"
import MaterialTable from "material-table"

function ItemList({ columns, data, title, showDetails, createItem, deleteItem, updateItem }) {
  return (
    <FullWidth>
      <MaterialTable
        columns={columns}
        data={data}
        title={title}
        actions={[
          {
            icon: () => <ViewIcon />,
            tooltip: "View Details",
            onClick: (_event, rowData) => showDetails(rowData)
          },
          {
            icon: () => <CreateIcon />,
            tooltip: "Create Details",
            onClick: (_event, rowData) => createItem(rowData)
          },
          {
            icon: () => <DeleteIcon />,
            tooltip: "Delete Details",
            onClick: (_event, rowData) => deleteItem(rowData)
          },
          {
            icon: () => <UpdateIcon />,
            tooltip: "Update Details",
            onClick: (_event, rowData) => updateItem(rowData)
          }
        ]}
      />
    </FullWidth>
  )
}

const FullWidth = styled.div`
  max-width: 100%;
`

const ViewIcon = styled.div`
  background-color: #d2bba2;
  height: 20px;
  width: 25px;
`

const CreateIcon = styled.div`
  background-color: #83aacc;
  height: 20px;
  width: 25px;
`

const DeleteIcon = styled.div`
  background-color: #bc26a2;
  height: 20px;
  width: 25px;
`

const UpdateIcon = styled.div`
  background-color: #fa435c;
  height: 20px;
  width: 25px;
`

export default ItemList
