import clsx from 'clsx'
import type { IconProps } from './icon.type'
import { IconStyles } from './styled'

const Icon = ({ icon, className }: IconProps) => (
  <IconStyles className={clsx(['material-icons'], className)}>
    {icon}
  </IconStyles>
)

export default Icon
