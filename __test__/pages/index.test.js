import { render, fireEvent } from '../utils/testUtils'
import Home from '../../pages'

describe('Home page', () => {
  it('matches snapshot', () => {
    const { getByText } = render(<Home />, {})    
    const heading = getByText('Discover and deploy boilerplate example Next.js projects.')
    expect(heading).toBeVisible()
  })
})
