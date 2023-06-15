import clsx from 'clsx'
import { classes } from './classes'
import { usePlayground } from './context/context'
import { PlaygroundControl } from './playground-control'

export const PlaygroundControls = () => {
  const { properties } = usePlayground()

  return (
    <div className={clsx(classes.controls)}>
      {properties?.map((property, index) => (
        <div key={index}>
          <PlaygroundControl property={property} />
        </div>
      ))}
    </div>
  )
}
