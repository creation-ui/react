import { Autocomplete } from '@creation-ui/react/components'
import { buildTree } from '@creation-ui/react/components/tree/utils'
import categories from '../tree-data.json'
import { useState } from 'react'

type Category = {
  //
  id: number
  name: 'Casual Apparel'
  parent_id?: number | null
  children?: Category[]
}

type SelectorType = Category | Category[] | undefined | null

export const AutocompleteTreeExample = () => {
  const tree = buildTree(categories)
  const [value, setValue] = useState<SelectorType>(null)

  const onChange = (value: SelectorType) => {
    if (Array.isArray(value)) {
      setValue(v =>
        // @ts-expect-error
        [...(v ?? []), ...value],
      )
      return
    }
    setValue(value)
  }

  return (
    <Autocomplete
      //
      label={'Tree select'}
      clearable
      isOptionEqualToValue={(a, b) => a?.id === b?.id}
      getOptionLabel={({ name }: Category) => name}
      tree
      onChange={onChange}
      value={value}
      options={tree}
    />
  )
}
