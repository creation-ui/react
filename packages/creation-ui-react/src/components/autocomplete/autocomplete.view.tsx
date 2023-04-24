import clsx from 'clsx'
import { forwardRef } from 'react'
import { useInputBase } from '../input-base/input-base.context'
import { OptionsList, useDropdown } from '../shared/dropdown'

export const AutocompleteView = forwardRef((props, ref) => {
  const { classes, componentId } = useInputBase()

  const {
    props: { input },
    multiple,
    limit = 0,
    selected = [],
    selectedOptionComponent: SelectedOption,
  } = useDropdown()

  const limitedOptions = selected.slice(0, limit)
  const rest = selected.length - limit

  return (
    <>
      <div
        className={clsx(classes.input, 'relative h-auto py-1')}
        ref={ref as any}
        {...props}
      >
        <div className={clsx('flex flex-col gap-1')}>
          <div className='inline-flex gap-2 items-center flex-wrap h-fit'>
            {multiple && (
              <>
                {limitedOptions?.map((item, idx) => (
                  <SelectedOption key={item.id} option={item} idx={idx} />
                ))}
                {rest > 0 && <span>+{rest}</span>}
              </>
            )}

            <input
              //
              id={componentId}
              className='reset-input h-fit'
              {...input}
            />
          </div>
        </div>
        <OptionsList />
      </div>
    </>
  )
})
