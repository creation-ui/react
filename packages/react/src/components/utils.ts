import { twMerge } from 'tailwind-merge'

export const getWidthClasses = (classes: string[]) =>
  // pick only tailwind width classes
  classes?.filter(c => /^w-[\w-[\]]+$/.test(c))

/**
 *
 * Curried function to merge base element classes with incoming `props.className`
 * @param classes base element classes
 * @returns `(className?: string | string[]) => string`
 * @example
 * const baseClasses = twix(['text-red-500', 'text-center'])
 * <div className={baseClasses(props.className)} />
 */
export const twix =
  (...classes: string[]) =>
  (className?: string | string[]) =>
    twMerge(classes, className)
