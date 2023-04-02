import { cva } from 'class-variance-authority'
import { microInteractions, sharedSizeClassesCVA } from '../../classes'

export const calendarClasses = {
  container: cva([microInteractions, 'bg-white border p-4 rounded-md'], {
    variants: {
      size: {
        sm: ['w-72', 'h-72'],
        md: ['w-96', 'h-80'],
        lg: ['w-[406px]', 'h-96'],
      },
    },
  }),
  year: '',
  month: '',

  grid: '',
}

export const calendarDaysViewClasses = {
  day: cva(['w-full'], {
    variants: {
      isToday: {
        true: '',
        false: '',
      },
      isSelected: {
        true: '!text-info-100',
      },
      isCurrentMonth: {
        true: 'text-info-900',
        false: 'text-info-400',
      },
      size: sharedSizeClassesCVA,
      isWeekend: {
        true: '!text-error-500',
        false: '',
      },
    },
    defaultVariants: {
      isSelected: false,
      isToday: false,
      isCurrentMonth: true,
      isWeekend: true,
    },
    compoundVariants: [
      {
        isSelected: true,
        isWeekend: true,
        isCurrentMonth: true,
        className: '!text-info-100',
      },
    ],
  }),
  grid: '',
}
