import { FC } from 'react'
import { Menu, MenuItem } from './core'
import { TreeNodeProps } from './tree-node'
import { TreeProps } from './types'
import { buildTree } from './utils'
import { DropdownMenu } from '../shared/DropdownMenu'

// nested branch indent modifier
const TREE_MARGIN_MOD = 10

const Node = ({ branch, level = 0 }: TreeNodeProps) => {
  if (!branch.children.length) {
    return <MenuItem label={branch.name} />
  }

  return (
    <Menu label={branch.name} level={level}>
      {branch.children.map(option => (
        <Node branch={option} level={level + 1} />
      ))}
    </Menu>
  )
}

export const Tree: FC<TreeProps> = ({ options = [], label }) => {
  const tree = buildTree(options)

  return (
    <Menu label={label}>
      <DropdownMenu>
        {tree.map(option => (
          <Node branch={option} level={0} />
        ))}
      </DropdownMenu>
    </Menu>
  )
}
// export const Tree: FC<TreeProps> = ({ options = [] }) => {
//   const tree = buildTree(options)

//   return (
//     <div className='flex flex-col gap-1 bg-background rounded-md px-1 py-3'>
//       {tree.map(option => (
//         <TreeNode branch={option} key={option.id} />
//       ))}
//     </div>
//   )
// }
