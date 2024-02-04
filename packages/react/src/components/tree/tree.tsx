import { FC } from 'react'
import { twMerge } from 'tailwind-merge'
import { ClearButton } from '../clear-button'
import { Flex } from '../flex'
import { For } from '../for'
import { Menu } from '../menu'
import { DropdownMenu } from '../shared/DropdownMenu'
import { Show, ShowFirstMatching } from '../show'
import { Branch } from './branch'
import { BranchType, TreeProps } from './types'

export const Tree: FC<TreeProps> = ({
  tree,
  placeholder = 'Select...',
  cx,
  onBranchClick,
  onLeafClick,
  onClear,
  getItemLabel,
  getItemOffset,
  value,
}) => {
  return (
    <Menu
      className={twMerge(cx?.container?.outer)}
      renderInput={(props: any) => (
        <Flex
          items='center'
          gap={1}
          className={twMerge('cursor-pointer', cx?.container?.inner)}
        >
          <div className='truncate'>
            <ShowFirstMatching>
              <Show when={!value}>
                <span
                  className={twMerge(
                    'text-info-500',
                    'flex-shrink',
                    cx?.placeholder
                  )}
                >
                  {placeholder}
                </span>
              </Show>
              <Show when={!!value}>
                <span className={twMerge(cx?.value, 'flex-shrink')}>
                  {value?.name}
                </span>
              </Show>
            </ShowFirstMatching>
          </div>
          <Show when={!!value && !!onClear}>
            &nbsp;
            <ClearButton onClick={onClear} />
          </Show>
          {props.chevron}
        </Flex>
      )}
    >
      <DropdownMenu>
        <For<BranchType> each={tree}>
          {option => (
            <Branch
              branch={option}
              level={0}
              key={option.id}
              onBranchClick={onBranchClick}
              onLeafClick={onLeafClick}
              getItemLabel={getItemLabel}
              getItemOffset={getItemOffset}
            />
          )}
        </For>
      </DropdownMenu>
    </Menu>
  )
}
