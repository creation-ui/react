import { Description, Header } from '@components/typography'
import { DocumentedProperty } from 'models/system'

const TableHeader = () => (
  <tr className='w-1/4 dark:text-white'>
    <td className='w-1/6 whitespace-nowrap py-2 pl-4 text-sm font-medium sm:pl-0'>
      Prop
    </td>
    <td className='w-1/6 whitespace-nowrap py-2 text-sm font-medium'>
      Default
    </td>
    <td className='w-2/3 whitespace-nowrap py-2 text-sm font-medium'>
      Description
    </td>
  </tr>
)

interface TableRowProps {
  property: DocumentedProperty
  key?: string | number
}

const TableRow = ({
  property: { name, type, defaultValue, description, note, experimental },
}: TableRowProps) => (
  <tr className=''>
    <td className='prose dark:prose-invert prose-sm py-3 pl-4 align-baseline sm:pl-0 '>
      <code>{name}</code>
    </td>
    <td className='prose dark:prose-invert prose-sm py-3 align-baseline'>
      <span className=''>
        {defaultValue ? (
          <code>{defaultValue}</code>
        ) : (
          <span className='text-gray-400'>—</span>
        )}
      </span>
    </td>
    <td className='py-3 align-baseline'>
      <div className='prose dark:prose-invert prose-sm my-0 space-x-5 whitespace-nowrap'>
        <span>
          <code>{type}</code>
        </span>
      </div>
      <div className='prose dark:prose-invert prose-sm prose-docs-table'>
        <p>{description}</p>
        {note && (
          <p>
            <em>{note}</em>
          </p>
        )}
        {experimental && (
          <p className='text-red-500'>
            <em>This feature is experimental and might not work correctly.</em>
          </p>
        )}
      </div>
    </td>
  </tr>
)

interface PropsTableProps {
  properties?: DocumentedProperty[]
  name: string
  description: string
}

const PropsTable = ({ properties, name, description }: PropsTableProps) => {
  return (
    <>
      <Description>
        <Header aria-label={name} as={'h3'} href='#listbox'>
          {name}
        </Header>
        <p>{description}</p>
      </Description>

      <div className='mt-6 mb-12'>
        <div className='-mx-4 overflow-x-auto sm:mx-0'>
          <div className='inline-block min-w-full'>
            <table className='w- w-full min-w-[540px] border-b border-gray-700 text-left sm:min-w-full'>
              <tbody className='divide-y divide-gray-700'>
                <TableHeader />
                <>
                  {properties?.map?.(prop => (
                    <TableRow property={prop} key={prop.name?.toString()} />
                  ))}
                </>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  )
}

export default PropsTable
