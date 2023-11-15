import { Container } from '@components/container'
import Icon from '@components/icon'
import { Button, Show, ShowFirstMatching } from '@creation-ui/react'
import { mdiMinus, mdiPlus } from '@mdi/js'
import { DocumentedProperty } from '@models/system'
import { useState } from 'react'

export const ShowExample = () => {
  const [loggedIn, setLoggedIn] = useState(false)

  const login = () => setLoggedIn(true)
  const logout = () => setLoggedIn(false)

  return (
    <Container variant='column'>
      <Show when={loggedIn} fallback={<Button onClick={login}>Log in</Button>}>
        <Button onClick={logout} variant={'outlined'}>
          Log out
        </Button>
      </Show>
    </Container>
  )
}

export const ShowFirstMatchingExample = () => {
  const [value, setValue] = useState(-1)

  const increment = () => setValue(value + 1)
  const decrement = () => setValue(value - 1)

  return (
    <Container variant='column'>
      <div className='flex gap-3'>
        <Button onClick={increment} variant='outlined' size='sm' circle>
          <Icon path={mdiPlus} />
        </Button>
        <Button onClick={decrement} variant='outlined' size='sm' circle>
          <Icon path={mdiMinus} />
        </Button>
      </div>
      <div>
        Value <code>"{value}"</code>
        <ShowFirstMatching fallback={<div>No match</div>}>
          <Show when={value < 0}>is a negative number</Show>
          <Show when={value >= 0 && value <= 5}>is between 0 and 5</Show>
          <Show when={value > 5}>is greater than 5</Show>
          {/* this will never match */}
          <Show when={value >= 15}>is greater than 15</Show>
        </ShowFirstMatching>
      </div>
    </Container>
  )
}

export const properties: DocumentedProperty[] = [
  // classNameProps,
  // openProps,
  // sizeProp,
  // loaderWhiteProp,
  // onClickCallback,
]
