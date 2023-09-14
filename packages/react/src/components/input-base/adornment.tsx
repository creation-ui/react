import { FC } from 'react'
import { HTMLInputType } from '../../types'
import { inputIcon } from '../../classes'

interface AdornmentProps {
  adornment?: React.ReactNode
  position?: 'left' | 'right'
  type?: HTMLInputType
}

export const Adornment: FC<AdornmentProps> = ({ position, type, adornment }) =>
  adornment ? (
    <div
      // @ts-expect-error
      className={inputIcon({ position, type })}
    >
      {adornment}
    </div>
  ) : null
