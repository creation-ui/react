export function OptionTable({ options }: { options: [string, string, any] }) {
  return (
    <div className="mt-6 mb-4 overflow-x-auto overscroll-x-contain pb-4">
      <table className="w-full border-collapse text-sm">
        <thead>
          <tr className="border-b py-4 text-left dark:border-zinc-700">
            <th className="py-2 font-semibold">Option</th>
            <th className="py-2 pl-6 font-semibold">Type</th>
            <th className="py-2 px-6 font-semibold">Description</th>
          </tr>
        </thead>
        <tbody className="align-baseline text-gray-900 dark:text-gray-100">
          {options.map(([option, type, description]) => (
            <tr
              key={option}
              className="border-b border-gray-100 dark:border-zinc-700/50"
            >
              <td className="whitespace-pre py-2 font-mono text-xs font-semibold leading-6 text-violet-600 dark:text-violet-500">
                {option}
              </td>
              <td className="whitespace-pre py-2 pl-6 font-mono text-xs font-semibold leading-6 text-zinc-500 dark:text-zinc-400">
                {type}
              </td>
              <td className="py-2 pl-6">{description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
