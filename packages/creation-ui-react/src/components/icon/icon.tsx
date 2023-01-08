import clsx from 'clsx'
import type { IconProps } from './icon.type'

import './icon.css'

const Icon = ({ icon, className }: IconProps) => {
  return <i className={clsx(['material-icons'], className)}>{icon}</i>
}

export default Icon
