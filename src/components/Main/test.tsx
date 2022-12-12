import { render, screen } from '@testing-library/react'

import Main from '.'

describe('<Main />', () => {
  it('Shold render', () => {
    render(<Main />)
    expect(
      screen.getByRole('heading', { name: /First Component/i })
    ).toBeInTheDocument()
  })

  it('Shold collors', () => {
    const { container } = render(<Main />)
    expect(container.firstChild).toHaveStyle({ 'background-color': '#fefefe' })
  })
})
