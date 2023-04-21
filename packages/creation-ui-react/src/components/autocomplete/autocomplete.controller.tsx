import { useCombobox, useMultipleSelection } from 'downshift'
import React, { ChangeEvent, useState } from 'react'
import { useId } from '../../hooks'
import { useTheme } from '../../theme'
import type { MultipleEllipsisFormatter, SelectOptionsType } from '../../types'
import { formatOptionValue } from '../../utils/format-option-value'
import { passThrough } from '../../utils/functions'
import { getTruncatedMultipleValues } from '../../utils/get-truncated-values'
import { DropdownChevron } from '../dropdown-chevron'
import { InputBase } from '../input-base'
import { SelectOption } from '../select-option'
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

  function getFilteredItems(
    selectedOptions: SelectOptionsType[],
    inputValue: string
  ) {
    if (!selectedOptions) return []

    const searchString = inputValue.toLowerCase()
    const selectedValues = selectedOptions?.map(item => item?.label)

    return options.filter(
      option =>
        !selectedValues?.includes(option.label) &&
        option.label?.toLowerCase().startsWith(searchString)
    )
  }
  const [inputValue, setInputValue] = React.useState('')
  const [selectedItems, setSelectedItems] = React.useState([])

  const items = React.useMemo(
    () => getFilteredItems(selectedItems, inputValue),
    [selectedItems, inputValue]
  )

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
            setSelectedItems(newSelectedItems)
            break
          default:
            break
        }
      },
    })
  const {
    isOpen,
    getToggleButtonProps,
    getLabelProps,
    getMenuProps,
    getInputProps,
    highlightedIndex,
    getItemProps,
  } = useCombobox({
    items,
    inputValue,
    selectedItem: null,
    stateReducer(state, actionAndChanges) {
      const { changes, type } = actionAndChanges

      switch (type) {
        case useCombobox.stateChangeTypes.InputKeyDownEnter:
        case useCombobox.stateChangeTypes.ItemClick:
        case useCombobox.stateChangeTypes.InputBlur:
          return {
            ...changes,
            ...(changes.selectedItem && { isOpen: true, highlightedIndex: 0 }),
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
          setSelectedItems([...selectedItems, newSelectedItem])

          break
        case useCombobox.stateChangeTypes.InputChange:
          setInputValue(newInputValue)
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
          option.label
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
        selectedItems={selectedItems}
        removeSelectedItem={removeSelectedItem}
        multiple={multiple}
        getDropdownProps={getDropdownProps}
        getSelectedItemProps={getSelectedItemProps}
        options={items}
      />
    </InputBase>
  )
}

/* Setting the default props for the component. */
Autocomplete.defaultProps = {
  size: 'md',
  placeholder: 'Select',
}
