import { Container } from '@components/container'
import { Button, ErrorText } from '@creation-ui/react'
import { DocumentedProperty } from 'models/system'
import { useState } from 'react'

const errors = [
  "There are errors in your input but we won't tell you what exactly",
  'Did I stutter? Numbers only!',
  'On the ground and give me 20 soldier!',
  'Those are not the droids you are looking for',
  'You are not authorized to do that',
  "You're lucky you're cute",
  'ERROR E000_201210 MALICIOUS INTENT DETECTED *Cyberpunk 2077 music intensifies*',
]

export const ErrorTextExample = () => {
  const [idx, setIdx] = useState(0)
  const [error, setError] = useState(errors[idx])

  const text = errors[idx]

  const clear = () => setError('')
  const setErr = () => {
    //set next idx
    const nextIdx = idx + 1 >= errors.length ? 0 : idx + 1
    setIdx(nextIdx)
    setError(text)
  }

  const buttonText = error !== '' ? 'Clear' : 'Set Error'
  const fn = error !== '' ? clear : setErr

  return (
    <Container variant='column'>
      <ErrorText error={error} />
      <Button onClick={fn} size='sm'>
        {buttonText}
      </Button>
      <pre className='text-xs'>{JSON.stringify({ error }, null, 2)}</pre>
    </Container>
  )
}

export const properties: DocumentedProperty[] = [
  {
    name: 'error',
    description: 'The error message to display',
    type: 'React.ReactNode',
  },
]
