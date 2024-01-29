import { type HTMLInputType, inputIcon } from '@creation-ui/core'
import type { FC } from 'react'
import { Show } from '../show'

interface AdornmentProps {
  adornment?: React.ReactNode
  position?: 'left' | 'right'
  type?: HTMLInputType
}

export const Adornment: FC<AdornmentProps> = ({
  position,
  type,
  adornment,
}) => (
  <Show when={!!adornment}>
    <div
      className={inputIcon({
        // @ts-expect-error
        type,
        position,
      })}
    >
      {adornment}
    </div>
  </Show>
)
