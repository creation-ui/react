import clsx from 'clsx'
// import './icon.scss'
import { IconProps } from './icon.type'

const Icon = ({ icon, className }: IconProps) => (
  <i className={clsx('material-icons', className)}>{icon}</i>
)

export default Icon
