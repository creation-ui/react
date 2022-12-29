import React, { ElementType } from 'react'

interface HeaderProps {
  children: React.ReactNode
  as?: ElementType
  href?: string
  'aria-label'?: string
}

export const Header = ({
  children,
  as: Tag = 'h1',
  href,
  ...props
}: HeaderProps) => (
  <Tag className='heading group whitespace-pre-wrap mt-3' {...props}>
    <a
      href={href}
      className='after:hash absolute -ml-6 !text-[#a1a1aa] !no-underline opacity-0 !shadow-none focus-visible:opacity-100 group-hover:opacity-100'
      aria-label={props['aria-label']}
    ></a>
    <span aria-hidden='true'>{children}</span>
  </Tag>
)

export const Description = ({ children }: { children: React.ReactNode }) => (
  <div className='prose dark:prose-invert '>{children}</div>
)
