import { v4 as uuid } from 'uuid'

const getShortUUID = (): string => uuid().split('-')[0]

export default getShortUUID
