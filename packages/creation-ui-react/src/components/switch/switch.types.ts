import React from 'react'
import { ElementSize } from '../../types'

export interface SwitchProps {
  id?:string
  /**
   * Is element required?
   */
  required?: boolean
  /**
   * Is element read-only?
   */
  readOnly?: boolean
  /**
   * Switch checked state
   */
  checked?: boolean
  /**
   * Switch is defaultChecked
   */
  defaultChecked?: boolean
  /**
   * Size of the switch
   */
  size?: ElementSize
  /**
   * Input label
   */
  label?: string
  /**
   * Is disabled?
   */
  disabled?: boolean

  onChange: (value: boolean) => void

  error?: React.ReactNode
}
