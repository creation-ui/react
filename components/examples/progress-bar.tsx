import { Container } from '@components/container'
import { Button, ProgressBar, ProgressBarProps } from '@creation-ui/react'
import { ELEMENT_SIZES } from '@creation-ui/react'
import { DocumentedProperty } from 'models/system'
import { useEffect, useState } from 'react'
import { ListOrTypes } from 'utils/list-or-types'
// @ts-ignore
import { useStopwatch } from 'react-timer-hook'

export const ProgressBarExample = ({ ...props }: ProgressBarProps) => {
  return <ProgressBar {...props} />
}

export const ProgressBarAnimatedExample = () => {
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
