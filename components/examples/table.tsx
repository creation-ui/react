import { ReadableError } from '@creation-ui/core'
import {
  Avatar,
  Checkbox,
  Chip,
  ChipProps,
  Switch,
  Table,
} from '@creation-ui/react'
import { mdiPencil } from '@mdi/js'
import { Icon } from '@mdi/react'
import {
  ColumnDef,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
} from '@tanstack/react-table'
import clsx from 'clsx'
import { useMemo, useState } from 'react'
import data from './table-data.json'

type Person = {
  avatar: string
  firstName: string
  lastName: string
  status: ChipProps['status']
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
  const [error, setError] = useState<ReadableError | undefined>(undefined)

  const [rowSelection, setRowSelection] = useState({})
  const columns = useMemo<ColumnDef<Person>[]>(
    () => [
      {
        id: 'select',
        header: ({ table }) => (
          <div className='px-4'>
            <Checkbox
              size='sm'
              checked={table.getIsAllRowsSelected()}
              indeterminate={table.getIsSomeRowsSelected()}
              onChange={table.getToggleAllRowsSelectedHandler()}
            />
          </div>
        ),
        cell: ({ row }) => (
          <div className='px-4'>
            <Checkbox
              size='sm'
              checked={row.getIsSelected()}
              disabled={!row.getCanSelect()}
              indeterminate={row.getIsSomeSelected()}
              onChange={row.getToggleSelectedHandler()}
            />
          </div>
        ),
        meta: {
          className: 'w-fit',
        },
        maxSize: 50,
      },
      {
        maxSize: 75,
        size: 75,
        accessorKey: 'avatar',
        meta: {
          align: 'center',
        },
        id: 'avatar',
        header: () => 'Avatar',
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
        maxSize: 100,
        meta: {
          size: '8%',
        },
      },
      {
        maxSize: 200,
        accessorKey: 'lastName',
        id: 'lastName',
        cell: info => info.getValue(),
        header: () => 'Last Name',
        enableColumnFilter: false,
        meta: {
          size: '20%',
          className: 'overflow-hidden text-ellipsis whitespace-nowrap',
        },
      },
      {
        maxSize: 150,
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
              0,
            )
          return formatMinutes(value)
        },
      },
      {
        accessorKey: 'status',
        header: () => <div className='mx-auto'>Status</div>,
        id: 'status',
        cell: info => {
          const status = info.getValue() as string

          const label = status === 'primary' ? 'Active' : status

          return (
            <Chip
              status={status as Person['status']}
              size='sm'
              uppercase
              label={label}
            />
          )
        },
        enableColumnFilter: false,
        meta: {
          align: 'center',
        },
      },
      {
        accessorKey: 'firstName',
        header: () => '',
        id: 'edit',
        cell: info => (
          <a className={clsx('ml-auto align-center flex gap-2')}>
            <Icon path={mdiPencil} size={0.7} />
            <span title={`Edit ${info.getValue()}`}>Edit</span>
          </a>
        ),
        enableColumnFilter: false,
      },
    ],
    [],
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
        ? undefined
        : {
            title: 'Service unavailable',
            message:
              'An error occurred in your request. Please try again or change your query',
          },
    )

  return (
    <div>
      <h2>Playground</h2>
      <div className='flex flex-col gap-3 mb-3'>
        <Switch
          onChange={toggleLoading}
          checked={loading}
          label='Loading'
          size='sm'
        />
        <Switch
          onChange={toggleError}
          checked={!!error}
          label='Error'
          size='sm'
        />
      </div>
      <Table
        loading={loading}
        error={error}
        errorVariant='outlined'
        table={table}
        height='50vh'
        pagination={{
          pageButtonsVariant: 'buttons',
          pageSizes: [5, 25, 50],
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
