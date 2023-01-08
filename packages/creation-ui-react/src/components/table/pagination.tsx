import type { Table } from '@tanstack/react-table'
import clsx from 'clsx'
import { Button, Icon, Select } from '../'

interface PaginationBlockProps extends React.ComponentProps<'button'> {
  current?: boolean
  disabled?: boolean
}

const PaginationBlock = ({
  value,
  current,
  disabled,
  ...props
}: PaginationBlockProps) => (
  <button
    className={clsx(
      'table--pagination',
      current && 'table--pagination_current',
      disabled && 'table--pagination_disabled'
    )}
    {...props}
  >
    {value}
  </button>
)

interface PageSelectorButtonsProps {
  texts: {
    next: string
    previous: string
  }
  table: Table<any>
}

const PageSelectorButtons = ({
  texts: { next, previous },
  table,
}: PageSelectorButtonsProps) => (
  <div className='flex gap-2'>
    <Button
      variant='outlined'
      onClick={() => table.previousPage()}
      disabled={!table.getCanPreviousPage()}
    >
      {previous}
    </Button>
    <Button
      variant='outlined'
      onClick={() => table.nextPage()}
      disabled={!table.getCanNextPage()}
    >
      {next}
    </Button>
  </div>
)
PageSelectorButtons.defaultProps = {
  texts: {
    next: 'Next',
    previous: 'Previous',
  },
}

interface PageSelectorProps {
  table: Table<any>
}

const PageSelector = ({ table }: PageSelectorProps) => {
  const currentPageIdx = table.getState().pagination.pageIndex
  const totalPages = table.getPageCount()
  const pagesArray = Array.from({ length: totalPages }, (_, i) => i)

  const goToPage = (idx: number) => table.setPageIndex(idx)

  const withEllipsis = totalPages > 6
  const firstPart = pagesArray.slice(0, 3)
  const lastPart = pagesArray.slice(totalPages - 3, totalPages)
  const showInEllipsis = ![...firstPart, ...lastPart].includes(currentPageIdx)

  return (
    <>
      <Button
        iconLeft={
          <Icon icon='chevron_left' className='h-5 w-5' aria-hidden='true' />
        }
        className='relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50'
        onClick={() => table.previousPage()}
        disabled={!table.getCanPreviousPage()}
      ></Button>

      {!withEllipsis &&
        pagesArray.map(idx => (
          <PaginationBlock
            value={idx + 1}
            current={idx === currentPageIdx}
            onClick={() => goToPage(idx)}
          />
        ))}
      {withEllipsis && (
        <>
          {firstPart.map(idx => (
            <PaginationBlock
              value={idx + 1}
              current={idx === currentPageIdx}
              onClick={() => goToPage(idx)}
            />
          ))}
          <PaginationBlock
            value={showInEllipsis ? currentPageIdx + 1 : '...'}
            disabled
            current={showInEllipsis}
          />
          {lastPart.map(idx => (
            <PaginationBlock
              value={idx + 1}
              current={idx === currentPageIdx}
              onClick={() => goToPage(idx)}
            />
          ))}
        </>
      )}
      <Button
        onClick={() => table.nextPage()}
        disabled={!table.getCanNextPage()}
        className='relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50'
        iconRight={
          <Icon icon='chevron_right' className='h-5 w-5' aria-hidden='true' />
        }
      ></Button>
    </>
  )
}

interface PaginationProps {
  table: Table<any>
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

const Pagination = ({
  table,
  pageSizes,
  totalInSizesSelector,
  showTotalCount,
  texts,
  pageButtonsVariant,
}: PaginationProps) => {
  const currentPageIdx = table.getState().pagination.pageIndex
  const totalPages = table.getPageCount()
  const resultsCount = table.getPrePaginationRowModel().rows.length

  const sizes = pageSizes?.map(size => ({ value: size, id: size }))

  totalInSizesSelector && sizes?.push({ value: resultsCount, id: resultsCount })

  return (
    <>
      <div className='px-4 py-3 flex items-center justify-between sm:px-6'>
        <div className='flex-1 flex justify-between sm:hidden'>
          <a
            href='#'
            className='relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50'
          >
            {texts?.previous}
          </a>
          <a
            href='#'
            className='ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50'
          >
            {texts?.next}
          </a>
        </div>
        <div className='hidden sm:flex-1 sm:flex sm:items-center sm:justify-between'>
          <div>
            <p className='text-sm text-gray-700 dark:text-gray-200'>
              {texts?.summary
                .replace('{currentPage}', (currentPageIdx + 1).toString())
                .replace('{totalPages}', totalPages.toString())}
            </p>
          </div>
          <div className='flex flex-col'>
            {pageSizes && (
              <Select
                size='sm'
                options={sizes}
                value={table.getState().pagination.pageSize}
                onChange={({ value }: any) => table.setPageSize(value)}
              />
            )}
            {showTotalCount && (
              <p className='text-xs text-gray-700'>
                {texts?.total?.replace(
                  '{resultsCount}',
                  resultsCount.toString()
                )}
              </p>
            )}
          </div>
          <div>
            <nav
              className='relative z-0 inline-flex rounded-md shadow-sm -space-x-px'
              aria-label='Pagination'
            >
              {pageButtonsVariant === 'numbers' && (
                <PageSelector table={table} />
              )}
              {pageButtonsVariant === 'buttons' && (
                <PageSelectorButtons table={table} />
              )}
            </nav>
          </div>
        </div>
      </div>
    </>
  )
}

Pagination.defaultProps = {
  texts: {
    total: '{resultsCount} results',
    summary: 'Showing page {currentPage} of {totalPages}',
    previous: 'Previous',
    next: 'Next',
    pageButtonsVariant: 'numbers',
  },
}

export default Pagination
