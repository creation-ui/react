import { DropdownOption } from '../../../types'

export function getSortedSizes(
  pageSizes: number[] = [],
  totalInSizesSelector: boolean | undefined,
  resultsCount: number
): DropdownOption[] {
  const sizes = pageSizes
    ?.map(size => ({
      label: size.toString(),
      id: size.toString(),
    }))
    .sort()

  totalInSizesSelector &&
    sizes?.push({ label: resultsCount.toString(), id: resultsCount.toString() })

  return sizes
}
