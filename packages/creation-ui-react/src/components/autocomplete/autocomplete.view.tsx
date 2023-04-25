import clsx from 'clsx'
import { forwardRef } from 'react'
import { useInputBase } from '../input-base/input-base.context'
import { OptionsList, useDropdown } from '../shared/dropdown'

const SelectedView = () => {
  const {
    multiple,
    limit = 0,
    selected = [],
    selectedOptionComponent: SelectedOption,
  } = useDropdown()

  if (!multiple || !selected) return null
  // @ts-ignore
  const limitedOptions = selected.slice(0, limit)
  // @ts-ignore
  const rest = selected.length - limit
  return (
    <>
      {multiple && (
        <>
          {limitedOptions?.map((item, idx) => (
            <SelectedOption key={item.id} option={item} idx={idx} />
          ))}
          {rest > 0 && <span>+{rest}</span>}
        </>
      )}
    </>
  )
}

export const AutocompleteView = forwardRef((props, ref) => {
  const { classes, componentId } = useInputBase()
  const {
    props: { input },
    multiple,
  } = useDropdown()

  return (
    <>
      <div
        className={clsx(classes.input, 'relative h-auto py-1')}
        ref={ref as any}
        {...props}
      >
        <div className={clsx('flex flex-col gap-1')}>
          <div className='inline-flex gap-2 items-center flex-wrap h-fit'>
            {multiple && <SelectedView />}
            <input id={componentId} className='reset-input h-fit' {...input} />
          </div>
        </div>
        <OptionsList />
      </div>
    </>
  )
})
