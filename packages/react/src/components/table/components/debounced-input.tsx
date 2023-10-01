import React from 'react'
import { Input } from '../../input'

function DebouncedInput({
  value: initialValue,
  onChange,
  debounce = 500,
  size,
  ...props
}: {
  value: string | number
  onChange: (value: string | number) => void
  debounce?: number
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'>) {
  const [value, setValue] = React.useState(initialValue)

  React.useEffect(() => {
    setValue(initialValue)
  }, [initialValue])

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      onChange(value)
    }, debounce)

    return () => clearTimeout(timeout)
  }, [value])

  const handleChange = e => setValue(e.target.value)

  return (
    <Input
      //
      {...props}
      size='sm'
      value={value}
      onChange={handleChange}
    />
  )
}

export default DebouncedInput
