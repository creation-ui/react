import { FC, useMemo } from 'react'
import { Menu, MenuItem } from '../menu'
import { DropdownMenu } from '../shared/DropdownMenu'
import { MIN_ITEM_PADDING, TREE_OFFSET_MULTIPLIER } from './constants'
import { TreeNodeProps } from './tree-node'
import { TreeProps } from './types'
import { buildTree } from './utils'

const getPadding = (level: number) =>
  level > 0 ? level * TREE_OFFSET_MULTIPLIER : MIN_ITEM_PADDING

const Branch = ({ branch, level = 0 }: TreeNodeProps) => {
  if (!branch.children.length) {
    return (
      <MenuItem
        onClick={() => alert(branch.name + ' clicked')}
        label={branch.name}
        cx={{
          container:
            'truncate max-w-[200px] w-full text-left hover:bg-primary-200/20 rounded-md px-2',
        }}
        style={{ paddingLeft: getPadding(level) }}
      />
    )
  }

  return (
    <Menu
      label={branch.name}
      level={level}
      style={{ paddingLeft: getPadding(level) }}
      cx={{
        container: {
          outer: 'max-w-[200px] w-full text-left',
          inner: 'flex flex-col items-start text-left gap-1',
        },
        trigger: 'w-full hover:bg-primary-200/20 rounded-md px-2',
      }}
    >
      {branch.children.map(option => (
        <Branch branch={option} level={level + 1} key={option.id} />
      ))}
    </Menu>
  )
}

export const Tree: FC<TreeProps> = ({ options = [], label }) => {
  const tree = useMemo(() => buildTree(options), [options])

  return (
    <Menu label={label}>
      <DropdownMenu>
        {tree.map(option => (
          <Branch branch={option} level={0} key={option.id} />
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
