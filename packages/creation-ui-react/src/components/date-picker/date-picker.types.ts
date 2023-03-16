import type DatePicker from 'react-datepicker'
import type {
  BaseComponentProps,
  ElementVariant
} from '../../types'

export type DatePickerProps = DatePicker['props'] &
  BaseComponentProps & {
    /**
     * Is button fullwidth?
     */
    fullWidth?: boolean
    /**
     * Is button loading?
     */
    loading?: boolean
    /**
     * What variant should button be ?
     */
    variant?: ElementVariant
  }
