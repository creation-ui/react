import {
  autoUpdate,
  flip,
  FloatingFocusManager,
  FloatingPortal,
  size,
  useDismiss,
  useFloating,
  useInteractions,
  useListNavigation,
  useRole,
} from '@floating-ui/react'
import React, { forwardRef, useMemo, useRef, useState } from 'react'
import { useTheme } from '../../theme'
import { SelectOptionsType } from '../../types'
import { passThrough } from '../../utils/functions'
import { DropdownChevron } from '../dropdown-chevron'
import { InputBase } from '../input-base'
import { SelectOption } from '../select-option'
import { AutocompleteView } from './autocomplete-float.view'
import { AutocompleteContext } from './autocomplete.context'
import type { AutocompleteProps } from './autocomplete.types'
import { optionClasses, optionListClasses } from './classes'

interface ItemProps {
  children: React.ReactNode
  active: boolean
}

const Item = forwardRef<
  HTMLLIElement,
  ItemProps & React.HTMLProps<HTMLLIElement>
>(
  (
    {
      //
      children,
      active,
      ...rest
    },
    ref
  ) => {
    return (
      <li
        className={optionClasses({
          highlighted: active,
          selected: false,
        })}
        ref={ref}
        role='option'
        aria-selected={active}
        {...rest}
      >
        {children}
      </li>
    )
  }
)

export function AutocompleteFloat(props: AutocompleteProps) {
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
    // size = defaultSize,
    error,
    limit = 3,
    // onChange,
    getLimitText = passThrough,
    selectedOptionFormatter = passThrough,
    value,
  } = props

  const componentSize = props.size || defaultSize

  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState('')
  const [selected, setSelected] = useState<SelectOptionsType[]>([])

  const [activeIndex, setActiveIdx] = useState<number | null>(null)

  const listRef = useRef<Array<HTMLElement | null>>([])

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

  function onChange({
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

  const leftOptions = useMemo(
    () =>
      options.filter(
        option => selected.findIndex(o => o.id === option.id) === -1
      ),
    [options, selected]
  )

  const queryMatchingOptions =
    query === ''
      ? leftOptions
      : leftOptions?.filter(option =>
          option.label
            .toLowerCase()
            .replace(/\s+/g, '')
            .includes(query.toLowerCase().replace(/\s+/g, ''))
        )

  const isQuery = query.length > 0
  const isSelected = !!props.value
  const Option = optionComponent
  const disabled = props.disabled || props.loading || props.readOnly

  const toggleOpen = () => setOpen(!open)

  const handleSelect = (option: SelectOptionsType) => {
    setQuery('')
    setSelected(o => [...(multiple && o), option])
    if (!multiple) {
      setActiveIdx(null)
      setOpen(false)
    }
  }

  const handleRemoveSelected = (option: SelectOptionsType) => {
    setSelected(o => o.filter(o => o.id !== option.id))
  }

  const containerProps = getReferenceProps({
    ref: refs.setReference,
  })

  const inputProps = {
    onChange,
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

  const getOptionProps = (option: SelectOptionsType, index: number) =>
    getItemProps({
      key: option.id,
      ref(node) {
        listRef.current[index] = node
      },
      onClick() {
        handleSelect(option)
        refs.domReference.current?.focus()
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
      disabled={disabled}
      error={error}
      size={componentSize}
      loading={props.loading}
      readOnly={props.readOnly}
      label={props.label}
      required={props.required}
      endAdornment={<DropdownChevron open={open} onClick={toggleOpen} />}
    >
      <AutocompleteContext.Provider
        value={{
          multiple,
          clearable,
          floatingContext: context,
          options: queryMatchingOptions,
          activeIndex: activeIndex,
          limit,
          selected,
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
        }}
      >
        <AutocompleteView {...containerProps} />
      </AutocompleteContext.Provider>
    </InputBase>
  )
}
