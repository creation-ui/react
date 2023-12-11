import { Playground } from '@components/playground'
import { Autocomplete, Avatar } from '@creation-ui/react'
import { AutocompleteOptionProps } from '@creation-ui/react/components/autocomplete/types'
import clsx from 'clsx'
import { DocumentedProperty } from 'models/system'
import { ChangeEvent, useState } from 'react'
import { options } from './data'
import { createInputControls } from './shared-playground-controls'
import { onChangeProp, valueProp } from './shared-props'
import { createDocsLink } from './utils'
import { set } from 'cypress/types/lodash'
import { Container } from '@components/container'

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

const renderOption = (props: AutocompleteOptionProps, option: Character) => (
  // @ts-expect-error
  <div {...props} className={clsx(props.className, 'h-fit w-fit p-2')}>
    <div className='flex gap-2 items-center'>
      <Avatar size='sm' src={option.image} />
      <div className='flex flex-col'>
        <span className='font-medium'>{option.name}</span>
        <span className='text-info-500 text-xs'>{option.species}</span>
      </div>
    </div>
  </div>
)

const renderSelection = (option: Character) => (
  <div className='h-fit w-fit p-2 mr-2'>
    <div className='flex gap-2 items-center'>
      <Avatar size='sm' src={option.image} />
      <div className='flex flex-col'>
        <span className='font-medium'>{option.name}</span>
        <span className='text-info-500 text-xs'>{option.species}</span>
      </div>
    </div>
  </div>
)

type Character = {
  birth: string
  description: string
  gender: string
  height: string
  image: string
  name: string
  id: string
  planet: string
  species: string
}

const autocompleteControls = createInputControls('Autocomplete')
const autocompleteControlsMultiple = createInputControls(
  'Autocomplete - multiple',
)

export const AutocompleteExampleCustomOptions = () => {
  const [value, setValue] = useState<Character | undefined | null>(users[0])

  const onChange = (value: Character | Character[] | null) => {
    // @ts-expect-error
    setValue(value)
  }

  return (
    <Autocomplete<Character>
      renderOption={renderOption}
      renderSelection={renderSelection}
      label={'Autocomplete - custom'}
      clearable
      value={value}
      options={users}
      onChange={onChange}
      isOptionEqualToValue={(a, b) => a?.id === b?.id}
      getOptionLabel={({ name }: Character) => name}
    />
  )
}

export const AutocompleteExternalSearchValueExample = () => {
  const [value, setValue] = useState<OptionType>(options[0])
  const [query, setQuery] = useState('')

  const onChange = (value: OptionType | OptionType[] | null) => {
    // @ts-expect-error
    setValue(value)
  }
  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value)
  }

  return (
    <Container variant='column'>
      <Autocomplete<OptionType>
        label={'Autocomplete - custom'}
        clearable
        value={value}
        options={options}
        onChange={onChange}
        onInputChange={onInputChange}
        getOptionLabel={(option: OptionType) => option?.label}
      />
      <div className='w-64 border border-info-300 rounded-md p-5 mt-3'>
        <span className='uppercase text-sm'>Search query</span>
        <pre className='whitespace-pre-wrap'>{query}</pre>
      </div>
    </Container>
  )
}

export const AutocompletePlayground = () => {
  const [value, setValue] = useState<OptionType>(options[0])

  return (
    <Playground
      name='Autocomplete'
      component={Autocomplete}
      componentProps={{
        label: 'Autocomplete',
        value,
        options,
        onChange: setValue,
        getOptionLabel: (option: OptionType) => option?.label,
      }}
      controls={autocompleteControls}
    />
  )
}
export const AutocompleteMultiPlayground = () => {
  const [value, setValue] = useState<OptionType[] | null>([
    options[0],
    options[3],
  ])

  const handleChange = (value: OptionType[] | null) => setValue(value)

  return (
    <Playground
      name='Autocomplete'
      component={Autocomplete}
      componentProps={{
        multiple: true,
        label: 'Autocomplete - multiple',
        value,
        options,
        onChange: handleChange,
      }}
      controls={autocompleteControlsMultiple}
    />
  )
}

const multipleWarning = `If multiple is set, the type of <code>value</code> will be <code>T[]</code>`

export const properties: DocumentedProperty[] = [
  {
    description: 'List available options',
    name: 'options',
    type: 'T[]',
    defaultValue: '{ label:string, disabled?: boolean }[]',
  },
  {
    ...valueProp,
    type: 'T',
    note: multipleWarning,
  },
  {
    ...onChangeProp,
    type: '(value: T | T[] | null) => void',
    note: multipleWarning,
  },
  {
    description: 'Allow multiple values',
    name: 'multiple',
    type: 'boolean',
    defaultValue: 'false',
  },
  {
    name: 'autoHighlight',
    type: 'boolean',
    defaultValue: 'false',
    description:
      'Highlight search text fragment in options. Works only with default getOptionLabel',
  },
  {
    name: 'renderOption',
    type: '(props: AutocompleteOptionProps, option: T) => ReactNode',
    defaultValue: '_renderOption',
    description: `Function rendering option in dropdown.
      ${createDocsLink({
        label: 'Docs',
        component: 'render-option',
        parent: 'autocomplete',
      })}
      `,
  },
  {
    name: 'renderSelection',
    type: '(option: T) => ReactNode',
    defaultValue: '_renderSelection',
    description: `Function rendering single selection. ${createDocsLink({
      label: 'Docs',
      component: 'render-selection',
      parent: 'autocomplete',
    })}
      `,
  },
  {
    name: 'renderTags',
    type: '(selected: T[]) => ReactNode',
    defaultValue: '_renderTags',
    description: `Function rendering option in dropdown. ${createDocsLink({
      label: 'Docs',
      component: 'render-tags',
      parent: 'autocomplete',
    })}`,
  },
  {
    name: 'getLimitTagsText',
    type: '(more: number) => string',
    defaultValue: 'more => `+${more}`',
    description:
      'Text to display when the tags are truncated. Also see <code>limit</code> prop',
  },
  {
    name: 'limit',
    type: 'number',
    defaultValue: '3',
    description: 'Limit of multiple selected to be displayed in input',
  },
  {
    name: 'defaultTagProps: ChipProps',
    type: 'ChipProps',
    description: `Props of the default tags component (Chip).
      ${createDocsLink({
        label: 'Chip component docs.',
        component: 'chip',
      })}
      `,
  },
  {
    name: 'isOptionEqualToValue',
    type: '(option: T, value?: T | null) => boolean',
    defaultValue: '_isOptionEqualToValue',
    description: `Function to compare option and value.`,
  },
  {
    name: 'getOptionDisabled',
    type: ' (option: T) => boolean',
    defaultValue: 'option => option.disabled',
    description: 'Getter for option disabled state.',
  },
  {
    name: 'getOptionLabel',
    type: ' (option: T) => string',
    defaultValue: 'option => option.label ?? option',
    description: 'Getter for option label.',
  },
  {
    name: 'filterOptions',
    type: `(
      options: T[],
      filterOptions: AutocompleteFilterOptions
    ) => T[]`,
    defaultValue: '_filterOptions',
    description: `Filter options function. ${createDocsLink({
      label: 'Docs',
      component: 'filter-options',
      parent: 'autocomplete',
    })}`,
  },
  {
    name: 'textEmpty',
    type: 'string',
    defaultValue: 'No options',
    description: 'Text to display for empty list.',
  },
  {
    name: 'textNotFound',
    type: 'string',
    defaultValue: 'No results found',
    description: 'Text to display when no options match search.',
  },
  {
    name: 'textLoading',
    type: 'string',
    defaultValue: 'Loading...',
    description:
      'Text to display for loading state input. Replaces <code>placeholder</code> for the duration of loading.',
  },
  {
    name: 'textClear',
    type: 'string',
    defaultValue: 'Clear',
    description: 'Text to display as HTML "title" of clear button.',
  },
  {
    name: 'maxHeight',
    type: 'number | string | "available"',
    defaultValue: '500',
    description: `How heigh should dropdown list be? Either provide a number of pixels or a string like <code>1rem</code>, <code>20vh</code>, etc. The <code>available</code> option will set the max height of the dropdown to the available height of the screen.
    `,
  },
  {
    name: 'zIndex',
    type: '{ list?: number}',
    description:
      'Escape hatch for z-index of dropdown list. Helpful when using with modals and drawers that might have their own, higher z-index.',
  },
  {
    name: 'filterSelectedOptions',
    type: 'boolean',
    defaultValue: 'false',
    description: 'Should filter out selected options from options list',
  },
]

export const filterOptionProps: DocumentedProperty[] = [
  {
    name: 'ignoreCase',
    type: 'boolean',
    defaultValue: 'true',
    description: 'Should ignore case when filtering',
  },
  {
    name: 'ignoreAccents',
    type: 'boolean',
    defaultValue: 'true',
    description: 'Should ignore accents when filtering',
  },
  {
    name: 'trim',
    type: 'boolean',
    defaultValue: 'false',
    description: 'Should trim search text',
  },
  {
    name: 'limit',
    type: 'number',
    description: 'Limit of options to return',
  },
  {
    name: 'matchFrom',
    type: "'start' | 'any' | 'end'",
    defaultValue: 'any',
    description: 'Where to match search text',
  },
  {
    name: 'stringify',
    type: '(option: T) => string',
    defaultValue: 'getOptionLabel',
    description: `Function to convert option to string.${createDocsLink({
      label: '<code>getOptionLabel</code> docs.',
      component: 'autocomplete#getOptionLabel',
    })}`,
  },
]
