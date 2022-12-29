import { MultipleEllipsisFormatter, SelectOptionsType } from '../../types'

export const formatOptionValue = (value: SelectOptionsType | string | null) =>
  value && typeof value === 'object' ? value.value : value

export const getTruncatedMultipleValues = (
  values: SelectOptionsType[],
  limit: number
): MultipleEllipsisFormatter => {
  if (!values) return { value: '', hidden: 0, total: 0 }
  if (values.length <= limit) {
    return {
      value: values.map(formatOptionValue).join(', '),
      hidden: 0,
      total: values.length,
    }
  }
  const sliced = values.slice(0, limit)
  const value: string = values?.slice(0, limit).map(formatOptionValue).join(', ')

  return {
    value,
    hidden: values.length - sliced.length,
    total: values.length,
  }
}
