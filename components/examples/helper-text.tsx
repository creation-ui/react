import { usePlayground } from '@components/playground/context'
import { HelperText } from '@creation-ui/react'
import { DocumentedProperty } from 'models/system'
import { sizeProp } from './shared-props'

export const HelperTextExample = () => {
  const {
    state: { error, helperText, size },
  } = usePlayground()

  return helperText ? (
    <HelperText
      helperText={error || helperText}
      error={Boolean(error)}
      size={size}
    />
  ) : null
}

export const properties: DocumentedProperty[] = [
  {
    name: 'error',
    description: 'The error message to display',
    type: 'React.ReactNode',
  },
  {
    name: 'helperText',
    description: 'The helper text to display',
    type: 'React.ReactNode',
  },
  sizeProp,
]
