import { Icon, IconProps } from '@creation-ui/core'
import clsx from 'clsx'
import { DocumentedProperty } from 'models/system'

export const IconExample = ({ className, ...props }: IconProps) => (
  <Icon className={clsx('text-zinc-700', className)} {...props} />
)

export const properties: DocumentedProperty[] = [
  {
    description: 'Icon to be displayed',
    name: 'icon',
    type: 'google font icon id string',
  },
]
