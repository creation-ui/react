import { AdvantageList } from '@components/page-elements/advantage/advatanges-lits'
import { HeaderSubbed } from '@components/page-elements/header-subbed'

export const Advantages = () => {
  return (
    <div className='h-screen w-full'>
      <HeaderSubbed
        href='#advantages'
        title='The why'
        ariaLabel='The why'
        subtitle='Reasons you are here'
      />
      <AdvantageList />
    </div>
  )
}
