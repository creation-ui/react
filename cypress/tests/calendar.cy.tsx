import React from 'react'
import { Calendar } from '../../packages/creation-ui-react/build'

describe('<Calendar />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Calendar onClick={console.log} />)
  })
})