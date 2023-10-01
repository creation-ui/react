import { FC } from 'react'
import { useCalendar } from '../../calendar.context'
import { headerClasses } from '../../classes'

interface MonthYearTitleProps {
  offsetMonth: number
}

export const MonthYearTitle: FC<MonthYearTitleProps> = ({ offsetMonth }) => {
  const { viewDate: originalViewDate, setView, view } = useCalendar()

  // Adjust the viewDate based on the offsetMonth
  const adjustedViewDate = new Date(originalViewDate)
  adjustedViewDate.setMonth(originalViewDate.getMonth() + offsetMonth) // offsetMonth - 1 because 1 means no change and 2 means next month

  const isMonthName = view === 'days'
  const isYearName = ['months', 'days'].includes(view)

  return (
    <div className='flex items-center gap-1'>
      <button
        className={headerClasses()}
        onClick={setView.bind(null, 'months')}
      >
        {isMonthName
          ? adjustedViewDate.toLocaleDateString(undefined, { month: 'long' })
          : null}
      </button>
      <button className={headerClasses()} onClick={setView.bind(null, 'years')}>
        {isYearName ? adjustedViewDate.getFullYear() : null}
      </button>
    </div>
  )
}
