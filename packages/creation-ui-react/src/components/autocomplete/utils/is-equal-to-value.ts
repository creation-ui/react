export const _isOptionEqualToValue = <T>(a: T, b: T | T[]) => {
  if (Array.isArray(b)) {
    return b.some(v => _isOptionEqualToValue(a, v))
  } else {
    return a === b
  }
}
