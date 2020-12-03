import { render } from '@redwoodjs/testing'

import ItemsPage from './ItemsPage'

describe('ItemsPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ItemsPage />)
    }).not.toThrow()
  })
})
