import { flow, keys, pickBy } from 'lodash'
import { PlaygroundControl, PlaygroundState, PlaygroundValues } from '../types'

export const getTruthyKeys = flow(pickBy, keys)

export const controlsMapper = (
  obj: PlaygroundControl[],
  state: PlaygroundState
): any =>
  obj.reduce((acc: any, { controls, name }) => {
    if (!state[name]) return acc

    if (controls) {
      acc[name] = controlsMapper(controls, state)
    } else {
      acc[name] = state[name]
    }
    return acc
  }, {})

export const objectToPropsText = (state: any): string[] =>
  Object.entries(state).flatMap(([key, value]) => {
    if (typeof value === 'boolean') {
      return value ? `${key}` : ''
    } else {
      return `${key}={${JSON.stringify(value)}}`
    }
  })

export const getComponentCode = (
  name: string,
  stateAsProps: string,
  children?: PlaygroundValues
): string => {
  return `
    import React from 'react';
    import { ${name} } from '@creation-ui/react';

    export const Example = () =>
      <${name} ${stateAsProps}${
    children
      ? `>
            ${children}
          </${name}>`
      : ' />'
  }
  `
}
