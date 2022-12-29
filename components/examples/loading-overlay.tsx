import { Container } from '@components/container'
import { Button } from '@creation-ui/button'
import { LoadingOverlay } from '@creation-ui/core'
import { LoadingOverlayProps } from '@creation-ui/core/components/loading-overlay/loading-overlay.types'
import { DocumentedProperty } from '@models/system'
import { useState } from 'react'
import { classNameProps, loaderWhiteProp, onClickCallback, openPropAsActive, sizeProp } from './shared-props'

export const LoadingOverlayExample = (props: LoadingOverlayProps) => {
  const [loading, setLoading] = useState(true)

  const start = () => setLoading(true)
  const end = () => setLoading(false)
  const handleClick = loading ? end : start

  return (
    <Container variant='column'>
      <div
        className='
      relative
      overflow-clip
      bg-blue-200 h-36 w-36 rounded-lg'
      >
        <LoadingOverlay active={loading} {...props} />
      </div>

      <Button onClick={handleClick}>
        {loading ? 'Stop' : 'Start'} loading
      </Button>
    </Container>
  )
}

export const properties: DocumentedProperty[] = [
  classNameProps,
  openPropAsActive,
  sizeProp,
  loaderWhiteProp,
  onClickCallback
]
