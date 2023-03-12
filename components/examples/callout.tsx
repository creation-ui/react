import { Container } from '@components/container'
import { CalloutProps } from '@creation-ui/react/components/callout/types'
import {
  Callout,
  ELEMENT_VARIANTS,
  ElementVariants,
  Switch,
} from '@creation-ui/react/index'
import {
  mdiAccountKey,
  mdiAlert,
  mdiAlertCircle,
  mdiCheckCircle,
  mdiMagnifyClose,
} from '@mdi/js'
import { Icon } from '@mdi/react'
import { DocumentedProperty } from 'models/system'
import { iconProp, labelProp, sizeProp, statusProp } from './shared-props'
import { useState } from 'react'

export const statusExamples: CalloutProps[] = [
  {
    icon: <Icon path={mdiMagnifyClose} size={1} />,
    title: 'No Results Found',
    content:
      'Your search did not match any results. Please try again with a different keyword or filter.',
    status: 'info',
  },
  {
    icon: <Icon path={mdiAccountKey} size={1} />,
    title: 'Account Activated',
    content:
      'Your account has been successfully activated. You can now start using our platform.',
    status: 'active',
  },
  {
    icon: <Icon path={mdiAlertCircle} size={1} />,
    title: 'Error Occurred',
    content:
      'An error occurred while processing your request. Please try again later.',
    status: 'error',
  },
  {
    icon: <Icon path={mdiAlert} size={1} />,
    title: 'Warning',
    content:
      'Your account is about to expire. Please renew your subscription to avoid service interruption.',
    status: 'warning',
  },
  {
    icon: <Icon path={mdiCheckCircle} size={1} />,
    title: 'Payment Received',
    content:
      'Your payment has been received and your order is being processed.',
    status: 'success',
  },
]

const withVariantExample: CalloutProps[][] = []

ELEMENT_VARIANTS.forEach((variant, idx) => {
  withVariantExample.push(
    statusExamples.map(example => ({ ...example, variant }))
  )
})

export const properties: DocumentedProperty[] = [
  { ...labelProp, name: 'title', description: 'Title of the callout' },
  {
    ...labelProp,
    name: 'content',
    description: 'Content of the callout',
  },
  statusProp,
  sizeProp,
  iconProp,
]

interface CalloutExampleProps {
  displayTitle?: boolean
  displayIcon?: boolean
  variant?: ElementVariants
}

export const CalloutExample = ({
  displayTitle,
  displayIcon,
  variant,
}: CalloutExampleProps) => {
  return (
    <Container variant='column'>
      {statusExamples.map(({ content, status, ...callout }) => (
        <Callout
          key={callout.title?.toString()}
          content={content}
          status={status}
          variant={variant}
          {...(displayTitle && { title: callout.title })}
          {...(displayIcon && { icon: callout.icon })}
        />
      ))}
    </Container>
  )
}

export const CalloutVariantsExamples = () => {
  const [state, setState] = useState({ title: true, icon: true })

  const handleToggle = (key: 'title' | 'icon') => {
    setState(s => ({ ...s, [key]: !s[key] }))
  }

  return (
    <div className=''>
      <div className='ml-auto flex flex-col gap-2'>
        <h3 className='font-2xl font-bold'>Controls</h3>
        <Switch
          size='sm'
          onChange={handleToggle.bind(null, 'title')}
          label='Title'
          checked={state.title}
        />
        <Switch
          size='sm'
          onChange={handleToggle.bind(null, 'icon')}
          label='Icon'
          checked={state.icon}
        />
      </div>
      {withVariantExample.map(exampleSet => (
        <Container variant='column'>
          <h3 className='font-2xl font-bold uppercase my-2'>
            {exampleSet[0].variant}
          </h3>
          {exampleSet.map(({ content, status, variant, ...callout }) => (
            <Callout
              key={[callout.title?.toString(), variant].join('-')}
              content={content}
              status={status}
              variant={variant}
              {...(state.title && { title: callout.title })}
              {...(state.icon && { icon: callout.icon })}
            />
          ))}
        </Container>
      ))}
    </div>
  )
}
