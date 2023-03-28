import { HeaderSubbed } from '@components/page-elements/header-subbed'
import {
  Button,
  Callout,
  Switch,
  TextArea,
  ToggleGroup,
} from '@creation-ui/react'
import {
  mdiAlert,
  mdiFormatAlignCenter,
  mdiFormatAlignJustify,
  mdiFormatAlignLeft,
  mdiFormatAlignRight,
  mdiInformation,
} from '@mdi/js'
import { Icon } from '@mdi/react'
import { cva } from 'class-variance-authority'
import clsx from 'clsx'
import { useState } from 'react'

const Divider = () => (
  <div className='border max-w-sm mx-auto dark:border-info-800' />
)

type StateType = {
  text: 'left' | 'center' | 'right' | 'justify'
  bold: boolean
  value: string
}

const textClasses = cva(['h-96', 'w-full'], {
  variants: {
    align: {
      left: ['text-left'],
      center: ['text-center'],
      right: ['text-right'],
      justify: ['text-justify'],
    },
    bold: {
      true: ['font-bold'],
      false: ['font-normal'],
    },
  },
})

const getInitialState = (): StateType => ({
  text: 'center',
  bold: false,
  value:
    'TailwindCSS is a popular utility-first CSS framework designed to streamline the process of building modern, responsive web designs.',
})

export const Playground = () => {
  const [state, setState] = useState<StateType>(getInitialState())

  const changeText = (text: StateType['text']) => {
    setState(s => ({ ...s, text }))
  }
  const setBold = (bold: boolean) => {
    setState(s => ({ ...s, bold }))
  }
  const handleTextAreaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setState(s => ({ ...s, value: e.target.value }))
  }
  const handleReset = () => setState(getInitialState())

  const { text, bold, value } = state

  return (
    <div className='h-screen-nextra snap-start'>
      <HeaderSubbed
        href='#playground'
        title='The good stuff'
        subtitle='Just a quick preview'
        ariaLabel='Just a quick preview'
      />
      <Divider />
      <div className='flex justify-evenly flex-wrap py-10 h-[70vh] px-20'>
        <Button>Button</Button>
        <Button status='error'>Button but red</Button>

        <div className='flex flex-col'>
          <Switch />
          <Switch checked />
        </div>

        <div className='w-96 h-96'>
          <div className='flex justify-between w-full place-items-center'>
            <ToggleGroup
              // @ts-ignore
              onChange={changeText}
              defaultValue={'center'}
              options={[
                {
                  value: 'left',
                  label: <Icon path={mdiFormatAlignLeft} size={0.9} />,
                },
                {
                  value: 'center',
                  label: <Icon path={mdiFormatAlignCenter} size={0.9} />,
                },
                {
                  value: 'right',
                  label: <Icon path={mdiFormatAlignRight} size={0.9} />,
                },
                {
                  value: 'justify',
                  label: <Icon path={mdiFormatAlignJustify} size={0.9} />,
                },
              ]}
            />
            <Switch checked={bold} onChange={setBold} />
            <Button onClick={handleReset}>Reset</Button>
          </div>
          <div className={clsx(['mt-5', 'pt-5', 'border-t'])}>
            <TextArea
              label='Text Area'
              helperText='You can edit this text'
              value={value}
              size='lg'
              onChange={handleTextAreaChange}
              className={textClasses({ align: text, bold })}
            />
          </div>
        </div>

        <Callout
          content={state.value}
          status='primary'
          icon={<Icon path={mdiInformation} size={0.9} />}
        />
        {/* @ts-ignore */}
      </div>
      <Divider />
    </div>
  )
}
