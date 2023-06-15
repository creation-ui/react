import { Playground } from '@components/playground'
import { usePlayground } from '@components/playground/context/context'
import {
  Content,
  Description,
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
} from '@creation-ui/react'
import { microInteractions } from '@creation-ui/react/classes'
import clsx from 'clsx'
import { pick } from 'lodash'
import { DocumentedProperty } from 'models/system'
import { childrenProp, sizeProp } from './shared-props'

export const TypographyExample = () => {
  const playground = usePlayground()
  const state = {
    ...pick(playground.state, ['size']),
    className: microInteractions,
  }

  return (
    <div className={'flex flex-col'}>
      <H1 {...state}>Heading 1</H1>
      <H2 {...state}> Heading 2 </H2>
      <H3 {...state}> Heading 3 </H3>
      <H4 {...state}> Heading 4 </H4>
      <H5 {...state}> Heading 5 </H5>
      <H6 {...state}> Heading 6 </H6>
      <hr />
      <Content {...state}>Content</Content>
      <Description {...state}>Description</Description>
    </div>
  )
}

export const TypographyPlayground = () => {
  return (
    <Playground config={{ name: 'Component', size: true }} showCode={false}>
      <TypographyExample />
    </Playground>
  )
}

export const properties: DocumentedProperty[] = [
  //
  sizeProp,
  childrenProp,
]
