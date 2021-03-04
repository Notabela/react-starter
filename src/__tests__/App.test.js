import { render, fireEvent } from '@testing-library/react';
import App from 'components/App';

// two-kinds of testing - snapshot testing, and DOM testing

describe('Test App', () => {
  // snapshot testing
  it('matches home pages snapshot', () => {
    const { asFragment } = render(<App />);
    expect(asFragment()).toMatchSnapshot();
  })

  // DOM testing -> render components and test them
  // testing library is different from common libraries
  //  The utilities this library provides facilitate querying the DOM in the same way the user would. Finding form elements by their label text (just like a user would),
  // finding links and buttons from their text (like a user would).
  it('toggles text correctly', () => {
    const { getByRole, getByText } = render(<App />);
    expect(getByRole('heading', { level: 1})).toHaveTextContent(/This is React/i) // i = case-insensitive

    fireEvent.click(getByRole('button'))

    const headerElement = getByText(/This is CSC 59939/i)
    expect(headerElement).toBeInTheDocument();
  })
})
