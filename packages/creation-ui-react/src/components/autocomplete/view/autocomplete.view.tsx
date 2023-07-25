import { FloatingFocusManager, FloatingPortal } from '@floating-ui/react'
import clsx from 'clsx'
import { FC } from 'react'
import { optionListClasses } from '../../../classes'
import { useInputBase } from '../../input-base/input-base.context'
import { useAutocomplete } from '../context'
import { AutocompleteOptionType } from '../types'
import { renderOptionInternalContainer } from '../utils/render-option'
import { MultipleSelections } from './multiple-selections.view'
import Highlighter from "react-highlight-words";

export const AutocompleteView: FC = () => {
  const { classes, componentId } = useInputBase()
  const {
    //
    propsInput,
    multiple,
    selected,
    renderSelection,
    options = [],
    textNotFound,
    floatingContext,
    open,
    propsList,
  } = useAutocomplete()

  const customRenderValue = renderSelection && !multiple && selected
  const hasOptions = options.length > 0

  return (
    <>
      <div className={clsx(classes.input, 'relative h-auto py-1')}>
        <div className={clsx('flex flex-col gap-1')}>
          <div className='inline-flex gap-2 items-center flex-wrap h-fit'>
            {multiple && <MultipleSelections />}
            {customRenderValue ? (
              <>{renderSelection(selected as AutocompleteOptionType)}</>
            ) : (
              <input
                {...propsInput}
                id={componentId}
                className={clsx('reset-input h-fit', propsInput.className)}
              />
            )}
          </div>
        </div>
        <FloatingPortal>
          {open && (
            <FloatingFocusManager
              initialFocus={-1}
              context={floatingContext}
              visuallyHiddenDismiss
            >
              <ul {...propsList} className={optionListClasses({ open })}>
                {hasOptions ? (
                  options?.map(renderOptionInternalContainer)
                ) : (
                  <li className={'py-2 px-3 w-full text-center'}>
                    {textNotFound}
                  </li>
                )}
              </ul>
            </FloatingFocusManager>
          )}
        </FloatingPortal>
      </div>
    </>
  )
}
