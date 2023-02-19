import type { Table } from '@tanstack/table-core'
import { createContext, useContext } from 'react'

export interface TableContextValue<T = any> {
  table: Table<T>
  height?: number | string
  pagination?: {
    pageSizes?: number[]
    showTotalCount?: boolean
    totalInSizesSelector?: boolean
    pageButtonsVariant?: 'numbers' | 'buttons'
    texts?: {
      next: string
      total: string
      previous: string
      summary: string
    }
  }
}

export const TableContext = createContext<TableContextValue>(null)

export const useTable = () => {
  const context = useContext(TableContext)

  if (!context) {
    throw new Error(`"TableProvider" must be present in React DOM tree`)
  }

  return context
}
