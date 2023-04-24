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
import { useTheme } from '../../theme'
import { DropdownOption, DropdownProps } from '../../types'
import { isSelected } from '../../utils/is-selected'
import { DropdownChevron } from '../dropdown-chevron'
import { InputBase } from '../input-base'
import { DropdownContext, dropdownInitialProps } from '../shared/dropdown'
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
    value,
    options,
    helperText,
    error,
    limit,
    onChange,
    getLimitText,
    optionComponent,
    selectedOptionComponent,
    size = defaultSize,
  } = props

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

  const isEmpty = !value?.length
  // const Component = optionComponent

  const disabled = props.disabled || props.loading || props.readOnly
  const clearable = !disabled && props.clearable && !isEmpty

  const toggleOpen = () => setOpen(!open)
  const handleClose = () => {
    setActiveIdx(null)
    setOpen(false)
  }

  const handleSelect = (option: DropdownOption) => {
    if (multiple) {
      onChange?.([...(value ?? []), option])
    } else {
      onChange?.([option])
      handleClose()
    }
  }

  const handleRemoveSelected = (option: DropdownOption) => {
    onChange?.(value?.filter(o => o.id !== option.id))
  }

  const containerProps = getReferenceProps({
    ref: refs.setReference,
  })

  const getOptionProps = (option: DropdownOption, index: number) =>
    getItemProps({
      key: option.id,
      multiple,
      // @ts-expect-error
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
