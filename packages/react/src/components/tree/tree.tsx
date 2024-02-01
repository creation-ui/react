import { FC } from 'react'
import { TreeProps } from './types'
import { buildTree } from './utilts'
import { TreeNode } from './tree-node'

export const Tree: FC<TreeProps> = ({ options = [] }) => {
  const tree = buildTree(options)

  return (
    <div className='flex flex-col gap-1 bg-background rounded-md px-1 py-3'>
      {tree.map(option => (
        <TreeNode branch={option} key={option.id} />
      ))}
    </div>
  )
}
