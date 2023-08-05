import { Container } from '@components/container'
import { Button, ProgressBar, ProgressBarProps } from '@creation-ui/react'
import { ELEMENT_SIZES } from '@creation-ui/react'
import { DocumentedProperty } from 'models/system'
import { useEffect, useState } from 'react'
import { ListOrTypes } from 'utils/list-or-types'
// @ts-ignore
import { useStopwatch } from 'react-timer-hook'
import { Playground } from '@components/playground'
import { sizeControl } from './shared-playground-controls'

export const ProgressBarAnimatedExample = props => {
  const [state, setState] = useState(0)

  const { isRunning, start, pause } = useStopwatch({
    autoStart: false,
  })

  const onReset = () => setState(0)
  const onTick = () => setState(s => s + 1)

  useEffect(() => {
    if (isRunning && state < 100) {
      const interval = setInterval(() => onTick(), 200)
      return () => clearInterval(interval)
    } else {
      pause()
    }
  }, [isRunning, state, pause])

  return (
    <Container>
      <ProgressBar value={state} key='animated-progress-bar' showValue />
      <Button onClick={isRunning ? pause : start}>
        {isRunning ? 'Stop' : 'Start'}
      </Button>
      <Button
        disabled={isRunning || state === 0}
        onClick={onReset}
        variant='outlined'
      >
        Reset
      </Button>
    </Container>
  )
}

export const ProgressBarPlayground = () => (
  <Playground
    name='ProgressBar'
    component={ProgressBar}
    controls={[
      sizeControl,
      { name: 'value', type: 'number', defaultValue: 50 },
      { name: 'showValue', type: 'boolean', defaultValue: true },
    ]}
  />
)

export const properties: DocumentedProperty[] = [
  {
    name: 'size',
    type: ListOrTypes([...ELEMENT_SIZES]),
    defaultValue: 'md',
    description: 'Size of element',
  },
  {
    description: 'The value of the progress bar',
    name: 'value',
    type: 'number',
  },
  {
    description: 'Function to format the value of the progress bar.',
    name: 'showValue',
    type: 'boolean',
  },
  {
    description: 'This is the content that ProgressBar wraps around',
    name: 'children',
    type: 'React.ReactNode',
  },
  {
    description: 'Class names override',
    name: 'className',
    type: 'string',
  },
  {
    description: 'Function to format the value of the progress bar.',
    name: 'formatDisplayValue',
    type: '(value: number) => string',
  },
]
