import { render, screen } from '@testing-library/react'

import Main from '.'

describe('<Main />', () => {
  it('Shold render', () => {
    render(<Main />)
    expect(
      screen.getByRole('heading', { name: /template/i })
    ).toBeInTheDocument()
  })
})
