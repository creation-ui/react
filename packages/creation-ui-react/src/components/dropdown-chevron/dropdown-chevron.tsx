import { cva } from 'class-variance-authority'
import { Icon } from '../icon'

interface DropdownChevronProps {
  open?: boolean
}

const chevron = cva(
  ['text-info-400', 'ease-in-out', 'duration-300', 'hover:text-info-800'],
  {
    variants: {
      open: {
        true: ['rotate-180'],
      },
    },
  }
)

const DropdownChevron = ({ open }: DropdownChevronProps) => (
  <Icon icon='chevron_down' className={chevron({ open })} aria-hidden='true' />
)

export default DropdownChevron
