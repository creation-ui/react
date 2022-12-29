import { Container } from '@components/container'
import { Loader } from '@creation-ui/core'
import { LoaderProps } from '@creation-ui/core/components/loader/loader.types'
import { DocumentedProperty } from '@models/system'
import { sizeProp, classNameProps, loaderWhiteProp } from './shared-props'

export const LoaderExample = (props: LoaderProps) => {
  return (
    <Container>
      <Loader {...props} />
    </Container>
  )
}

export const properties: DocumentedProperty[] = [
  sizeProp,
  classNameProps,
  loaderWhiteProp,
]
