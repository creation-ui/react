import { Playground } from '@components/playground'
import { usePlayground } from '@components/playground/context'
import { Button } from '@creation-ui/react'
import {
  mdiAccountOutline,
  mdiAlert,
  mdiAlertCircle,
  mdiBattery70,
  mdiBugOutline,
  mdiCheck,
  mdiInformationOutline,
  mdiSecurity,
  mdiShieldCheck,
  mdiThermometerAlert,
} from '@mdi/js'
import { Icon } from '@mdi/react'
import { DocumentedProperty } from '@models/system'
import { iconProp } from './shared-props'

const path = {
  primary: { left: mdiAccountOutline, right: mdiSecurity },
  success: { left: mdiCheck, right: mdiShieldCheck },
  warning: { left: mdiAlert, right: mdiThermometerAlert },
  error: { left: mdiAlertCircle, right: mdiBugOutline },
  info: { left: mdiInformationOutline, right: mdiBattery70 },
}

const ButtonExtra = () => {
  const {
    state: { icon = 'none', content = 'Click me', fullWidth, ...state },
  } = usePlayground()

  const renderIcon = position =>
    ['both', position].includes(icon) ? (
      <Icon
        path={
          icon === 'both'
            ? path[state.status!][position]
            : path[state.status!]['left']
        }
        size={1}
      />
    ) : undefined

  return (
    <Button
      {...state}
      id='123'
      className={fullWidth ? 'w-full' : ''}
      iconLeft={renderIcon('left')}
      iconRight={renderIcon('right')}
    >
      {content}
    </Button>
  )
}

export const ButtonPlayground = () => {
  return (
    <Playground
      config={{
        name: 'Button',
        hasChildren: true,
        size: true,
        loading: true,
        variant: true,
        status: true,
        disabled: true,
        content: true,
        uppercase: true,
        fullWidth: true,
        icon: true,
        circle: true,
      }}
    >
      <ButtonExtra />
    </Playground>
  )
}

export const properties: DocumentedProperty[] = [
  {
    name: 'children',
    description: 'The content of the button group.',
    type: 'React.ReactNode',
  },
  {
    ...iconProp,
    name: 'iconLeft',
    description: "Icon on the left side of the component's children",
  },
  {
    ...iconProp,
    name: 'iconRight',
    description: "Icon on the right side of the component's children",
  },
]
