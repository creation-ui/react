import {
  Avatar,
  Checkbox,
  StatusBadge,
  StatusBadgeProps,
  Table,
} from '@creation-ui/react'
import React from 'react'

import {
  ColumnDef,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
} from '@tanstack/react-table'
import data from './table-data.json'

type Person = {
  avatar: string
  firstName: string
  lastName: string
  status: StatusBadgeProps['status']
  workTime: number
}

const formatMinutes = (minutes: number) => {
  if (minutes < 60) {
    return `${minutes}m`
  }

  const hours = Math.floor(minutes / 60)
  const remainingMinutes = minutes % 60

  if (remainingMinutes === 0) {
    return `${hours}h`
  }

  return `${hours}h ${remainingMinutes}m`
}

export const TableExample = () => {
  const [rowSelection, setRowSelection] = React.useState({})
  const columns = React.useMemo<ColumnDef<Person>[]>(
    () => [
      {
        id: 'select',
        header: ({ table }) => (
          <Checkbox
            size='sm'
            checked={table.getIsAllRowsSelected()}
            indeterminate={table.getIsSomeRowsSelected()}
            onChange={table.getToggleAllRowsSelectedHandler()}
          />
        ),
        cell: ({ row }) => (
          <Checkbox
            size='sm'
            checked={row.getIsSelected()}
            disabled={!row.getCanSelect()}
            indeterminate={row.getIsSomeSelected()}
            onChange={row.getToggleSelectedHandler()}
          />
        ),
      },
      {
        accessorKey: 'avatar',
        id: 'avatar',
        enableResizing: true,
        cell: info => (
          <Avatar src={info.getValue() as Person['avatar']} size='sm' />
        ),
        enableColumnFilter: false,
      },
      {
        accessorKey: 'firstName',
        cell: info => info.getValue(),
        header: 'First Name',
        enableColumnFilter: false,
      },
      {
        accessorKey: 'lastName',
        id: 'lastName',
        cell: info => info.getValue(),
        header: () => 'Last Name',
        enableColumnFilter: false,
      },
      {
        accessorKey: 'workTime',
        id: 'workTime',
        cell: info => formatMinutes(info.getValue() as number),
        header: () => 'Work Time',
        enableColumnFilter: false,
        footer: ({ table }) => {
          const value = table
            .getFilteredRowModel()
            .rows.reduce(
              (total, row) => total + (row as any).getValue('workTime'),
              0
            )
          return formatMinutes(value)
        },
      },
      {
        accessorKey: 'status',
        id: 'status',
        cell: info => (
          <StatusBadge status={info.getValue() as Person['status']} size='sm' />
        ),
        enableColumnFilter: false,
      },
    ],
    []
  )

  const table = useReactTable({
    columns,
    state: { rowSelection },
    data: data as Person[],
    enableRowSelection: true,
    onRowSelectionChange: setRowSelection,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  })

  return (
    <Table
      table={table}
      height='50vh'
      pagination={{
        pageButtonsVariant: 'buttons',
        pageSizes: [5, 10, 15, 20, 25, 30, 35, 40, 45, 50],
        showTotalCount: true,
        totalInSizesSelector: true,
        texts: {
          total: '{resultsCount} wyników',
          next: 'Dalej',
          previous: 'Wstecz',
          summary: 'Strona {currentPage} z {totalPages}',
        },
      }}
    />
  )
}
