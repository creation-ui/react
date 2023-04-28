import type { SVGElementProps } from './icon.type'

export const Slash = ({ title, ...props }: SVGElementProps) => (
  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' {...props}>
    <title>{title}</title>
    <path d='M7 21L14.9 3H17L9.1 21H7Z' />
  </svg>
)
