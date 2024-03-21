import { render, screen } from '@testing-library/react'
import About from '../About'
import '@testing-library/jest-dom'

// So this 'test' will accept two arguments 1st is the "string" thht what you want to display and 2nd is the callback function.
test('Should load About Us Component', () => {
  render(<About/>) // here I want to render the Contact Page for testing

  const heading = screen.getByText('WELCOME TO FOODIE ZONE!!!') // screen.getByRole will find all the headings inside the About Page.
  expect(heading).toBeInTheDocument()
})
