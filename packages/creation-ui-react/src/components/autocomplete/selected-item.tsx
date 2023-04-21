import { UseMultipleSelectionGetSelectedItemPropsOptions } from 'downshift'
import { twMerge } from 'tailwind-merge'
import { ClearButton } from '../clear-button'

interface SelectedItemProps {
  item: any
  idx: number
  getSelectedItemProps: (
    options: UseMultipleSelectionGetSelectedItemPropsOptions<any>
  ) => any
  removeSelectedItem: (item: any) => void
}

const classes = [
  'bg-info-100',
  'rounded-md',
  'p-0.5',
  'focus:border-primary-200',
  'border',
  'border-transparent',
  'inline-flex',
  'gap-1',
  'items-center',
  'select-none',
]

const SelectedItem = ({
  item,
  idx,
  getSelectedItemProps,
  removeSelectedItem,
}: SelectedItemProps) => {
  const handleRemove = e => {
    e?.stopPropagation?.()
    removeSelectedItem(item)
  }

  return (
    <span
      className={twMerge(classes)}
      {...getSelectedItemProps({ selectedItem: item, index: idx })}
    >
      {item.label}
      <ClearButton onClick={handleRemove} />
    </span>
  )
}

export default SelectedItem
