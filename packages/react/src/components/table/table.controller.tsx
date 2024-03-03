import merge from 'lodash.merge'
import { TableContext, TableContextValue } from './table.context'
import Table from './table.view'

const defaultPaginationConfig = {
  texts: {
    total: '{resultsCount} results',
    summary: 'Showing page {currentPage} of {totalPages}',
    previous: 'Previous',
    next: 'Next',
    pageButtonsVariant: 'numbers',
  },
}

export default function TableController(props: TableContextValue) {
  let value = { ...props }

  if (props.pagination) {
    value.pagination = merge(defaultPaginationConfig, { ...props.pagination })
  }

  return (
    <TableContext.Provider value={value}>
      <Table />
    </TableContext.Provider>
  )
}
