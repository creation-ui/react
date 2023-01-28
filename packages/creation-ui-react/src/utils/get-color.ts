import type { Colors, TailwindColorSet } from '../types'

type TailwindColorProp =
  | 'bg'
  | 'border'
  | 'divide'
  | 'outline'
  | 'ring'
  | 'ring-offset'
  | 'text'

export const getColor = (
  color: Colors,
  prop: TailwindColorProp,
  variant: keyof TailwindColorSet
) => `${prop}-${color}-${variant}`
