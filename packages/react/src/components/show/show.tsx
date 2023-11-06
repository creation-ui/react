interface ShowProps {
  when?: boolean
  children?: React.ReactNode
  fallback?: React.ReactNode
}

export const Show = ({ when, children, fallback = null }: ShowProps) =>
  when ? <>{children}</> : <>{fallback}</>
