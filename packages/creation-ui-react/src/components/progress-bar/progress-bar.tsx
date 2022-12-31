import { useTheme } from '@theme'
import clsx from 'clsx'
import { ProgressBarProps } from './progress-bar.types'

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
    <div {...props} className={clsx('progress-bar--wrapper', className)}>
      <div
        className={clsx('progress-bar--bar', `progress-bar--bar--${size}`)}
        style={{ width: formatDisplayValueDefault(value) }}
      >
        {showValue && formatDisplayValue(value)}
      </div>
    </div>
  )
}

export default ProgressBar
