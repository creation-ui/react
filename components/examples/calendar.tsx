import { Playground } from '@components/playground'
import { usePlayground } from '@components/playground/context/context'
import { getState } from '@components/playground/utils/object-to-props-text'
import { Calendar } from '@creation-ui/react'
import { DocumentedProperty } from '@models/system'

const config = {
  size: true,
}

const CalendarExtra = () => {
  const playground = usePlayground()

  const state = getState(playground.state, config)

  return <Calendar {...state} />
}

export const CalendarPlayground = () => {
  return (
    <Playground config={{ name: 'Calendar', ...config }}>
      <CalendarExtra />
    </Playground>
  )
}

export const properties: DocumentedProperty[] = []
