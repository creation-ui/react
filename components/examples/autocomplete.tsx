import { Playground } from '@components/playground'
import { usePlayground } from '@components/playground/context'
import {
  Autocomplete,
  Avatar,
  DropdownProps,
  ELEMENT_SIZES,
  Option,
  SelectedOption,
} from '@creation-ui/react'
import { DocumentedProperty } from 'models/system'
import React, { useState } from 'react'
import { ListOrTypes } from 'utils/list-or-types'
import { options } from './data'
import { pick } from 'lodash'

type OptionType = (typeof options)[0]

const users = [
  {
    birth: '31.5 BBY , Kamino',
    description:
      "Boba Fett was a Mandalorian warrior and bounty hunter. He was the only unaltered clone of the famed Jango Fett, created in 32 BBY as unit A0050, one of the first of many Fett replicas designed to become part of the Grand Army of the Republic, and was raised as Jango's son. Jango taught Boba much, training him to become a skilled bounty hunter as was his father-figure before him. In 22 BBY, Jango was killed at the Battle of Geonosis, which opened the Clone Wars.",
    gender: 'Male',
    height: '1.83 meters',
    image:
      'http://img2.wikia.nocookie.net/__cb20130920001614/starwars/images/5/58/BobaFettMain2.jpg',
    name: 'Boba Fett',
    id: 'Boba Fett',
    planet: 'Kamino',
    species: 'Human',
  },
  {
    birth: '200 BBY, Kashyyyk',
    description:
      'Chewbacca (or "Chewie", as he was known by his friends) was a legendary Wookiee from Kashyyyk and co-pilot of Han Solo\'s ship, the Millennium Falcon. He was the son of Attichitcuk, the husband of Mallatobuck, and the father of Lumpawaroo. Chewbacca carried with him the name of an ancient Wookiee hero, the great Bacca, first of the great chieftains of Kashyyyk, and the creator of a sword that denoted leadership among the Wookiees. This name placed Chewbacca in a noble lineage.',
    gender: 'Male',
    height: '2.28 meters',
    image:
      'http://img4.wikia.nocookie.net/__cb20080815045819/starwars/images/thumb/7/73/Chewbaccaheadshot.jpg/500px-Chewbaccaheadshot.jpg',
    name: 'Chewbacca',
    id: 'Chewbacca',
    planet: 'Kashyyyk',
    species: 'Wookiee',
  },
  {
    birth: '600 BBY, Nal Hutta',
    description:
      'Jabba Desilijic Tiure, better known as Jabba the Hutt and often called the "Bloated One," though never to his face, was one of the most notorious Hutt crime lords in the galaxy, who governed a large criminal empire located in the Outer Rim Territories from his desert palace on Tatooine. At the height of his power, Jabba was one of the most powerful crime lords in the galaxy, even having contact with Prince Xizor, the head of the Black Sun Syndicate.',
    gender: 'Hermaphrodite',
    height: '3.9 meters long\n1.75 meters tall',
    image:
      'http://img1.wikia.nocookie.net/__cb20080409144511/starwars/images/e/e5/Jabba_Boonta_Eve.jpg',
    name: 'Jabba the Hutt',
    id: 'Jabba the Hutt',
    planet: 'Nal Hutta',
    species: 'Hutt',
  },
]

const CustomOption = ({ option, ...props }: any) => {
  return (
    <Option {...props} {...option} className='!h-fit py-2'>
      <div className='flex gap-2 items-center'>
        <Avatar size='sm' src={option.image} />
        <div className='flex flex-col'>
          <span className='font-medium'>{option.name}</span>
          <span className='text-info-500 text-xs'>{option.species}</span>
        </div>
      </div>
    </Option>
  )
}
const CustomSelectedOption = ({ option, ...props }: any) => {
  return (
    <SelectedOption {...props} {...option} className='!h-fit py-2'>
      <div className='flex gap-2 items-center'>
        <Avatar size='sm' src={option.image} />
        <div className='flex flex-col'>
          <span className='font-medium'>{option.name}</span>
          <span className='text-info-500 text-xs'>
            {option.species} {option.height}
          </span>
        </div>
      </div>
    </SelectedOption>
  )
}

type User = (typeof users)[0]

export const AutocompleteExampleCustomOptions = ({
  ...props
}: DropdownProps) => {
  const [value, setValue] = useState<User>(users[0])

  const playground = usePlayground()

  const state = pick(playground.state, [
    'size',
    'error',
    'loading',
    'disabled',
    'readOnly',
    'clearable',
  ])

  const filterOptions = (query: string) => (option: User) =>
    option.name
      ?.toLowerCase()
      ?.replace(/\s+/g, '')
      ?.includes(query?.toLowerCase()?.replace(/\s+/g, ''))

  return (
    <Autocomplete
      optionComponent={CustomOption}
      selectedOptionComponent={CustomSelectedOption}
      options={users}
      value={value}
      multiple={false}
      onChange={setValue}
      filterOptions={filterOptions}
      searchKey='name'
      clearable
      {...state}
      {...props}
    />
  )
}
export const AutocompleteExample = ({ ...props }: DropdownProps) => {
  const [value, setValue] = useState<OptionType[]>([options[0]])

  const playground = usePlayground()

  const state = pick(playground.state, [
    'size',
    'error',
    'loading',
    'disabled',
    'readOnly',
    'clearable',
  ])

  return (
    <Autocomplete
      options={options}
      value={value}
      onChange={setValue}
      {...state}
      {...props}
    />
  )
}

export const AutocompleteMultipleExample = ({
  label = 'Autocomplete multiple',
  ...props
}: DropdownProps) => {
  const [value, setValue] = useState<OptionType[]>([options[0], options[3]])

  const handleChange = (value: OptionType[]) => {
    setValue(value ? value : [])
  }

  const playground = usePlayground()

  const state = pick(playground.state, [
    'size',
    'error',
    'loading',
    'disabled',
    'readOnly',
    'clearable',
  ])

  return (
    <Autocomplete
      options={options}
      label={label}
      value={value}
      multiple
      onChange={handleChange}
      {...state}
      {...props}
    />
  )
}

export const AutocompletePlayground = () => {
  return (
    <Playground
      config={{
        name: 'Autocomplete',
        size: true,
        error: true,
        loading: true,
        disabled: true,
        readOnly: true,
        clearable: true,
      }}
    >
      <AutocompleteExample />
    </Playground>
  )
}
export const AutocompleteMultiPlayground = () => {
  return (
    <Playground
      config={{
        name: 'Autocomplete',
        size: true,
        error: true,
        loading: true,
        disabled: true,
        readOnly: true,
        clearable: true,
      }}
    >
      <AutocompleteMultipleExample />
    </Playground>
  )
}

const multipleWarning = (
  <>
    If multiple is set, the type of <code>value</code> will be <code>T[]</code>
  </>
)

export const properties: DocumentedProperty[] = [
  { description: 'Element id', name: 'id', type: 'string' },
  {
    description: 'Label',
    name: 'label',
    type: 'React.ReactNode',
  },
  {
    name: 'size',
    type: ListOrTypes([...ELEMENT_SIZES]),
    defaultValue: 'md',
    description: 'Size of element',
  },
  {
    description: 'Placeholder',
    name: 'placeholder',
    type: 'string | string[]',
  },
  {
    description: 'Class names to add to wrapper component',
    name: 'className',
    type: 'string | string[]',
  },
  {
    description: 'List available options',
    name: 'options',
    type: 'AutocompleteOptionsType[]',
    defaultValue: '[]',
  },
  {
    description: 'Functional component returning ReactNode to display option',
    name: 'optionComponent',
    type: '((option: any) => React.ReactNode) | ((props: AutocompleteOptionProps) => JSX.Element)',
  },
  {
    description: 'Default value to display when component is not controlled',
    name: 'defaultValue',
    type: 'AutocompleteOptionsType',
  },
  {
    description: 'Current value of component',
    name: 'value',
    type: 'AutocompleteOptionsType',
    note: multipleWarning,
  },
  {
    name: 'onChange',
    type: '(value: AutocompleteOptionsType | AutocompleteOptionsType[]) => void',
    description: 'Change event callback',
    note: multipleWarning,
  },
  {
    description: 'Disabled',
    name: 'disabled',
    type: 'boolean',
    defaultValue: 'false',
  },
  {
    description: 'Allow Autocompleteion of multiple values',
    name: 'multiple',
    type: 'boolean',
    defaultValue: 'false',
  },
  {
    name: 'highlightSearch',
    type: 'boolean',
    defaultValue: 'false',
    description: 'Highlight search in options',
    experimental: true,
  },
  {
    description: 'Error text displayed under the component.',
    name: 'error',
    type: 'string',
    note: 'When set, the component is styled as having errors.',
  },
]

export const AutocompleteOptionComponent: DocumentedProperty[] = [
  {
    description: 'Option value',
    name: 'option',
    type: 'AutocompleteOptionsType',
  },
  {
    description: 'Is option Autocompleteed?',
    name: 'Autocompleteed',
    type: 'boolean',
  },
  {
    description: 'Is option active?',
    name: 'active',
    type: 'boolean',
  },
  {
    description: 'Is option disabled?',
    name: 'disabled',
    type: 'boolean',
  },
  {
    description: (
      <>
        <code>multiple</code> prop passed from parent. Using this flag we may
        style component in the <code>multiple</code> mode with e.g. checkmark
      </>
    ),
    name: 'multiple',
    type: 'boolean',
  },
]

export const AutocompleteOptionType: DocumentedProperty[] = [
  { name: 'value', type: 'React.ReactNode', description: 'Value' },
  {
    name: 'id',
    type: 'React.ReactNode',
    description: 'ID of element used as `key`',
  },
  {
    name: 'disabled',
    type: 'boolean',
    description: 'Is option available to Autocomplete',
  },
]
