import { Button, ButtonProps, ButtonGroup } from '@creation-ui/react/components/button'
import { DocumentedProperty } from 'models/system'

interface ButtonGroupExampleProps {
  options?: string[]
  variant?: ButtonProps['variant']
}

export const ButtonGroupExample = ({
  options,
  variant,
}: ButtonGroupExampleProps) => {
  return (
    <ButtonGroup>
      {options?.map(option => (
        <Button variant={variant} key={option}>{option}</Button>
      ))}
    </ButtonGroup>
  )
}

export const properties: DocumentedProperty[] = [
  {
    name: 'children',
    description: 'The content of the button group.',
    type: 'React.ReactNode',
  },
]
