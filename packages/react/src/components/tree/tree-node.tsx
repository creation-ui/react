import { useState, type FC } from 'react'
import { DropdownChevron } from '../dropdown-chevron'
import { Show } from '../show'
import { indentationClasses, type IndentationLevel } from './classes'
import type { Branch } from './types'
import { Flex } from '../flex'

export interface TreeNodeProps {
  branch: Branch
  level?: IndentationLevel
}

export const TreeNode: FC<TreeNodeProps> = ({ branch, level = 0 }) => {
  const [open, setOpen] = useState(false)
  const toggle = () => setOpen(o => !o)

  const hasChildren = Boolean(branch.children?.length)
  return (
    <Flex column gap={1} className={indentationClasses({ level })}>
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
          <TreeNode
            branch={child}
            key={child.id}
            level={(level + 1) as IndentationLevel}
          />
        ))}
      </Show>
    </Flex>
  )
}
