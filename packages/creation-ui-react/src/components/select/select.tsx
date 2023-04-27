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
import { useRef, useState } from 'react'
import { useNormalizedOptions } from '../../hooks/use-normalized-options'
import { useTheme } from '../../theme'
import { DropdownOption, DropdownProps } from '../../types'
import { isSelected } from '../../utils/is-selected'
import { getFlatOptions } from '../../utils/normalize-dropdown-options'
import { DropdownChevron } from '../dropdown-chevron'
import { InputBase } from '../input-base'
import {
  DropdownContext,
  dropdownInitialProps,
  Option,
  SelectedOption,
} from '../shared/dropdown'
import { SelectView } from './select.view'

export function Select(props: DropdownProps) {
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
    onChange,
    getLimitText,
    optionComponent = Option,
    selectedOptionComponent = SelectedOption,
    size = defaultSize,
  } = props
  const { isDataFlat, options, value } = useNormalizedOptions({
    value: props.value,
    options: props.options ?? [],
  })

  const [open, setOpen] = useState(false)

  const [activeIndex, setActiveIdx] = useState<number | null>(null)

  const listRef = useRef<Array<HTMLElement | null>>([])

  const clearableCallback = () => {
    onChange?.([])
  }

  const { x, y, strategy, refs, context } = useFloating<HTMLInputElement>({
    whileElementsMounted: autoUpdate,
    onOpenChange: setOpen,
    open,
    middleware: [
      flip({ padding: 10 }),
      floatingSize({
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

  const isEmpty = value === null || (Array.isArray(value) && value.length === 0)

  const disabled = props.disabled || props.loading || props.readOnly
  const clearable = !disabled && props.clearable && !isEmpty

  const toggleOpen = () => setOpen(!open)
  const handleClose = () => {
    setActiveIdx(null)
    setOpen(false)
  }

  const handleSelect = (option: DropdownOption) => {
    if (multiple) {
      // @ts-expect-error
      const newValue = (isEmpty ? [] : value).concat(option)
      onChange?.(isDataFlat ? getFlatOptions(newValue) : newValue)
    } else {
      onChange?.(isDataFlat ? option.id : option)
      setActiveIdx(null)
      setOpen(false)
    }
  }

  const handleRemoveSelected = (option: DropdownOption) => {
    if (multiple) {
      // @ts-expect-error
      const newValue = value?.filter((o: any) => o.id !== option.id)
      onChange?.(isDataFlat ? getFlatOptions(newValue) : newValue)
    }
  }

  const containerProps = getReferenceProps({
    ref: refs.setReference,
  })

  const getOptionProps = (option: DropdownOption, index: number) =>
    getItemProps({
      key: option.id,
      multiple,
      // @ts-expect-error
      size,
      active: activeIndex === index,
      selected: isSelected(option, value),
      onClick(e: any) {
        const selected = e.target.getAttribute('aria-selected') === 'true'
        if (!selected) {
          handleSelect(option)
        } else {
          handleClose()
        }
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
      size={size}
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
          options,
          activeIndex: activeIndex,
          limit,
          selected: value,
          handleRemoveSelected,
          props: {
            input: {},
            option: getOptionProps,
            list: listProps,
          },
          text: {
            loading: loadingText,
            empty: emptyText,
            notFound: notFoundText,
            placeholder,
          },
          open,
          setOpen,
          optionComponent,
          selectedOptionComponent,
        }}
      >
        <SelectView {...containerProps} />
      </DropdownContext.Provider>
    </InputBase>
  )
}

Select.defaultProps = dropdownInitialProps
