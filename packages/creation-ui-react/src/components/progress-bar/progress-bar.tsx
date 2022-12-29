import { useTheme } from '@creation-ui/core'
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
    <div className={clsx('progress-bar--wrapper', className)} {...props}>
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
