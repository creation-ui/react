import clsx from 'clsx'
import { Icon, IconProps } from '../icon'

interface TreeChevronProps extends Omit<IconProps, 'icon'> {
  open?: boolean
}

const classes = [
  'text-info-400',
  'ease-in-out',
  'duration-300',
  'hover:text-info-800',
  'cursor-pointer',
]

const TreeChevron = ({ open, className, ...props }: TreeChevronProps) => (
  <Icon
    icon={open ? 'minus' : 'plus'}
    className={clsx(classes, className)}
    aria-hidden='true'
    {...props}
  />
)

export default TreeChevron
