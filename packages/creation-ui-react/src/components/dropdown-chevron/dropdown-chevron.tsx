import { cva } from 'class-variance-authority'
import { Icon, IconProps } from '../icon'

interface DropdownChevronProps extends Omit<IconProps, 'icon'> {
  open?: boolean
}

const chevron = cva(
  [
    'text-info-400',
    'ease-in-out',
    'duration-300',
    'hover:text-info-800',
    'cursor-pointer',
  ],
  {
    variants: {
      open: {
        true: ['rotate-180'],
      },
    },
  }
)

const DropdownChevron = ({ open, ...props }: DropdownChevronProps) => (
  <Icon
    icon='chevron_down'
    className={chevron({ open })}
    aria-hidden='true'
    {...props}
  />
)

export default DropdownChevron
