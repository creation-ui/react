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
import React, { useCallback, useRef, useState } from 'react'
import { useNormalizedOptions } from '../../hooks/use-normalized-options'
import { useTheme } from '../../theme'
import { DropdownOptionType, DropdownProps } from '../../types'
import { isSelected } from '../../utils/is-selected'
import { getFlatOptions } from '../../utils/normalize-dropdown-options'
import { DropdownChevron } from '../dropdown-chevron'
import { InputBase } from '../input-base'
import {
  DropdownContext,
  getDropdownHeight,
  Option,
  SelectedOption,
} from '../shared/dropdown'
import { dropdownInitialProps } from '../shared/dropdown/constants'
import { filterOptionsDefault } from '../shared/dropdown/filter-options'
import { AutocompleteView } from './autocomplete.view'
import { DROPDOWN_MARGIN } from './constants'
import { getTop } from './utils'

export function Autocomplete(props: DropdownProps) {
  const { size: defaultSize } = useTheme()
  const {
    id,
    loadingText,
    emptyText,
    notFoundText,
    placeholder,
    multiple,
    helperText,
    error,
    limit,
    maxHeight,
    variant,
    onChange,
    getLimitText,
    filterOptions = filterOptionsDefault,
    optionComponent = Option,
    selectedOptionComponent = SelectedOption,
    size = defaultSize,
    zIndex,
    cx,
  } = props
  const { isDataFlat, options, value } = useNormalizedOptions({
    value: props.value,
    options: props.options ?? [],
  })

  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState('')

  const [activeIndex, setActiveIdx] = useState<number | null>(null)

  const listRef = useRef<Array<HTMLElement | null>>([])

  const clearInput = () => setQuery('')

  const clearableCallback = () => {
    onChange?.(null)
    clearInput()
  }

  const { x, y, strategy, refs, context } = useFloating<HTMLInputElement>({
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

  const filterFn = useCallback(() => filterOptions(query), [query])

  const queryMatchingOptions =
    query === '' ? options : options?.filter(filterFn)

  const isQuery = !!query?.trim()
  const isEmpty = value === null || (Array.isArray(value) && value.length === 0)

  const disabled = props.disabled || props.loading || props.readOnly
  const clearable = !disabled && props.clearable && (!isEmpty || isQuery)

  const toggleOpen = () => setOpen(!open)

  const handleSelect = (option: DropdownOptionType) => {
    if (multiple) {
      clearInput()
      // @ts-expect-error
      const newValue = (isEmpty ? [] : value).concat(option)
      onChange?.(isDataFlat ? getFlatOptions(newValue) : newValue)
    } else {
      onChange?.(isDataFlat ? option.id : option)
      setActiveIdx(null)
      setOpen(false)
      setQuery(option.label)
    }
  }

  const handleRemoveSelected = (option: DropdownOptionType) => {
    if (multiple) {
      // @ts-expect-error
      const newValue = value?.filter((o: any) => o.id !== option.id)
      onChange?.(isDataFlat ? getFlatOptions(newValue) : newValue)
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
        queryMatchingOptions[activeIndex]
      ) {
        handleSelect(queryMatchingOptions[activeIndex])
      }
    },
  }

  const getOptionProps = (option: DropdownOptionType, index: number) =>
    getItemProps({
      key: option.id,
      multiple,
      // @ts-expect-error
      size,
      active: activeIndex === index,
      selected: isSelected(option, value),
      onClick(e: any) {
        const selected = e.target.getAttribute('aria-selected') === 'true'
        selected && multiple
          ? handleRemoveSelected(option)
          : handleSelect(option)

        refs.domReference.current?.focus()
      },
      ref(node) {
        listRef.current[index] = node
      },
    })

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
      <DropdownContext.Provider
        value={{
          multiple,
          clearable,
          floatingContext: context,
          options: queryMatchingOptions,
          activeIndex,
          limit,
          selected: value,
          handleRemoveSelected,
          props: {
            input: inputProps,
            option: getOptionProps,
            list: listProps,
          },
          text: {
            loading: loadingText,
            empty: emptyText,
            notFound: notFoundText,
          },
          open,
          setOpen,
          optionComponent,
          selectedOptionComponent,
        }}
      >
        <AutocompleteView />
      </DropdownContext.Provider>
    </InputBase>
  )
}

Autocomplete.defaultProps = dropdownInitialProps
