import objectsToArray from './obj-to-arr'

export default function objectsToString(object) {
  return objectsToArray(object).join(' ')
}
