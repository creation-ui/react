export function getSortedSizes(
  pageSizes: number[] = [],
  totalInSizesSelector: boolean | undefined,
  resultsCount: number
): number[] {
  let sizes = new Set(pageSizes)

  if (totalInSizesSelector) {
    sizes.add(resultsCount)
  }

  return Array.from(sizes).sort((a, b) => a - b)
}
