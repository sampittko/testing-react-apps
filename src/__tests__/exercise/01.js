import * as React from 'react'
import ReactDOM from 'react-dom'
import Counter from '../../components/counter'

beforeEach(() => {
  document.body.innerHTML = ''
})

test('counter increments and decrements when the buttons are clicked', () => {
  // setup
  const div = document.createElement('div')
  document.body.append(div)
  ReactDOM.render(<Counter />, div)

  // tests
  const [decrement, increment] = div.querySelectorAll('button')

  const message = div.firstChild.querySelector('div')

  expect(message.textContent).toBe('Current count: 0')

  const incrementClickEvent = new MouseEvent('click', {
    bubbles: true,
    cancelable: true,
    button: 0,
  })
  increment.dispatchEvent(incrementClickEvent)
  expect(message.textContent).toBe('Current count: 1')

  const decrementClickEvent = new MouseEvent('click', {
    bubbles: true,
    cancelable: true,
    button: 0,
  })
  decrement.dispatchEvent(decrementClickEvent)
  expect(message.textContent).toBe('Current count: 0')

  // cleanup
  div.remove()
})

/* eslint no-unused-vars:0 */
