import clsx from 'clsx'
import type { IconType } from 'src/types'
import { ChevronDown } from './chevron-down'
import { ChevronLeft } from './chevron-left'
import { ChevronRight } from './chevron-right'
import { Close } from './close'
import type { IconProps } from './icon.type'

const Icon = ({ icon, className }: IconProps) => {
  const map: Record<IconType, any> = {
    chevron_right: ChevronRight,
    chevron_left: ChevronLeft,
    chevron_down: ChevronDown,
    close: Close,
  }

  const Component = map[icon]

  return <Component className={clsx(className)} />
}

export default Icon
