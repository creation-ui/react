import { Theme } from '@creation-ui/react'
import { formatCode } from '@utils/format-code'
import clsx from 'clsx'
import { keys, pickBy } from 'lodash'
import React from 'react'
import { CopyBlock, vs2015 } from 'react-code-blocks'
import { usePlayground } from './context'
import { useControlComponents } from './use-control-components'
interface PlaygroundProps {
  children?: React.ReactNode
}

const borderColor = 'border-info-200 dark:border-info-800'

const classes = {
  container: [borderColor, 'grid', 'grid-cols-3', 'border', 'rounded-lg'],
  view: [
    'col-span-2',
    'flex',
    'items-center',
    'place-items-center',
    'p-10',
    'justify-center',
  ],
  controls: [borderColor, 'flex', 'flex-col', 'border-l', 'p-4', 'gap-2'],
  title: ['text-xl', 'font-semibold', 'leading-relaxed'],
  code: ['col-span-3', 'border-t', borderColor],
}

export const PlaygroundView = ({ children }: PlaygroundProps) => {
  const controlComponents = useControlComponents()
  const {
    state: { content, ...state },
    config: { name, hasChildren },
  } = usePlayground()

  const cleanState = pickBy(state, value => Boolean(value))

  const stateAsProps = keys(cleanState)
    .map(key => {
      if (typeof cleanState[key] === 'boolean') {
        return `${key}`
      }
      return `${key}={${JSON.stringify(cleanState[key])}}`
    })
    .join('\n')

  const code = formatCode(`
    import React from 'react'
    import { ${name} } from '@creation-ui/react'

    export const Example = () => {
      return (
        <div>
          <${name} ${stateAsProps}${
    hasChildren
      ? `>
            ${content}
          </${name}>`
      : ' />'
  }
        </div>
      )
    }
  `)

  return (
    <Theme theme={{ size: 'sm' }}>
      <div className={clsx(classes.container)}>
        <div className={clsx(classes.view)}>{children}</div>
        <div className={clsx(classes.controls)}>
          {controlComponents.map((component, index) => (
            <React.Fragment key={index}>{component}</React.Fragment>
          ))}
        </div>
        <div className={clsx(classes.code)}>
          <CopyBlock
            className='p-4 text-sm w-full'
            text={code}
            language={'typescript'}
            showLineNumbers={true}
            theme={vs2015}
            customStyle={{
              fontSize: '0.875rem',
              lineHeight: '1.25rem',
              padding: '1rem',
            }}
          />
        </div>
      </div>
    </Theme>
  )
}
