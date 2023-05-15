import { Container } from '@components/container'
import { Button, Show } from '@creation-ui/react'
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

export const properties: DocumentedProperty[] = [
  // classNameProps,
  // openProps,
  // sizeProp,
  // loaderWhiteProp,
  // onClickCallback,
]
