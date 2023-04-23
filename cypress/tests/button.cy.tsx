import React from 'react'
import { Button } from '../../packages/creation-ui-react/build'
import { buttonClasses } from '../fixtures/classes'

describe('<Button />', () => {
  ;[
    {
      description: 'renders default button',
      input: {
        props: {},
        children: 'Click',
      },
      expected: { classNames: buttonClasses.default, children: 'Click' },
    },
    {
      description: 'renders button with text',
      input: {
        props: {},
        children: 'Click',
      },
      expected: { classNames: buttonClasses.default, children: 'Click' },
    },
    {
      description: 'displays loading state',
      input: {
        props: { loading: true },
        children: 'Click',
      },
      expected: {
        classNames: buttonClasses.loading.default,
        children: 'Click',
      },
    },
    {
      description: 'displays loading state on circle',
      input: {
        props: { loading: true, circle: true },
        children: 'Click',
      },
      expected: {
        classNames: buttonClasses.loading.default,
        children: 'Click',
      },
    },
    // { description: 'handles click events' },
    // { description: 'displays loading state' },
    // { description: 'displays loading state with centered spinner for [circle]' },
    // { description: 'applies custom class names' },
    // { description: 'renders button with iconLeft' },
    // { description: 'renders button with iconRight' },
    // { description: 'displays loader on the left when loading and not circle' },
    // { description: 'displays loader in the center when loading and circle' },
    // { description: 'renders button with different size' },
    // { description: 'renders button with different variant' },
    // { description: 'renders button with different status' },
    // { description: 'renders circle button' },
    // { description: 'applies uppercase class when uppercase prop is true' },
    // { description: 'forwards ref to button element' },
    // {
    //   description:
    //     'renders button with default theme values when no theme is provided',
    // },
    // { description: 'applies theme values from useTheme hook when provided' },
    // { description: 'does not trigger click event when disabled' },
    // { description: 'adds passed id to button' },
    // { description: 'generates an id using useId hook when no id is provided' },
    // { description: 'does not render loader when not loading' },
    // { description: 'disables InteractiveContainer when button is disabled' },
    // {
    //   description:
    //     'applies the correct styles for each combination of variant and status',
    // },
    // { description: 'applies the correct styles when circle prop is true' },
  ].forEach(({ description, input, expected }) => {
    it(description, () => {
      cy.mount(<Button {...input.props}>{input.children}</Button>)

      const button = cy.get('button')

      button.should('have.text', expected.children)

      expected.classNames.forEach(className => {
        button.should('have.class', className)
      })
    })
  })
})
