import { Container } from '@components/container'
import { DarkModeToggle } from '@creation-ui/react'
import { DocumentedProperty } from 'models/system'
import { useState } from 'react'

export const DarkModeToggleExample = () => {
  const [dark, setDark] = useState(false)

  const onChange = (checked: boolean) => {
    setDark(checked)
  }

  return (
    <Container>
      <DarkModeToggle onChange={onChange} checked={dark} />
    </Container>
  )
}
export const properties: DocumentedProperty[] = [
  {
    name: 'onChange',
    type: '(checked: boolean) => void',
    description: 'Callback',
  },
  { name: 'checked', type: 'boolean', description: 'Is toggle checked?' },
  {
    name: 'style',
    type: 'React.CSSProperties',
    description: 'Custom style API',
  },
  {
    name: 'size',
    type: 'number | string',
    defaultValue: 24,
    description: 'Size of the toggle',
  },
  {
    name: 'animationProperties',
    type: 'typeof defaultProperties',
    description: 'Properties for the animation',
  },
  { name: 'moonColor', type: 'string', description: 'Moon icon color' },
  { name: 'sunColor', type: 'string', description: 'Sun icon color' },
]
