import cn from 'clsx'
import Link from 'next/link'

import styles from './style.module.css'

export interface CardProps {
  children?: React.ReactNode
  style?: React.CSSProperties
  icon?: React.ReactNode
  arrow?: boolean
  image?: string

  title: string
  href: string
}

export function Card({
  children,
  title,
  icon,
  image,
  arrow = false,
  href,
  ...props
}: CardProps) {
  if (image) {
    return (
      <Link
        href={href}
        className={cn(
          styles.card,
          'group flex flex-col justify-start overflow-hidden rounded-lg border border-gray-200 bg-gray-100 text-current no-underline shadow shadow-gray-100 transition-all duration-200',
          'hover:border-gray-300 hover:shadow-lg hover:shadow-gray-100'
        )}
        {...props}
      >
        {children}
        <span
          className={cn(
            styles.title,
            'gap-2 p-4 text-gray-700',
            'hover:text-gray-900'
          )}
        >
          {icon}
          <span className='flex gap-1'>{title}</span>
        </span>
      </Link>
    )
  }

  return (
    <Link
      href={href}
      className={cn(
        styles.card,
        'group flex flex-col justify-start overflow-hidden rounded-lg border border-gray-200 bg-transparent text-current no-underline shadow-sm shadow-gray-100 transition-all duration-200 dark:border-zinc-800 dark:shadow-none',
        'hover:border-gray-300 hover:bg-zinc-50 hover:shadow-md hover:shadow-gray-100 dark:hover:border-zinc-700 dark:hover:bg-zinc-900 dark:hover:shadow-none'
      )}
      {...props}
    >
      <span
        className={cn(
          styles.title,
          'group',
          'gap-2 p-4 text-gray-700 dark:text-zinc-200',
          'hover:text-gray-900 dark:hover:text-zinc-50',
          'items-center'
        )}
      >
        <span className='group-hover:-rotate-[360deg] ease-in-out duration-1000'>{icon}</span>
        {title}
      </span>
    </Link>
  )
}

interface CardsCollectionProps {
  children?: React.ReactNode
  num?: number
  style?: React.CSSProperties
}

export function Cards({ children, num = 3, ...props }: CardsCollectionProps) {
  return (
    <div
      className={cn(styles.cards, 'mt-4 gap-4')}
      {...props}
      style={
        {
          '--rows': num,
          ...props.style,
        } as any
      }
    >
      {children}
    </div>
  )
}
