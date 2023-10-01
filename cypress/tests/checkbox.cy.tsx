import React from 'react'
import Checkbox from '../../packages/react/src/components/checkbox/checkbox'

describe('<Checkbox />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Checkbox />)
  })
})
