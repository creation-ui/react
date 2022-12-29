import { RankingInfo } from '@tanstack/match-sorter-utils'
import { FilterFn, Table } from '@tanstack/react-table'

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
  className?: string
}
