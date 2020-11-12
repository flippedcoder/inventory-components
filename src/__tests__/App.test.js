import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import App from "../App"

describe("App", () => {
  test("renders App component", async () => {
    render(<App />)

    expect(screen.getByText("Taking Inventory")).toBeInTheDocument()
  })
})
