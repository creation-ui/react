import React from 'react'
import { Calendar } from '../../packages/react/build'

describe('<Calendar />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Calendar onChange={console.log} />)
  })
})
