import getShortUUID from '@utils/short-uuid'
import React, { useState, useEffect, useLayoutEffect } from 'react'

const useIsomorphicEffect =
  typeof document !== 'undefined' ? useLayoutEffect : useEffect

const useReactId: () => string | undefined =
  (React as any)['useId'.toString()] || (() => undefined)

function useClientId() {
  const [uuid, setUuid] = useState('')

  useIsomorphicEffect(() => {
    setUuid(getShortUUID())
  }, [])

  return uuid
}

const getReactId = () => useReactId() ?? ''

const useId = (providedId?: string) =>
  providedId ?? (getReactId() || useClientId())

export default useId
