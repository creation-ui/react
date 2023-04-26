import { twMerge } from 'tailwind-merge'

export interface CardProps {
  children?: React.ReactNode
  className?: string
}

const classes = {
  card: [
    'bg-white',
    'dark:bg-info-800',
    'dark:text-info-100',
    'text-info-900',
    'border',
    'border-gray-200',
    'dark:border-gray-700',
    'rounded-md',
    'p-4',
    'flex',
    'flex-col',
    'gap-4',
    'w-fit',
    'h-fit',
    'overflow-clip',
  ],
  header: ['text-lg', 'font-semibold', 'mb-2', 'leading-relaxed'],
  body: ['text-info-600', 'dark:text-info-400'],
  footer: [],
}

export const Card = ({ children, className }: CardProps) => {
  return <div className={twMerge(className, classes.card)}>{children}</div>
}

const Header = ({ children, className }: CardProps) => {
  return <h3 className={twMerge(className, classes.header)}>{children}</h3>
}

const Body = ({ children, className }: CardProps) => {
  return <div className={twMerge(className, classes.body)}>{children}</div>
}

const Footer = ({ children, className }: CardProps) => {
  return <div className={twMerge(className, classes.footer)}>{children}</div>
}

Card.Footer = Footer
Card.Body = Body
Card.Header = Header
