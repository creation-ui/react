import React from 'react'

interface ErrorTextProps {
  error?: React.ReactNode
}

export const ErrorText = ({ error }: ErrorTextProps) =>
  error ? (
    <span className='form-element--error select-none'>{error}</span>
  ) : null
