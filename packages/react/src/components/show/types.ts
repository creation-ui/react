export interface ShowProps {
  when?: boolean
  children?: React.ReactNode
  fallback?: React.ReactNode
}

export type ShowOneProps = {
  children: React.ReactElement<ShowProps>[] | React.ReactElement<ShowProps>
  fallback?: React.ReactNode
  dependencies?: any[]
}
