import clsx from 'clsx'
import {
  GetPropsCommonOptions,
  UseComboboxGetInputPropsOptions,
  UseMultipleSelectionGetDropdownProps,
  UseMultipleSelectionGetSelectedItemPropsOptions
} from 'downshift'
import { useInputBase } from '../input-base/input-base.context'
import { OptionList } from './option-list'
import SelectedItem from './selected-item'
interface AutocompleteViewProps {
  getLabelProps: () => any
  getToggleButtonProps: () => any
  getMenuProps: () => any
  getInputProps: (
    options?: UseComboboxGetInputPropsOptions,
    otherOptions?: GetPropsCommonOptions
  ) => any
  getItemProps: (options: { item: any; index: number }) => any
  getSelectedItemProps: (
    options: UseMultipleSelectionGetSelectedItemPropsOptions<any>
  ) => any
  highlightedIndex: number | null
  isOpen: boolean
  selectedItems?: any[]
  removeSelectedItem?: (item: any) => void
  multiple?: boolean
  options?: any[]
  getDropdownProps: (
    options?: UseMultipleSelectionGetDropdownProps,
    extraOptions?: GetPropsCommonOptions
  ) => any
}

export const AutocompleteView = ({
  getLabelProps,
  getToggleButtonProps,
  getMenuProps,
  getInputProps,
  getItemProps,
  options = [],
  highlightedIndex,
  selectedItems = [],
  isOpen,
  removeSelectedItem,
  getSelectedItemProps,
  getDropdownProps,
  multiple,
  ...props
}: AutocompleteViewProps) => {
  const {
    classes: { input },
    componentId,
    disabled,
    readOnly,
  } = useInputBase()

  return (
    <div className={clsx(input, 'relative h-auto py-1')}>
      <div className={clsx('flex flex-col gap-1')}>
        <div className='inline-flex gap-2 items-center flex-wrap h-fit'>
          {selectedItems?.map((item, idx) => (
            <SelectedItem
              key={item.id}
              item={item}
              idx={idx}
              getSelectedItemProps={getSelectedItemProps}
              removeSelectedItem={removeSelectedItem}
            />
          ))}
          <input
            id={componentId}
            className='reset-input h-fit'
            placeholder='Best book ever'
            {...getInputProps(getDropdownProps({ preventKeyAction: isOpen }))}
          />
        </div>
      </div>
      <OptionList
        getItemProps={getItemProps}
        highlightedIndex={highlightedIndex}
        menuProps={getMenuProps()}
        open={isOpen}
        options={options}
        selectedItems={selectedItems}
      />
    </div>
  )
}
