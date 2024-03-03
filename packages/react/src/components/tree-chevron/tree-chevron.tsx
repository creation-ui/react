import clsx from 'clsx'
import { Icon, IconProps } from '../icon'

interface TreeChevronProps extends Omit<IconProps, 'icon'> {
  open?: boolean
}

const classes = clsx([
  'text-info-400',
  'ease-in-out',
  'duration-300',
  'hover:text-info-800',
  'cursor-pointer',
])

const TreeChevron = ({ open, ...props }: TreeChevronProps) => (
  <Icon
    icon={open ? 'minus' : 'plus'}
    className={classes}
    aria-hidden='true'
    {...props}
  />
)

export default TreeChevron
