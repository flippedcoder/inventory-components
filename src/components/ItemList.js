import React from "react"
import MaterialTable from "material-table"

function ItemList({ columns, data, title }) {
  return <MaterialTable columns={columns} data={data} title={title} />
}

export default ItemList
