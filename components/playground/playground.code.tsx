import clsx from 'clsx'
import { CopyBlock, vs2015 } from 'react-code-blocks'
import { classes } from './classes'
import { usePlayground } from './context/context'
import { formatCode } from '@utils/format-code'
import { keys, pickBy } from 'lodash'

export const PlaygroundCode = ({ visible }) => {
  const {
    state: { children, ...state },
    name,
  } = usePlayground()

  if (!visible) return null

  const definedProps = pickBy(state, value => Boolean(value))

  const allProps = { ...definedProps }

  const stateAsProps = keys(allProps)
    .map(key => {
      if (typeof allProps[key] === 'boolean') {
        return `${key}`
      }
      return `${key}={${JSON.stringify(allProps[key])}}`
    })
    .join('\n')

  const text = `
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

  return (
    <div className={clsx(classes.code)}>
      <CopyBlock
        text={formatCode(text)}
        language={'jsx'}
        showLineNumbers={true}
        theme={vs2015}
        customStyle={{
          fontSize: '0.875rem',
          lineHeight: '1.25rem',
          padding: '1rem',
          borderTopLeftRadius: 0,
          borderTopRightRadius: 0,
        }}
      />
    </div>
  )
}
