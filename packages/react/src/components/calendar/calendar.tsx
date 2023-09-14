import clsx from 'clsx'
import { FC, useEffect, useState } from 'react'
import { useId } from '../../hooks'
import { useTheme } from '../../theme'
import { Button } from '../button'
import { Icon } from '../icon'
import { InteractiveContainer } from '../interactive-container'
import { CalendarContext } from './calendar.context'
import {
  CalendarDateValue,
  CalendarProps,
  CalendarView,
} from './calendar.types'
import { calendarClasses, headerClasses } from './classes'
import { CalendarDaysView } from './components/days'
import { CalendarMonthsView } from './components/months'
import { CalendarYearsView } from './components/years'
import { changeCalendarView } from './utils'

const Calendar: FC<CalendarProps> = props => {
  const theme = useTheme()

  const {
    size = theme.size ?? 'md',
    className,
    id,
    onClick,
    weekStartsOn = 1,
    value,
  } = props
  const componentId = useId(id)

  const [view, setView] = useState<CalendarView>('days')

  const [selectedDate, setSelectedDate] = useState<CalendarDateValue>(value)
  const [currentDate, setCurrentDate] = useState<Date>(value || new Date())

  const handleDayClick = (date: CalendarDateValue) => {
    onClick?.(date)
    setSelectedDate(date)
  }

  const onNextClick = () => {
    const date = changeCalendarView(currentDate, view, 'next')
    setCurrentDate(date)
  }
  const onPrevClick = () => {
    const date = changeCalendarView(currentDate, view, 'prev')
    setCurrentDate(date)
  }

  const onTodayClick = () => {
    const today = new Date()
    setCurrentDate(today)
    handleDayClick(today)
    setView('days')
  }

  const isMonthName = view === 'days'
  const isYearName = view === 'days' || view === 'months'
  return (
    <CalendarContext.Provider
      value={{
        currentDate,
        selectedDate,
        setSelectedDate: handleDayClick,
        setCurrentDate,
        setView,
        size,
        weekStartsOn,
      }}
    >
      <InteractiveContainer className={className}>
        <div className={calendarClasses.container({ size })} id={componentId}>
          <div className='flex items-center justify-between mb-2'>
            <div className='flex items-center gap-1'>
              <button
                className={clsx(headerClasses)}
                onClick={setView.bind(null, 'months')}
              >
                {isMonthName &&
                  currentDate.toLocaleDateString(undefined, { month: 'long' })}
              </button>
              <button
                className={clsx(headerClasses)}
                onClick={setView.bind(null, 'years')}
              >
                {isYearName && currentDate.getFullYear()}
              </button>
            </div>
            <div className='flex items-center gap-2'>
              <Button
                circle
                size='sm'
                variant='text'
                className='h-5 w-5 p-3'
                onClick={onPrevClick.bind(null)}
              >
                <Icon icon='chevron_left' />
              </Button>
              <Button
                circle
                size='sm'
                variant='text'
                className='h-5 w-5 p-3'
                onClick={onNextClick.bind(null)}
              >
                <Icon icon='chevron_right' />
              </Button>
            </div>
          </div>
          <div>
            <>{view === 'days' && <CalendarDaysView />}</>
            <>{view === 'months' && <CalendarMonthsView />}</>
            <>{view === 'years' && <CalendarYearsView />}</>
          </div>
          <Button
            variant='text'
            size='sm'
            onClick={onTodayClick}
            className='absolute bottom-2 left-2'
          >
            Today
          </Button>
        </div>
      </InteractiveContainer>
    </CalendarContext.Provider>
  )
}

Calendar.displayName = 'Calendar'

Calendar.defaultProps = {
  size: 'md',
  weekStartsOn: 1,
}

export default Calendar
