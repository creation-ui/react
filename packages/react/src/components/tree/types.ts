import { ReactNode } from 'react'

export interface TreeProps {
  options: any[]
  label?: ReactNode
}

export type Entry = {
  id: number
  name: string
  parent_id: number
}

export type Branch = {
  id: number
  name: string
  parent_id: number
  children?: Branch[]
}

export type Tree = Branch[]
