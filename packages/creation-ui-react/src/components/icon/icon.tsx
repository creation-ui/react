import clsx from 'clsx'
import { IconProps } from './icon.type'
// @ts-ignore
import styles from './icon.module.css'

const Icon = ({ icon, className }: IconProps) => (
  <i className={clsx(styles['material-icons'], className)}>{icon}</i>
)

export default Icon
