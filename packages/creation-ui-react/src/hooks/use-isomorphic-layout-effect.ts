import { useEffect, useLayoutEffect } from 'react'
import { isBrowser } from '../utils/functions'

const useIsomorphicLayoutEffect = isBrowser ? useLayoutEffect : useEffect

export default useIsomorphicLayoutEffect
