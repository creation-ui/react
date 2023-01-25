import { Container } from '@components/container'
import { Button, Icon } from '@creation-ui/react'
import { useState } from 'react'

export const QuickStartExample = () => {
  const [clicks, setClicks] = useState(0)

  const handleClick = () => setClicks(c => c + 1)
  const resetCounter = () => setClicks(0)

  return (
    <Container>
      <Button
        //
        onClick={handleClick}
        iconLeft={<Icon icon='add' />}
      >
        Clicks counter: {clicks}
      </Button>
      <Button
        //
        variant='outlined'
        onClick={resetCounter}
        disabled={clicks === 0}
        iconLeft={<Icon icon='refresh' />}
      >
        Reset
      </Button>
    </Container>
  )
}
