import { Branch, Entry, Tree } from './types'

export const buildTree = (entries: Entry[]): Tree => {
  const entryMap = entries.reduce((acc, entry: Branch) => {
    acc[entry.id] = { ...entry, children: [] }
    return acc
  }, {} as Record<string, Branch>)

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
