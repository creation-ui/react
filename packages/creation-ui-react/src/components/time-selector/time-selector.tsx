import { cva } from 'class-variance-authority'
import clsx from 'clsx'
import { FC, useCallback, useEffect, useRef } from 'react'
import { OnTimeSliderSelectArgs, TimeSelectorProps } from './types'



const cellClasses = cva(
  ['cursor-pointer', 'px-2', 'py-1', 'hover:bg-primary-50/50'],
  {
    variants: {
      selected: { true: 'bg-primary-100', false: '' },
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
  const seconds = Array.from({ length: 60 }, (_, i) => i)

  const currentDate = value ? new Date(value) : new Date()
  const handleSelect = useCallback(
    ({ hour, minute, second }: OnTimeSliderSelectArgs) => {
      const newDate = new Date(currentDate)

      if (hour) {
        newDate.setHours(hour)
      }

      if (minute) {
        newDate.setMinutes(minute)
      }

      if (second) {
        newDate.setSeconds(second)
      }

      onSelect(newDate)
    },
    [value, onSelect]
  )

  const hourRef = useRef<HTMLDivElement[]>([])
  const minuteRef = useRef<HTMLDivElement[]>([])
  const secondRef = useRef<HTMLDivElement[]>([])

  useEffect(() => {
    const h = currentDate.getHours()
    const m = currentDate.getMinutes()
    const s = currentDate.getSeconds()

    hourRef.current[h]?.scrollIntoView({
      block: 'nearest',
      behavior: 'smooth',
    })
    minuteRef.current[m]?.scrollIntoView({
      block: 'nearest',
      behavior: 'smooth',
    })
    secondRef.current[s]?.scrollIntoView({
      block: 'nearest',
      behavior: 'smooth',
    })
  }, [value])

  return (
    <div
      className={clsx(
        'bg-white dark:bg-info-800 dark:border-info-700 border rounded-md',
        'grid grid-cols-3 gap-2'
      )}
    >
      <div className={columnClasses}>
        {hours.map(hour => (
          <div
            ref={el => (hourRef.current[hour] = el)}
            key={hour}
            onClick={() => handleSelect({ hour })}
            className={cellClasses({
              selected: currentDate.getHours() === hour,
            })}
          >
            {hour.toString().padStart(2, '0')}
          </div>
        ))}
      </div>
      <div className={columnClasses}>
        {minutes.map(minute => (
          <div
            ref={el => (minuteRef.current[minute] = el)}
            key={minute}
            onClick={() => handleSelect({ minute })}
            className={cellClasses({
              selected: currentDate.getMinutes() === minute,
            })}
          >
            {minute.toString().padStart(2, '0')}
          </div>
        ))}
      </div>
      <div className={columnClasses}>
        {seconds.map(second => (
          <div
            ref={el => (secondRef.current[second] = el)}
            key={second}
            onClick={() => handleSelect({ second })}
            className={cellClasses({
              selected: currentDate.getSeconds() === second,
            })}
          >
            {second.toString().padStart(2, '0')}
          </div>
        ))}
      </div>
    </div>
  )
}
