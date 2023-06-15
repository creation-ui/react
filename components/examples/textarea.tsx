import { usePlayground } from '@components/playground/context/context'
import { TextArea, TextAreaProps } from '@creation-ui/react'
import { DocumentedProperty } from 'models/system'
import { inputBaseProperties } from './input-base-properties'

interface TextAreaExampleProps
  extends Omit<TextAreaProps, 'onChange' | 'ref'> {}

export const TextAreaPlayground = ({ ...props }: TextAreaExampleProps) => {
  const {
    state: { inputType, ...state },
  } = usePlayground()

  return <TextArea {...props} {...state} defaultValue={state.content} />
}

export const properties: DocumentedProperty[] = inputBaseProperties
