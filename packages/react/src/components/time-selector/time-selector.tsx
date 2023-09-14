import { cva } from 'class-variance-authority'
import clsx from 'clsx'
import { FC, useCallback, useEffect, useRef } from 'react'
import { OnTimeSliderSelectArgs, TimeSelectorProps } from './types'

const cellClasses = cva(
  ['cursor-pointer', 'px-2', 'py-1', 'hover:bg-primary-50/50'],
  {
    variants: {
      selected: {
        true: [
          //
          'bg-primary-100',
          'dark:bg-primary-100',
          'dark:text-info-700',
        ],
        false: '',
      },
    },
  }
)

const columnClasses = clsx('overflow-y-scroll', 'h-48')

export const TimeSelector: FC<TimeSelectorProps> = ({
  value,
  onSelect,
  format = 24,
}) => {
  const hours = Array.from({ length: format }, (_, i) => i)
  const minutes = Array.from({ length: 60 }, (_, i) => i)

  const currentDate = value ? new Date(value) : undefined

  const handleSelect = useCallback(
    ({ hour, minute }: OnTimeSliderSelectArgs) => {
      const newDate = currentDate ? new Date(currentDate) : new Date()
      if (!currentDate) newDate.setHours(0, 0, 0, 0)

      const h = hour ?? newDate.getHours()
      const min = minute ?? newDate.getMinutes()

      newDate.setHours(h, min)

      onSelect(newDate)
    },
    [onSelect]
  )

  const hourRef = useRef<HTMLDivElement[]>([])
  const minuteRef = useRef<HTMLDivElement[]>([])

  useEffect(() => {
    const h = currentDate?.getHours()
    const m = currentDate?.getMinutes()

    h &&
      hourRef.current[h]?.scrollIntoView({
        block: 'nearest',
        behavior: 'smooth',
      })

    m &&
      minuteRef.current[m]?.scrollIntoView({
        block: 'nearest',
        behavior: 'smooth',
      })
  }, [value])

  return (
    <div
      className={clsx(
        'bg-white dark:bg-info-800 dark:border-info-700 border rounded-md',
        'grid grid-cols-2 gap-2'
      )}
    >
      <div className={columnClasses}>
        {hours.map(hour => (
          <div
            ref={el => ((hourRef as any).current[hour] = el)}
            key={hour}
            onClick={() => handleSelect({ hour })}
            className={cellClasses({
              selected: currentDate?.getHours() === hour,
            })}
          >
            {hour.toString().padStart(2, '0')}
          </div>
        ))}
      </div>
      <div className={columnClasses}>
        {minutes.map(minute => (
          <div
            ref={el => ((minuteRef as any).current[minute] = el)}
            key={minute}
            onClick={() => handleSelect({ minute })}
            className={cellClasses({
              selected: currentDate?.getMinutes() === minute,
            })}
          >
            {minute.toString().padStart(2, '0')}
          </div>
        ))}
      </div>
    </div>
  )
}
