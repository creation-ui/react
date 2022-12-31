import React from 'react'
import clsx from 'clsx'
import { Icon } from '../icon'

interface DropdownChevronProps {
  open?: boolean
}

const DropdownChevron = ({ open }: DropdownChevronProps) => (
  <Icon
    icon='expand_more'
    className={clsx('dropdown--chevron', open && 'dropdown--chevron-open')}
    aria-hidden='true'
  />
)

export default DropdownChevron
