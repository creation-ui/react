import {
  Avatar,
  Button,
  Checkbox,
  ReadableError,
  StatusBadge,
  StatusBadgeProps,
  Table,
} from '@creation-ui/react'
import React, { useMemo, useState } from 'react'

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
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<ReadableError | null>(null)

  const [rowSelection, setRowSelection] = useState({})
  const columns = useMemo<ColumnDef<Person>[]>(
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

  const toggleLoading = () => setLoading(!loading)
  const toggleError = () =>
    setError(
      error
        ? null
        : {
            title: 'Service unavailable',
            message:
              'An error occurred in your request. Please try again or change your query',
          }
    )

  return (
    <div>
      <h2>Playground</h2>
      <div className='flex gap-3 mb-3'>
        <Button onClick={toggleLoading}>
          {loading ? 'Stop loading' : 'Start loading'}
        </Button>
        <Button onClick={toggleError}>
          {error ? 'Stop error' : 'Start error'}
        </Button>
      </div>

      <pre className='text-sm p-5 bg-yellow-200 text-gray-800 rounded w-fit mb-3'>
        {JSON.stringify({ loading, error }, null, 2)}
      </pre>

      <Table
        loading={loading}
        error={error}
        table={table}
        height='50vh'
        pagination={{
          pageButtonsVariant: 'buttons',
          pageSizes: [5, 10, 15, 20, 25, 30, 35, 40, 45, 50],
          showTotalCount: true,
          totalInSizesSelector: true,
          texts: {
            total: '{resultsCount} results',
            next: 'Next',
            previous: 'Previous',
            summary: 'Page {currentPage} of {totalPages}',
          },
        }}
      />
    </div>
  )
}
