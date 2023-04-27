import clsx from 'clsx'
import { forwardRef } from 'react'
import { getFlatOptions } from '../../utils/normalize-dropdown-options'
import { useInputBase } from '../input-base/input-base.context'
import { OptionsList, SelectedOption, useDropdown } from '../shared/dropdown'

const SelectedView = () => {
  const {
    multiple,
    limit = 0,
    selected = [],
    selectedOptionComponent: SelectedOptionComponent = SelectedOption,
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
            <SelectedOptionComponent key={item.id} option={item} idx={idx} />
          ))}
          {rest > 0 && <span>+{rest}</span>}
        </>
      )}
    </>
  )
}

export const SelectView = forwardRef((props, ref) => {
  const { classes, componentId } = useInputBase()

  const {
    multiple,
    selected = [],
    setOpen,
    text: { placeholder },
  } = useDropdown()

  const flat: string[] = getFlatOptions(selected)
  const isEmpty = !flat.length
  const isPlaceholder = isEmpty || multiple

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
          {multiple ? <SelectedView /> : flat}
          {isPlaceholder && (
            <span className='text-gray-400'>{placeholder}</span>
          )}
          <>&nbsp;</>
        </div>
      </div>
      <OptionsList />
    </div>
  )
})