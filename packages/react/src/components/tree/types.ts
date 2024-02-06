export type RawElement = {
  id: number | string
  name: string
  parent_id?: number | string
}

export type BranchType = {
  id: number | string
  name: string
  parent_id?: number | string | null
  children?: BranchType[]
}

export type TreeType = BranchType[]

export interface BranchProps {
  branch: BranchType
  level?: number
  onLeafClick?: (leaf: BranchType) => void
  onBranchClick?: (branch: BranchType) => void
  getItemOffset?: (level: number) => number
  getItemLabel?: (branch: BranchType) => string
}

export type TreeProps = {
  tree?: TreeType
  value?: BranchType | null
  placeholder?: string
  cx?: {
    placeholder?: string
    value?: string
    container?: { inner?: string; outer?: string }
  }
  onClear?: () => void
  disabled?: boolean,
  readOnly?: boolean,
  loading?: boolean,
} & Pick<
  BranchProps,
  'onBranchClick' | 'onLeafClick' | 'getItemOffset' | 'getItemLabel'
>
