import type { RankingInfo } from '@tanstack/match-sorter-utils'
import type { FilterFn, Table } from '@tanstack/react-table'
import type { ClassName } from '../../types'

declare module '@tanstack/table-core' {
  interface FilterFns {
    fuzzy: FilterFn<unknown>
  }
  interface FilterMeta {
    itemRank: RankingInfo
  }
}

export interface TableProps {
  table: Table<any>
  className?: ClassName
}
