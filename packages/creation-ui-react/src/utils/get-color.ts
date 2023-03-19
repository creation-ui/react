import type { ElementStatus, TailwindColorSet } from '../types'

type TailwindColorProp =
  | 'bg'
  | 'border'
  | 'divide'
  | 'outline'
  | 'ring'
  | 'ring-offset'
  | 'text'

export const getColor = (
  status: ElementStatus,
  prop: TailwindColorProp,
  tone: keyof TailwindColorSet
) => `${prop}-${status}-${tone}`
