import clsx from 'clsx'
import type { FC } from 'react'

interface PlaceholderProps {
  children: React.ReactNode
}

const classes = clsx(['text-info-400', 'cursor-default'])

export const Placeholder: FC<PlaceholderProps> = ({ children }) => (
  <span className={classes}>{children}</span>
)
