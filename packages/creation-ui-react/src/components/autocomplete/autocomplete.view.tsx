import { FloatingFocusManager, FloatingPortal } from '@floating-ui/react'
import clsx from 'clsx'
import React, { forwardRef } from 'react'
import { twMerge } from 'tailwind-merge'
import { useInputBase } from '../input-base/input-base.context'
import { useAutocomplete } from './context'
import { optionClasses, optionListClasses } from './classes'
import SelectedItem from './selected-item'

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

export const AutocompleteView = forwardRef((props, ref) => {
  const { classes, componentId, disabled, readOnly } = useInputBase()

  const {
    activeIndex,
    floatingContext,
    props: { input, option, list },
    text,
    clearable,
    multiple,
    options,
    limit,
    open,
    selected,
    handleRemoveSelected,
  } = useAutocomplete()

  return (
    <>
      <div
        className={clsx(classes.input, 'relative h-auto py-1')}
        ref={ref as any}
        {...props}
      >
        <div className={clsx('flex flex-col gap-1')}>
          <div className='inline-flex gap-2 options-center flex-wrap h-fit'>
            {multiple &&
              selected?.map((item, idx) => (
                <SelectedItem key={item.id} option={item} idx={idx} />
              ))}
            <input
              //
              id={componentId}
              className='reset-input h-fit'
              {...input}
            />
          </div>
        </div>
        <FloatingPortal>
          {open && (
            <FloatingFocusManager
              context={floatingContext}
              initialFocus={-1}
              visuallyHiddenDismiss
            >
              <ul {...list} className={optionListClasses({ open: true })}>
                {options.length ? (
                  options.map((item, index) => (
                    <Item {...option(item, index)}>{item.label}</Item>
                  ))
                ) : (
                  <li className={'py-2 px-3 w-full text-center'}>
                    {text.notFound}
                  </li>
                )}
              </ul>
            </FloatingFocusManager>
          )}
        </FloatingPortal>
      </div>
    </>
  )
})
