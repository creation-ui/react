import clsx from 'clsx'
import { IconProps } from './icon.type'

import '!style-loader!css-loader!./icon.css'

const Icon = ({ icon, className }: IconProps) => {
  return <i className={clsx(['material-icons'], className)}>{icon}</i>
}

export default Icon
