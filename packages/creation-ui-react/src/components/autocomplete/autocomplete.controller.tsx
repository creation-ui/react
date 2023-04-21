import clsx from 'clsx'
import { useCombobox, useMultipleSelection } from 'downshift'
import React, { ChangeEvent, useState } from 'react'
import { inputContainer, label, text } from '../../classes'
import { useId } from '../../hooks'
import { useTheme } from '../../theme'
import type { MultipleEllipsisFormatter } from '../../types'
import { formatOptionValue } from '../../utils/format-option-value'
import { passThrough } from '../../utils/functions'
import { getTruncatedMultipleValues } from '../../utils/get-truncated-values'
import { DropdownChevron } from '../dropdown-chevron'
import { InputBase } from '../input-base'
import { SelectOption } from '../select-option'
import { HelperText } from '../typography'
import type { AutocompleteProps } from './autocomplete.types'
import { AutocompleteView } from './autocomplete.view'

export const Autocomplete = (props: AutocompleteProps) => {
  const { size: defaultSize, zIndex } = useTheme()
  const {
    loadingText = 'Loading...',
    emptyText = 'Data is empty',
    notFoundText = 'Nothing found',
    clearable = true,
    multiple,
    optionComponent = SelectOption,
    options,
    placeholder = 'Select option',
    id,
    helperText,
    size = defaultSize,
    error,
    limit = 3,
    onChange,
    getLimitText = passThrough,
    selectedOptionFormatter = passThrough,
    value,
  } = props

  const [selectedItems, setSelectedItems] = useState([])
  const [inputValue, setInputValue] = useState('')

  const { getSelectedItemProps, getDropdownProps, removeSelectedItem } =
    useMultipleSelection({
      selectedItems,
      onStateChange({ selectedItems: newSelectedItems, type }) {
        switch (type) {
          case useMultipleSelection.stateChangeTypes
            .SelectedItemKeyDownBackspace:
          case useMultipleSelection.stateChangeTypes.SelectedItemKeyDownDelete:
          case useMultipleSelection.stateChangeTypes.DropdownKeyDownBackspace:
          case useMultipleSelection.stateChangeTypes.FunctionRemoveSelectedItem:
            if (multiple) {
              setSelectedItems([...selectedItems, newSelectedItems])
            } else {
              setSelectedItems([newSelectedItems])
            }
            break
          case useMultipleSelection.stateChangeTypes.FunctionRemoveSelectedItem:
            console.log(selectedItem)
            const newSelected = newSelectedItems.filter(
              item => item.id !== selectedItems
            )
            setSelectedItems(newSelected)
            break
          default:
            break
        }
      },
    })

  const [query, setQuery] = useState<string>('')

  /* Filtering the options based on the query. */
  const filteredOptions =
    query === ''
      ? options
      : options?.filter(option =>
          option.value
            .toLowerCase()
            .replace(/\s+/g, '')
            .includes(query.toLowerCase().replace(/\s+/g, ''))
        )

  const onSearchChange = (e: ChangeEvent<HTMLInputElement>) =>
    setQuery(e.target.value)
  const resetSearch = (): void => setQuery('')
  const clearSelection: React.MouseEventHandler<HTMLDivElement> = e => {
    onChange?.(null)
    resetSearch()
  }

  const {
    isOpen,
    getToggleButtonProps,
    getLabelProps,
    getMenuProps,
    getInputProps,
    highlightedIndex,
    getItemProps,
    selectedItem,
  } = useCombobox({
    items: value,
    itemToString(item) {
      return item ? item.title : ''
    },
    defaultHighlightedIndex: 0, // after selection, highlight the first item.
    selectedItem: null,
    stateReducer(state, actionAndChanges) {
      const { changes, type } = actionAndChanges

      switch (type) {
        case useCombobox.stateChangeTypes.InputKeyDownEnter:
        case useCombobox.stateChangeTypes.ItemClick:
          return {
            ...changes,
            isOpen: true, // keep the menu open after selection.
            highlightedIndex: 0, // with the first option highlighted.
          }
        default:
          return changes
      }
    },
    onStateChange({
      inputValue: newInputValue,
      type,
      selectedItem: newSelectedItem,
    }) {
      switch (type) {
        case useCombobox.stateChangeTypes.InputKeyDownEnter:
        case useCombobox.stateChangeTypes.ItemClick:
        case useCombobox.stateChangeTypes.InputBlur:
          if (newSelectedItem) {
            const final = [...selectedItems, newSelectedItem].filter(Boolean)
            setSelectedItems(final)
          }
          break

        case useCombobox.stateChangeTypes.InputChange:
          setInputValue(newInputValue)
          break
        default:
          break
      }
    },
  })

  const formatter = (args: any) => {
    let displayValue: string = ''
    let truncated: MultipleEllipsisFormatter

    if (multiple) {
      truncated = getTruncatedMultipleValues(args, limit)
      displayValue = truncated!.value
    } else {
      displayValue = formatOptionValue(args)
    }

    return displayValue
  }

  const isQuery = query.trim().length > 0
  const isSelected = !!props.value
  const componentId = useId(id)
  const Option = optionComponent
  const disabled = props.disabled || props.loading || props.readOnly

  // <label
  //   htmlFor={componentId}
  //   className={label({ size, required: props.required })}
  //   children={props.label}
  //   aria-label={props.label?.toString()}
  // />

  return (
    <InputBase
      disabled={disabled}
      error={error}
      size={size}
      loading={props.loading}
      readOnly={props.readOnly}
      label={props.label}
      required={props.required}
      endAdornment={
        <DropdownChevron {...getToggleButtonProps()} open={isOpen} />
      }
    >
      <AutocompleteView
        getLabelProps={getLabelProps}
        getToggleButtonProps={getToggleButtonProps}
        getMenuProps={getMenuProps}
        getInputProps={getInputProps}
        getItemProps={getItemProps}
        highlightedIndex={highlightedIndex}
        isOpen={isOpen}
        selectedItem={selectedItem}
        selectedItems={selectedItems}
        removeSelectedItem={removeSelectedItem}
        multiple={multiple}
        getDropdownProps={getDropdownProps}
        getSelectedItemProps={getSelectedItemProps}
        options={options}
      />
    </InputBase>
  )
}

/* Setting the default props for the component. */
Autocomplete.defaultProps = {
  size: 'md',
  placeholder: 'Select',
}
