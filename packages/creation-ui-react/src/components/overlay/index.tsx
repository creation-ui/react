import { useTheme } from '../../theme'
import clsx from 'clsx'
import { OverlayProps } from './overlay.types'

const classes = [
  'absolute',
  'top-0',
  'bottom-0',
  'left-0',
  'right-0',
  'h-full',
  'w-full',
  'bg-zinc-700/50',
  'transition',
  'duration-200',
  'ease-in',
  'flex',
  'justify-center',
  'place-items-center',
  'select-none',
  'overflow-clip',
]

export const Overlay = ({ active, onClick, className }: OverlayProps) => {
  const { zIndex } = useTheme()
  return active ? (
    <div>
      <div
        className={clsx(classes, zIndex.overlays, className)}
        onClick={onClick}
      >
        &nbsp;
      </div>
    </div>
  ) : null
}
