import clsx from 'clsx'
import { forwardRef } from 'react'
import { useInputBase } from '../input-base/input-base.context'
import { OptionsList, useDropdown, SelectedOption } from '../shared/dropdown'

export const SelectView = forwardRef((props, ref) => {
  const { classes, componentId } = useInputBase()

  const { multiple, limit, selected, setOpen } = useDropdown()

  const limitedOptions = selected.slice(0, limit)
  const rest = selected.length - limit

  return (
    <div
      className={clsx(classes.input, 'relative h-auto py-1')}
      ref={ref as any}
      id={componentId}
      {...props}
    >
      <div
        className={clsx('flex flex-col gap-1')}
        onClick={e => {
          e.stopPropagation()
          setOpen(true)
        }}
      >
        <div className='inline-flex gap-2 items-center flex-wrap h-fit'>
          {multiple ? (
            <>
              {limitedOptions?.map((item, idx) => (
                <SelectedOption key={item.id} option={item} idx={idx} />
              ))}
              {rest > 0 && <span>+{rest}</span>}
            </>
          ) : (
            selected?.[0]?.label
          )}
          <>&nbsp;</>
        </div>
      </div>
      <OptionsList />
    </div>
  )
})
