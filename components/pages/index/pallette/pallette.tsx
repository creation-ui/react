import { Header } from '@components/typography'
import { ElementStatus, ELEMENT_STATUS } from '@creation-ui/react/types'
import { useState } from 'react'
import { ColorBox } from './color-box'
import { ColorShades } from './colors-list'
import { twMerge } from 'tailwind-merge'
import { docsMicroInteractions } from '@components/classes'
import Icon from '@components/icon'
import { mdiAnchor, mdiOpenInNew } from '@mdi/js'
import { HeaderSubbed } from '@components/page-elements/header-subbed'

const colors = ELEMENT_STATUS

const example = {
  primary: {
    '50': '#B8DBFF',
    '100': '#A3D0FF',
    '200': '#7ABBFF',
    '300': '#52A7FF',
    '400': '#2992FF',
    '500': '#007DFF',
    '600': '#0061C7',
    '700': '#00468F',
    '800': '#002A57',
    '900': '#000F1F',
  },
}

export const Pallette = () => {
  const [state, setState] = useState<ElementStatus | null>(null)
  return (
    <div className='h-screen w-full'>
      <HeaderSubbed
        href='#advantages'
        title='The colors'
        subtitle='We picked only the best'
        ariaLabel=' The colors'
      />
      <div
        className={twMerge(
          'flex items-center md:flex-row flex-col',
          'flex-wrap md:flex-nowrap gap-2',
          'md:justify-between w-full',
          docsMicroInteractions
        )}
      >
        {colors.map(color => (
          <ColorBox
            color={color as ElementStatus}
            key={color}
            selected={state === color}
            onClick={setState.bind(null, state === color ? null : color)}
          />
        ))}
      </div>

      <div className={'my-16 sm:block hidden'}>
        <div className='capitalize font-bold text-3xl text-center mb-16'>
          {state}
        </div>
        {state && <ColorShades color={state} />}
      </div>

      <div className='text-center flex flex-col items-center'>
        You wanted different? No worries, just
        <a
          href='https://tailwindcss.com/docs/customizing-colors'
          referrerPolicy='no-referrer'
          target={'_blank'}
          className='text-center flex items-center gap-1'
        >
          checkout the docs.
          <Icon path={mdiOpenInNew} />
        </a>
      </div>
    </div>
  )
}
