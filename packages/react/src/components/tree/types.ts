export interface TreeProps {
  options?: any[]
  label?: string
}

export type RawElement = {
  id: number
  name: string
  parent_id: number
}

export type BranchType = {
  id: number
  name: string
  parent_id: number
  children?: BranchType[]
}

export type TreeType = BranchType[]
