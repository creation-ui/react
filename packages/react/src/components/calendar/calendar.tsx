import clsx from 'clsx'
import { FC, useEffect, useMemo, useState } from 'react'
import { useId } from '../../hooks'
import { useTheme } from '../../theme'
import { Button } from '../button'
import { Icon } from '../icon'
import { InteractiveContainer } from '../interactive-container'
import { CalendarContext, CalendarContextValue } from './calendar.context'
import { CalendarProps, CalendarView, DateRange } from './calendar.types'
import { calendarClasses, headerClasses } from './classes'
import { CalendarDaysView } from './components/days'
import { CalendarMonthsView } from './components/months'
import { CalendarYearsView } from './components/years'
import { changeCalendarView, getCalendarInitialValue } from './utils'

const Calendar: FC<CalendarProps> = props => {
  const theme = useTheme()

  const {
    size = theme.size ?? 'md',
    className,
    id,
    onChange,
    weekStartsOn = 1,
    numberOfMonths = 1,
    mode = 'single',
    value,
    todayText = 'Today',
    startOn,
  } = props

  const componentId = useId(id)

  const [view, setView] = useState<CalendarView>('days')
  const [viewDate, setViewDate] = useState<Date>(startOn ?? new Date())
  const [selectedDates, setSelectedDates] = useState<DateRange>([null, null])

  useEffect(() => {
    setSelectedDates(getCalendarInitialValue(value))
  }, [])

  const handleDayClick = (date: Date | null) => {
    if (mode === 'range') {
      if (!selectedDates[0] || (selectedDates[0] && selectedDates[1])) {
        setSelectedDates([date, null])
      } else if (selectedDates[0] && !selectedDates[1]) {
        // Check if selected date is before the initial date and swap if necessary
        if (date && selectedDates[0] && date < selectedDates[0]) {
          setSelectedDates([date, selectedDates[0]])
          // @ts-expect-error
          onChange?.([date, selectedDates[0]])
        } else {
          setSelectedDates([selectedDates[0], date])
          // @ts-expect-error
          onChange?.([selectedDates[0], date])
        }
      }
    } else {
      setSelectedDates([date, null])
      // @ts-expect-error
      onChange?.(date)
    }
  }

  const onNextClick = () => {
    const date = changeCalendarView(viewDate, view, 'next')
    setViewDate(date)
  }
  const onPrevClick = () => {
    const date = changeCalendarView(viewDate, view, 'prev')
    setViewDate(date)
  }

  const onTodayClick = () => {
    const today = new Date()
    setViewDate(today)
    handleDayClick(today)
    setView('days')
  }

  const isMonthName = view === 'days'
  const isYearName = ['months', 'days'].includes(view)
  const isTodaySelected = useMemo(() => {
    if (mode === 'range') return false
    const first = selectedDates?.[0]?.toDateString()
    const second = selectedDates?.[1]?.toDateString()
    const today = new Date().toDateString()
    return first === today || second === today
  }, [selectedDates])

  const context: CalendarContextValue = useMemo(
    () => ({
      setSelectedDates: handleDayClick,
      setViewDate: setViewDate,
      setView,
      size,
      currentDate: viewDate,
      selectedDates,
      weekStartsOn,
      viewDate,
      mode,
      numberOfMonths,
    }),
    [size, viewDate, selectedDates, weekStartsOn]
  )

  const currentView = useMemo(() => {
    switch (view) {
      case 'days':
        return <CalendarDaysView />
      case 'months':
        return <CalendarMonthsView />
      case 'years':
        return <CalendarYearsView />
    }
  }, [view])

  return (
    <CalendarContext.Provider value={context}>
      <InteractiveContainer className={className}>
        <div className={calendarClasses.container({ size })} id={componentId}>
          <div className='flex items-center justify-between mb-2'>
            <div className='flex items-center gap-1'>
              <button
                className={clsx(headerClasses)}
                onClick={setView.bind(null, 'months')}
              >
                {isMonthName &&
                  viewDate.toLocaleDateString(undefined, { month: 'long' })}
              </button>
              <button
                className={clsx(headerClasses)}
                onClick={setView.bind(null, 'years')}
              >
                {isYearName && viewDate.getFullYear()}
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
          <div>{currentView}</div>
          <div className='p-2'>
            <Button
              variant='text'
              size='sm'
              onClick={onTodayClick}
              disabled={isTodaySelected}
              className='absolute bottom-2 left-2'
            >
              {todayText}
            </Button>
          </div>
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
