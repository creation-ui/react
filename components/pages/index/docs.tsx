import { gradient } from '@components/classes'
import { HeaderSubbed } from '@components/page-elements/header-subbed'
import { Button } from '@creation-ui/react'
import clsx from 'clsx'
import Link from 'next/link'

export const Docs = () => {
  return (
    <div className='max-h-screen w-full flex flex-col items-center pb-60'>
      <HeaderSubbed
        href='#docs'
        title='The docs'
        ariaLabel='The docs'
        subtitle='Here be dragons'
      />

      <div className='sm:p-0 px-5 max-w-prose sm:max-w-md prose text-base leading-relaxed mb-20 dark:text-white'>
        <p>
          Unleash your creativity and bring your vision to life with this
          powerful tool. The possibilities are endless, allowing you to
          transform ideas into reality.
        </p>
        <p>
          Whether you're a seasoned developer or a newcomer to the field, our
          components are designed to help you create innovative solutions with
          ease. It is time to take the first step and embark on a journey and
          tell your own story.
        </p>

        <p>Your adventure awaits.</p>
      </div>

      <Button
        size='lg'
        className={clsx(gradient.bg, 'text-2xl hover:scale-110')}
        status='info'
      >
        <Link href='/docs'>Ready? See the docs &rarr;</Link>
      </Button>
    </div>
  )
}
