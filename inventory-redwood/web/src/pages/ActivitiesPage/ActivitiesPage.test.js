import { render } from '@redwoodjs/testing'

import ActivitiesPage from './ActivitiesPage'

describe('ActivitiesPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ActivitiesPage />)
    }).not.toThrow()
  })
})
