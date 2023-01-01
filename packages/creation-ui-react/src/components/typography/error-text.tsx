import clsx from 'clsx'
import React from 'react'
import { shared } from '../../classes'

interface ErrorTextProps {
  error?: React.ReactNode
}

export const ErrorText = ({ error }: ErrorTextProps) =>
  error ? <span className={clsx(shared.error.text)}>{error}</span> : null
