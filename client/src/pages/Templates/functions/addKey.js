import { nanoid } from 'nanoid'

export default function(arr, keyLength = 7) {
  return arr.map(obj => ({ ...obj, key: nanoid(keyLength) }))
}