import { FC, useMemo } from 'react'
import { twMerge } from 'tailwind-merge'
import { ClearButton } from '../clear-button'
import { Flex } from '../flex'
import { For } from '../for'
import { Menu } from '../menu'
import { DropdownMenu } from '../shared/DropdownMenu'
import { Show, ShowFirstMatching } from '../show'
import { Branch } from './branch'
import { BranchType, TreeProps } from './types'
import { Loader } from '../loader'
import { useTheme } from '../../theme'

export const Tree: FC<TreeProps> = ({
  tree = [],
  placeholder = 'Select...',
  cx,
  onBranchClick,
  onLeafClick,
  onClear,
  getItemLabel,
  getItemOffset,
  value,
  disabled,
  readOnly,
  loading,
  ...rest
}) => {
  const { size: defaultSize } = useTheme()
  const { size = defaultSize } = rest

  const hasClearButton = useMemo(
    () => !!onClear && !!value && !disabled && !readOnly && !loading,
    [onClear, value, disabled, readOnly, loading]
  )

  const hasDropdown = useMemo(
    () => !disabled && !readOnly,
    [disabled, readOnly]
  )

  return (
    <Menu
      size={size}
      className={twMerge(cx?.container?.outer)}
      renderInput={(props: any) => (
        <Flex
          items='center'
          gap={1}
          className={twMerge('cursor-pointer', cx?.container?.inner)}
        >
          <div className='truncate flex-grow'>
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
          <Loader active={!!loading} size={size} />
          <Show when={hasClearButton}>
            &nbsp;
            <ClearButton onClick={onClear} size={size} />
          </Show>
          <Show when={hasDropdown}>{props.chevron}</Show>
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
