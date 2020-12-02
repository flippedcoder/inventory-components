import React, { useState } from "react"
import styled from "styled-components"

function EditBox({ id, name, date, description, onClose, updateData }) {
  const [formName, setFormName] = useState(name || "")
  const [formDate, setFormDate] = useState(date || new Date())
  const [formDescription, setFormDescription] = useState(description || "")

  return (
    <Container>
      <button onClick={onClose}>X</button>
      <form
        onSubmit={() => {
          updateData({
            variables: {
              id,
              name: formName,
              date: formDate,
              description: formDescription
            }
          })
        }}
      >
        <FormField>
          <label htmlFor="formName">Name:</label>
          <input
            id="formName"
            aria-required="false"
            type="text"
            value={formName}
            onChange={(e) => setFormName(e.target.value)}
          />
        </FormField>
        <FormField>
          <label htmlFor="formDate">Date:</label>
          <input
            id="formDate"
            aria-required="false"
            type="text"
            value={formDate}
            onChange={(e) => setFormDate(e.target.value)}
          />
        </FormField>
        <FormField>
          <label htmlFor="formDescription">Description:</label>
          <input
            id="formDescription"
            aria-required="false"
            type="text"
            value={formDescription}
            onChange={(e) => setFormDescription(e.target.value)}
          />
        </FormField>
        <button type="submit">Save</button>
      </form>
    </Container>
  )
}

const Container = styled.section`
    border: 1px solid #a39bb0;
    margin: 24px auto 0 auto;
    width: 50%;
`

const FormField = styled.div`
    padding: 12px;

    & * {
        display: block;
        font-size: 16px;
    }
`

export default EditBox