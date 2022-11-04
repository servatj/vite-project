import { describe, it } from 'vitest'
import { render, screen } from '@testing-library/react'

import App from './App'

describe('App', () => {
  it('basic test', () => {
    render(<App />)
    // expect(screen.findByText('Hello There!')).toBeInTheDocument()
    expect(screen.getByRole('heading')).toHaveTextContent('Hello there!')
  })
})