import { ELEMENT_SIZES } from '@creation-ui/react/types'
import { ProgressBar, ProgressBarProps } from '@creation-ui/react'
import { DocumentedProperty } from 'models/system'
import { ListOrTypes } from 'utils/list-or-types'

export const ProgressBarExample = ({ ...props }: ProgressBarProps) => {
  return <ProgressBar {...props} />
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
