import * as React from 'react'
import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Login from '../../components/login'
// import faker from 'faker'
import {build, fake} from '@jackfranklin/test-data-bot'

// const buildLoginForm = overrides => ({
//   username: faker.internet.userName(),
//   password: faker.internet.password(),
//   ...overrides,
// })

const buildLoginForm = build({
  fields: {
    username: fake(f => f.internet.userName()),
    password: fake(f => f.internet.password()),
  },
})

test('submitting the form calls onSubmit with username and password', () => {
  // const stubbedCredentials = {
  //   username: 'sampittko',
  //   password: 'myturbopassword',
  // }
  const {username, password} = buildLoginForm()

  const handleSubmit = jest.fn()

  render(<Login onSubmit={handleSubmit} />)

  const usernameInput = screen.getByLabelText(/username/i)
  const passwordInput = screen.getByLabelText(/password/i)

  // userEvent.type(username, stubbedCredentials.username)
  // userEvent.type(password, stubbedCredentials.password)
  userEvent.type(usernameInput, username)
  userEvent.type(passwordInput, password)
  userEvent.click(screen.queryByRole('button', {name: /submit/i}))

  expect(handleSubmit).toHaveBeenCalledTimes(1)
})

/*
eslint
  no-unused-vars: "off",
*/
