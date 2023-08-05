import React from 'react'

export type DocumentedProperty = {
  name: string
  type: string
  description: string
  defaultValue?: string
  note?: string
  experimental?: boolean
}
