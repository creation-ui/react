import {
  autoUpdate,
  flip,
  size as floatingSize,
  useDismiss,
  useFloating,
  useInteractions,
  useListNavigation,
  useRole,
} from '@floating-ui/react'
import React, { useRef, useState } from 'react'
import { selectOptionClasses } from '../../../classes'
import { useTheme } from '../../../theme'
import { DropdownOptionType } from '../../../types'
import { getFlatOptions } from '../../../utils/normalize-dropdown-options'
import { DropdownChevron } from '../../dropdown-chevron'
import { InputBase } from '../../input-base'
import { getDropdownHeight } from '../../shared/dropdown'
import { dropdownInitialProps } from '../../shared/dropdown/constants'
import { DROPDOWN_MARGIN } from '../constants'
import { AutocompleteContext } from '../context'
import {
  AutocompleteOptionProps,
  AutocompleteProps,
  GetItemPropsReturnType,
} from '../types'
import { _renderOption } from '../utils/render-option'
import { _renderSelection } from '../utils/render-selection'
import { createFilterOptions, getTop } from '../utils/utils'
import { AutocompleteView } from '../view/autocomplete.view'

const _filterOptions = createFilterOptions()

export function Autocomplete<T>(props: AutocompleteProps<T>) {
  const { size: defaultSize } = useTheme()
  const {
    id,
    textLoading,
    textEmpty,
    textNotFound,
    placeholder,
    multiple,
    helperText,
    error,
    limit,
    maxHeight,
    variant,
    size = defaultSize,
    zIndex,
    cx,
    value,
    defaultValue,
    options,
    filterSelectedOptions,
    onChange,
    filterOptions = _filterOptions,
    getLimitTagsText = (more: number) => `+${more}`,
    renderOption = _renderOption,
    renderSelection,
    getOptionLabel: getOptionLabelProp = (option: T) =>
      typeof option === 'string'
        ? option
        : // @ts-expect-error
          option.label,
    isOptionEqualToValue = (a: T, b: T) => a === b,
  } = props

  let getOptionLabel = getOptionLabelProp

  getOptionLabel = (option: T) => {
    const optionLabel = getOptionLabelProp(option)
    if (typeof optionLabel !== 'string') {
      if (process.env.NODE_ENV !== 'production') {
        const erroneousReturn =
          optionLabel === undefined
            ? 'undefined'
            : `${typeof optionLabel} (${optionLabel})`

        console.error(
          `CUI: The \`getOptionLabel\` method of [Autocomplete:${id}] returned ${erroneousReturn} instead of a string for ${JSON.stringify(
            option
          )}.`
        )
      }

      return String(optionLabel)
    }

    return optionLabel
  }

  const [open, setOpen] = useState<boolean>(false)
  const [query, setQuery] = useState<string>('')
  const [activeIndex, setActiveIdx] = useState<number | null>(null)

  const isQuery = !!query?.trim()
  const isEmpty = value === null || (Array.isArray(value) && value.length === 0)
  const disabled = props.disabled || props.loading || props.readOnly
  const clearable = !disabled && props.clearable && (!isEmpty || isQuery)

  const listRef = useRef<Array<HTMLElement | null>>([])

  const clearSearch = () => setQuery('')

  const clearableCallback = () => {
    onChange?.(null)
    clearSearch()
  }

  const { x, strategy, refs, context } = useFloating<HTMLInputElement>({
    whileElementsMounted: autoUpdate,
    onOpenChange: setOpen,
    open,
    middleware: [
      flip({ padding: 10 + DROPDOWN_MARGIN }),
      floatingSize({
        apply({ rects, availableHeight, elements }) {
          const height = getDropdownHeight(maxHeight, availableHeight)
          Object.assign(elements.floating.style, {
            width: `${rects.reference.width}px`,
            maxHeight: height,
            overflowY: 'auto',
          })
        },
        padding: 10 + DROPDOWN_MARGIN,
      }),
    ],
  })

  const role = useRole(context, { role: 'listbox' })
  const dismiss = useDismiss(context)
  const listNav = useListNavigation(context, {
    listRef,
    activeIndex: activeIndex,
    onNavigate: setActiveIdx,
    virtual: true,
    loop: true,
  })

  const { getReferenceProps, getFloatingProps, getItemProps } = useInteractions(
    [role, dismiss, listNav]
  )

  function onInputChange({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) {
    const text = value
    setQuery(text)

    if (text) {
      setOpen(true)
      setActiveIdx(0)
    } else {
      setOpen(false)
    }
  }

  const filteredOptions: T[] = open
    ? filterOptions(
        options.filter(option => {
          if (
            filterSelectedOptions &&
            ((multiple ? value : [value]) as T[]).some(
              value2 => value2 !== null && isOptionEqualToValue(option, value2)
            )
          ) {
            return false
          }
          return true
        }),
        // we use the empty string to manipulate `filterOptions` to not filter any options
        // i.e. the filter predicate always returns true

        { query, getOptionLabel }
      )
    : []

  const toggleOpen = () => setOpen(!open)

  const handleSelect = option => {
    if (multiple) {
      clearSearch()

      if ((value as T[]).find(v => isOptionEqualToValue(v, option))) {
        return
      }

      const newValue = ((isEmpty ? [] : value) as T[]).concat(option)
      onChange?.(newValue)
    } else {
      onChange?.(option)
      setActiveIdx(null)
      setOpen(false)
      setQuery(getOptionLabel(option))
    }
  }

  const handleRemoveSelected = option => {
    if (multiple) {
      // @ts-expect-error
      const newValue = value?.filter((o: any) => o.id !== option.id)
      onChange?.(!multiple ? getFlatOptions(newValue) : newValue)
    }
  }

  const containerProps = getReferenceProps({
    ref: refs.setReference,
  })

  const inputProps = {
    onChange: onInputChange,
    value: query,
    placeholder,
    'aria-autocomplete': 'list',
    onFocus() {
      if (!query) {
        setOpen(true)
      }
    },
    onKeyDown(event) {
      if (
        event.key === 'Enter' &&
        activeIndex != null &&
        filteredOptions[activeIndex]
      ) {
        handleSelect(filteredOptions[activeIndex])
      }
    },
  }

  const getOptionProps = (
    option: T,
    index: number
  ): AutocompleteOptionProps => {
    const active = activeIndex === index
    const selected = isOptionEqualToValue(option, value)
    const disabled = !!option.disabled
    const label = getOptionLabel(option)

    const itemProps = getItemProps({
      key: label,
      multiple,
      selected: isOptionEqualToValue(option, value),
      onClick(e: React.MouseEvent<HTMLLIElement>) {
        const isDisabled =
          (e.target as any).getAttribute?.('aria-disabled') === 'true'

        if (isDisabled || disabled) return

        const wasSelected =
          (e.target as any).getAttribute?.('aria-selected') === 'true'

        // TODO: fix and why this is not working?
        // if (selected && multiple) {
        //   handleRemoveSelected(option)
        // }

        if (!wasSelected) {
          handleSelect(option)
        }
        refs.domReference.current?.focus()
      },
      ref(node) {
        listRef.current[index] = node
      },
      'aria-label': label,
      'aria-selected': selected,
      'aria-disabled': disabled,
      role: 'option',
    }) as unknown as GetItemPropsReturnType

    return {
      className: selectOptionClasses({
        active,
        selected: selected as boolean,
        multiple,
        size,
      }),
      index,
      query,
      active,
      ...itemProps,
    }
  }

  const listProps = getFloatingProps({
    ref: refs.setFloating,
    style: {
      position: strategy,
      left: x ?? 0,
      top: getTop(context),
      zIndex: zIndex?.list,
    },
  })

  return (
    <InputBase
      id={id}
      disabled={disabled}
      error={error}
      size={size}
      loading={props.loading}
      readOnly={props.readOnly}
      label={props.label}
      required={props.required}
      variant={variant}
      endAdornment={<DropdownChevron open={open} onClick={toggleOpen} />}
      helperText={helperText}
      clearable={clearable}
      onClear={clearableCallback}
      cx={cx}
      {...containerProps}
    >
      <AutocompleteContext.Provider
        value={{
          handleRemoveSelected,
          setOpen,
          multiple,
          clearable,
          floatingContext: context,
          options: filteredOptions,
          activeIndex,
          limit,
          selected: value,
          propsList: listProps,
          propsInput: inputProps,
          textEmpty,
          textLoading,
          textNotFound,
          open,
          renderOption,
          renderSelection,
          getOptionLabel,
          getOptionProps,
          getLimitTagsText,
        }}
      >
        <AutocompleteView />
      </AutocompleteContext.Provider>
    </InputBase>
  )
}

Autocomplete.defaultProps = dropdownInitialProps
