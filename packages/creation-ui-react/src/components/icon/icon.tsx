import type { IconType } from '../../types'
import { twMerge } from 'tailwind-merge'
import { Check } from './check'
import { ChevronDown } from './chevron-down'
import { ChevronLeft } from './chevron-left'
import { ChevronRight } from './chevron-right'
import { Close } from './close'
import type { IconProps } from './icon.type'
import { Straight } from './straight'

const classes = [
  //
  'fill-zinc-500',
  'dark:fill-zinc-100',
  'hover:fill-primary-500',
  'dark:hover:fill-primary-500',
  'h-5',
  'w-auto',
]

const Icon = ({ icon, className }: IconProps) => {
  const map: Record<IconType, any> = {
    chevron_right: ChevronRight,
    chevron_left: ChevronLeft,
    chevron_down: ChevronDown,
    close: Close,
    check: Check,
    straight: Straight,
  }

  const Component = map[icon]

  return <Component className={twMerge(classes, className)} />
}

export default Icon
