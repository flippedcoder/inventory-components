import { render } from '@redwoodjs/testing'

import AlertsPage from './AlertsPage'

describe('AlertsPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<AlertsPage />)
    }).not.toThrow()
  })
})
