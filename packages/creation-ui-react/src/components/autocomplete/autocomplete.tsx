import {
  autoUpdate,
  flip,
  size,
  useDismiss,
  useFloating,
  useInteractions,
  useListNavigation,
  useRole,
} from '@floating-ui/react'
import React, { useRef, useState } from 'react'
import { useTheme } from '../../theme'
import { DropdownProps, DropdownOption } from '../../types'
import { passThrough } from '../../utils/functions'
import { isSelected } from '../../utils/is-selected'
import { DropdownChevron } from '../dropdown-chevron'
import { InputBase } from '../input-base'
import {
  DropdownContext,
  // Option
} from '../shared/dropdown'
import { AutocompleteView } from './autocomplete.view'

export function Autocomplete(props: DropdownProps) {
  const { size: defaultSize } = useTheme()
  const {
    id,
    loadingText = 'Loading...',
    emptyText = 'Data is empty',
    notFoundText = 'Nothing found',
    placeholder = 'Select option',
    multiple,
    value,
    options = [],
    helperText,
    error,
    limit = 3,
    onChange,
    getLimitText = passThrough,
    // optionComponent = Option,
  } = props

  const componentSize = props.size || defaultSize

  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState('')

  const [activeIndex, setActiveIdx] = useState<number | null>(null)

  const listRef = useRef<Array<HTMLElement | null>>([])

  const clearInput = () => setQuery('')
  const clearableCallback = () => {
    onChange([])
    clearInput()
  }

  const { x, y, strategy, refs, context } = useFloating<HTMLInputElement>({
    whileElementsMounted: autoUpdate,
    onOpenChange: setOpen,
    open,
    middleware: [
      flip({ padding: 10 }),
      size({
        apply({ rects, availableHeight, elements }) {
          Object.assign(elements.floating.style, {
            width: `${rects.reference.width}px`,
            maxHeight: `${availableHeight}px`,
          })
        },
        padding: 10,
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

  const queryMatchingOptions =
    query === ''
      ? options
      : options?.filter(option =>
          option.label
            .toLowerCase()
            .replace(/\s+/g, '')
            .includes(query.toLowerCase().replace(/\s+/g, ''))
        )

  const isQuery = !!query.trim()
  const isEmpty = !value.length
  // const Component = optionComponent

  const disabled = props.disabled || props.loading || props.readOnly
  const clearable = !disabled && props.clearable && (!isEmpty || isQuery)

  const toggleOpen = () => setOpen(!open)

  const handleSelect = (option: DropdownOption) => {
    if (multiple) {
      clearInput()
      onChange([...value, option])
    } else {
      onChange([option])
      setActiveIdx(null)
      setOpen(false)
      setQuery(option.label)
    }
  }

  const handleRemoveSelected = (option: DropdownOption) => {
    onChange(value.filter(o => o.id !== option.id))
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

  const getOptionProps = (option: DropdownOption, index: number) =>
    getItemProps({
      key: option.id,
      multiple,
      // @ts-expect-error
      active: activeIndex === index,
      selected: isSelected(option, value),
      onClick(e: any) {
        const selected = e.target.getAttribute('aria-selected') === 'true'
        selected ? handleRemoveSelected(option) : handleSelect(option)
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
      top: y ?? 0,
    },
  })

  return (
    <InputBase
      id={id}
      disabled={disabled}
      error={error}
      size={componentSize}
      loading={props.loading}
      readOnly={props.readOnly}
      label={props.label}
      required={props.required}
      endAdornment={<DropdownChevron open={open} onClick={toggleOpen} />}
      helperText={helperText}
      clearable={clearable}
      onClear={clearableCallback}
    >
      <DropdownContext.Provider
        value={{
          multiple,
          clearable,
          floatingContext: context,
          options: queryMatchingOptions,
          activeIndex: activeIndex,
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
          setOpen
        }}
      >
        <AutocompleteView {...containerProps} />
      </DropdownContext.Provider>
    </InputBase>
  )
}
