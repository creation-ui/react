import { Container } from './container'

interface UnfoldVariantsProps {
  variants: string[]
  component: any
  prop: string
  nameProp?: string
  componentProps?: any
}

export const UnfoldVariants = ({
  variants,
  component: Component,
  prop,
  componentProps,
  nameProp,
}: UnfoldVariantsProps) => {
  return (
    <Container>
      {variants.map((variant: string) => (
        <Component
          {...componentProps}
          key={variant}
          {...{
            [prop]: variant,
            ...(nameProp && { [nameProp]: variant }),
          }}
        />
      ))}
    </Container>
  )
}