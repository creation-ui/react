import { ElementSize } from '@root/packages/creation-ui-react/src/types'
import clsx from 'clsx'

type LogoSizes = ElementSize | 'xl'

interface LogoProps {
  /**
   * Logo size
   */
  size?: LogoSizes
  /**
   * Additional class names
   */
  className?: string
}

const sizeMap: Record<LogoSizes, string> = {
  sm: 'h-8 w-8',
  md: 'h-10 w-10',
  lg: 'h-12 w-12',
  xl: 'h-14 w-14',
}

export const Logo = ({ size = 'sm', className }: LogoProps) => (
  <img
    src={'/logo.png'}
    alt='Logo'
    className={clsx(
      'rounded-full',
      className,
      sizeMap[size],
      'border border-info-100'
    )}
  />
)
