import { useTheme } from '../../theme'
import clsx from 'clsx'
import type { ProgressBarProps } from './progress-bar.types'
import { cva } from 'class-variance-authority'

const classes = {
  container: [
    'text-xs',
    'w-full',
    'bg-zinc-200',
    'rounded-full',
    'dark:bg-zinc-700',
    'relative',
  ],
  value: [
    'absolute',
    'top-1/2',
    'left-1/2',
    'transform',
    '-translate-x-1/2',
    '-translate-y-1/2',
    'invert',
  ],
}

const progressValue = cva(
  [
    'absolute',
    'top-1/2',
    'left-1/2',
    'transform',
    '-translate-x-1/2',
    '-translate-y-1/2',
  ],
  {
    variants: {
      invert: {
        true: ['invert'],
      },
    },
  }
)

const progressBar = cva(
  [
    'bg-primary-500',
    'text-primary-100',
    'text-center',
    'leading-none',
    'rounded-full',
    'transition-all',
    'duration-500',
    'ease-in-out',
  ],
  {
    variants: {
      size: {
        sm: ['p-1'],
        md: ['p-2'],
        lg: ['p-3'],
      },
      value: {
        false: ['!bg-transparent'],
      },
    },
    defaultVariants: {
      size: 'md',
    },
  }
)

const formatDisplayValueDefault = (value: number) => `${value}%`

const ProgressBar = (props: ProgressBarProps) => {
  const { size: defaultSize } = useTheme()
  const {
    value = 0,
    showValue = false,
    formatDisplayValue = formatDisplayValueDefault,
    className,
    size = defaultSize,
  } = props

  return (
    <div {...props} className={clsx(classes.container, className)}>
      <div
        className={progressBar({ size, value: value !== 0 })}
        style={{ width: formatDisplayValueDefault(value) }}
      ></div>
      <span className={progressValue({ invert: value >= 50 })}>
        {showValue && formatDisplayValue(value)}
      </span>
    </div>
  )
}

export default ProgressBar
