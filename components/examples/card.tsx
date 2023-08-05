import { Button, Card } from '@creation-ui/react'
import { DocumentedProperty } from 'models/system'
import { childrenProp, classNameProps } from './shared-props'

export const CardExample = () => (
  <div className='mx-auto w-fit'>
    <Card className='items-center !w-80'>
      <div className='-mx-4 -mt-4'>
        <img
          src='/bottle.jpeg'
          alt='Water bottle'
          className='rounded w-80 h-96 object-bottom object-cover'
        />
      </div>
      <Card.Header>Water bottle</Card.Header>
      <Card.Body>
        <p>
          This high-quality water bottle is made of durable material and
          designed for easy carrying. Perfect for outdoor activities or daily
          use. Stay hydrated on the go!
        </p>
      </Card.Body>
      <Card.Footer className='flex flex-col justify-between items-center mt-4'>
        <span className='text-lg font-semibold'>$19.99</span>
        <Button variant='text'>Add to cart</Button>
      </Card.Footer>
    </Card>
  </div>
)

export const properties: DocumentedProperty[] = [childrenProp, classNameProps]
