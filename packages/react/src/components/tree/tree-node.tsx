import { useState, type FC } from 'react'
import { DropdownChevron } from '../dropdown-chevron'
import { Flex } from '../flex'
import { Show } from '../show'
import type { BranchType } from './types'

export interface TreeNodeProps {
  branch: BranchType
  level?: number
}

export const TreeNode: FC<TreeNodeProps> = ({ branch, level = 0 }) => {
  const [open, setOpen] = useState(false)
  const toggle = () => setOpen(o => !o)

  const hasChildren = Boolean(branch.children?.length)
  return (
    <Flex column gap={1}>
      <Flex
        className='w-full cursor-pointer'
        items={'center'}
        onClick={hasChildren ? toggle : undefined}
      >
        <Show when={hasChildren}>
          <DropdownChevron open={open} disabled={!hasChildren} />
        </Show>
        {branch.name}
      </Flex>
      <Show when={hasChildren && open}>
        {branch.children?.map(child => (
          <TreeNode branch={child} key={child.id} level={level + 1} />
        ))}
      </Show>
    </Flex>
  )
}
