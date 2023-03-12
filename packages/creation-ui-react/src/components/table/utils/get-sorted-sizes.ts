export function getSortedSizes(
  pageSizes: number[] | undefined,
  totalInSizesSelector: boolean | undefined,
  resultsCount: number
) {
  const sizes = pageSizes?.map(size => ({ value: size, id: size }))

  totalInSizesSelector && sizes?.push({ value: resultsCount, id: resultsCount })

  return sizes?.sort((a, b) => a.value - b.value)
}
