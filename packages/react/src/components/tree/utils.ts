import { BranchType, RawElement, TreeType } from './types'

export const buildTree = (entries: RawElement[]): TreeType => {
  const entryMap = entries.reduce((acc, entry: BranchType) => {
    acc[entry.id] = { ...entry, children: [] }
    return acc
  }, {} as Record<string, BranchType>)

  entries.forEach(entry => {
    if (entry.parent_id) {
      const parentBranch = entryMap[entry.parent_id]
      if (parentBranch) {
        parentBranch.children.push(entryMap[entry.id])
      }
    }
  })

  return Object.values(entryMap).filter(branch => !branch.parent_id)
}
